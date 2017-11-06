import shortid from 'shortid';

const TOAST_TIMER = 3000;

export const closeToast = (id) => ({
 type: 'CLOSE_TOAST',
 id
});

export const showToast = (success, text) => ({
  type: 'SHOW_TOAST',
  toast: {
    id: shortid.generate(),
    success,
    text
  }
});

export const showToastWithTimer = (success, text) => {
  return (dispatch, getState) => {
    const action = dispatch(showToast(success, text));

    setTimeout(() => {
      const toasts = getState().toasts;
      const toastId = action.toast.id;
      if (toasts.filter((toast) => toast.id === toastId).length) {
        dispatch(closeToast(toastId));
      }
    }, TOAST_TIMER);
  };
}

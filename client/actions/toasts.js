import shortid from 'shortid';

const TOAST_TIMER = 3000;

export const closeToast = (id) => ({
 type: 'CLOSE_TOAST',
 id
});

export const showToast = (success, message) => ({
  type: 'SHOW_TOAST',
  toast: {
    id: shortid.generate(),
    success: success,
    text: message
  }
});

export const showToastWithTimer = (success, message) => {
  return (dispatch, getState) => {
    const action = dispatch(showToast(success, message));

    setTimeout(() => {
      const toasts = getState().toasts;
      const toastId = action.toast.id;
      if (toasts.indexOf(toastId) !== -1) {
        dispatch(closeToast(toastId));
      }
    }, TOAST_TIMER);
  };
}

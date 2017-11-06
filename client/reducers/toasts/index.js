const toasts = (state = [], action) => {
  switch (action.type) {
    case 'CLOSE_TOAST':
      return state.filter((toast) => toast.id !== action.id);

    case 'SHOW_TOAST':
      return [...state.slice(0), action.toast];

    default:
      return state;
  }
}

export default toasts;

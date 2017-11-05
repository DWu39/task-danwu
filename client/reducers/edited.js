const edited = (state = false, action) => {
  switch (action.type) {
    case 'DELETE':
    case 'NEW':
    case 'OPEN':
      return true;
    case 'SHOW_TOAST':
      return !action.toast.success;
    default:
      return state;
  }
}

export default edited;

const edited = (state = false, action) => {
  switch (action.type) {
    case 'DELETE':
    case 'NEW':
    case 'OPEN':
      return true;
    case 'SAVE':
      return false;
    default:
      return state;
  }
}

export default edited;

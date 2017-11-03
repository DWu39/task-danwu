const DEFAULT_TODO = 'New task';

const getNextId = () => Math.random(); // TODO: how to generate more stably?

// inserts element without modification
const insert = (array, index, item) => {
  return [
    ...array.slice(0, index),
    item,
    ...array.slice(index+1)
  ];
}

const taskReducer = (state = [], action) => {
  switch (action.type) {
    case 'CLOSE': {
      const i = state.findIndex((task) => task.id === action.id);
      const closeTask = {
        ...state[i],
        isOpened: false
      };
      return insert(state, i, closeTask);
    }

    case 'DELETE':
      return state.filter((task) => task.id !== action.id);

    case 'EDIT': {
      const i = state.findIndex((task) => task.id === action.id);
      const editedTask = {
        ...state[i],
        text: action.text
      };
      return insert(state, i, editedTask);
    }

    case 'GET': {
      // TODO: use thunk to make API request
      console.log('get');
    }

    case 'NEW': {
      const newTask = {
        id: getNextId(),
        text: DEFAULT_TODO
      };
      return insert(state, 0, newTask);
    }

    case 'OPEN': {
      const i = state.findIndex((task) => task.id === action.id);
      const openedTask = {
        ...state[i],
        isOpened: true
      };
      return insert(state, i, openedTask);
    }

    case 'SAVE': {
      // TODO: use thunk to make API request
      console.log('save');
    }

    default:
      return state;
  }
}

export default taskReducer;

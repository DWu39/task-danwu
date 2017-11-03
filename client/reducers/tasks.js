const DEFAULT_TODO = 'New task';

// TODO: how to generate more stably?
const getNextId = () => {
  return Math.random();
};

const tasks = (state = [], action) => {
  switch (action.type) {
    case 'CLOSE': {
      const i = state.findIndex((task) => task.id === action.id);
      const closedTask = {
        ...state[i],
        isOpened: false,
        text: action.text || DEFAULT_TODO
      };
      return [
        ...state.slice(0, i),
        closedTask,
        ...state.slice(i+1)
      ];
    }

    case 'DELETE':
      return state.filter((task) => task.id !== action.id);

    case 'GET': {
      // TODO: use thunk to make API request
      console.log('get');
    }

    case 'NEW': {
      const newTask = {
        id: getNextId(),
        isOpened: true,
        text: DEFAULT_TODO
      };
      return [
        newTask,
        ...state.slice(0)
      ];
    }

    case 'OPEN': {
      const i = state.findIndex((task) => task.id === action.id);
      const openedTask = {
        ...state[i],
        isOpened: true
      };
      return [
        ...state.slice(0, i),
        openedTask,
        ...state.slice(i+1)
      ];
    }

    case 'SAVE': {
      // TODO: use thunk to make API request
      console.log('save');
    }

    default:
      return state;
  }
}

export default tasks;

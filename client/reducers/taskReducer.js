const DEFAULT_TODO = 'New task';

const getNextId = () => Math.random(); // TODO: how to generate more stably?

const taskReducer = (state = [], action) => {
  switch (action.type) {
    case 'NEW': {
      const newTask = {
        id: getNextId(),
        text: DEFAULT_TODO
      };
      return [newTask, ...state];
    }

    case 'DELETE':
      return state.filter((task) => task.id !== action.id);

    case 'EDIT': {
      const i = state.findIndex((task) => task.id === action.id);
      const editedTask = {
        id: action.id,
        text: action.text
      };
      return state
        .slice(0, i)
        .concat([editedTask])
        .concat(state.slice(i+1));
    }

    case 'GET': {
      // TODO: use thunk to make API request
      console.log('get');
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

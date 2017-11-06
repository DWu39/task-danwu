import shortid from 'shortid';

const DEFAULT_TASK = 'New task';

const tasks = (state = [], action) => {
  switch (action.type) {
    case 'CLOSE': {
      const i = state.findIndex((task) => task.id === action.id);
      const closedTask = {
        ...state[i],
        isOpened: false,
        text: action.text || DEFAULT_TASK
      };
      return [
        ...state.slice(0, i),
        closedTask,
        ...state.slice(i+1)
      ];
    }

    case 'DELETE':
      return state.filter((task) => task.id !== action.id);

    case 'NEW': {
      const newTask = {
        id: shortid.generate(),
        isOpened: true,
        text: DEFAULT_TASK
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

    case 'RECEIVE': {
      return action.tasks || [];
    }

    default:
      return state;
  }
}

export default tasks;

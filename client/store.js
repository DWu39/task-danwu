import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';

import reducer from './reducers';
import actions from './actions';

const loggerMiddleware = createLogger();

const store = createStore(
  reducer,
  applyMiddleware(
    loggerMiddleware,
    thunkMiddleware
  )
);

const { fetchTasks } = actions.tasks;

store.dispatch(fetchTasks());

export default store;

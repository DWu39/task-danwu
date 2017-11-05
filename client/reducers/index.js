import { combineReducers } from 'redux';

import edited from './edited';
import tasks from './tasks';
import toasts from './toasts';

const combined = combineReducers({
  edited,
  tasks,
  toasts
});

export default combined;

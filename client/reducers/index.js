import { combineReducers } from 'redux';

import tasks from './tasks';
import edited from './edited';

const combined = combineReducers({
  edited,
  tasks
});

export default combined;

import { combineReducers } from 'redux'

import tasks from './tasks'

const combined = combineReducers({
  tasks: tasks
});

export default combined;

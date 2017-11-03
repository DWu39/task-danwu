import { combineReducers } from 'redux'

import taskReducer from './taskReducer'

const combined = combineReducers({
  tasks: taskReducer
});

export default combined;

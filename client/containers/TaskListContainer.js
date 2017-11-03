import React from 'react';
import { connect } from 'react-redux';

import {
  closeTask,
  deleteTask,
  editTask,
  openTask
} from '../actions';
import TaskList from '../components/TaskList';

const mapStateToProps = (state) => ({
  tasks: state.tasks
});

const mapDispatchToProps = {
  closeTask,
  deleteTask,
  editTask,
  openTask
}

const TaskListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(TaskList);

export default TaskListContainer;
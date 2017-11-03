import React from 'react';
import { connect } from 'react-redux';

import actions from '../actions';
import TaskList from '../components/TaskList';

const {
  closeTask,
  deleteTask,
  openTask
} = actions.tasks;

const mapStateToProps = (state) => ({
  tasks: state.tasks
});

const mapDispatchToProps = {
  closeTask,
  deleteTask,
  openTask
}

const TaskListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(TaskList);

export default TaskListContainer;

import React from 'react';
import { connect } from 'react-redux';

import actions from '../actions';
import Tasks from '../components/Tasks';

const {
  closeTask,
  deleteTask,
  newTask,
  openTask,
  saveTasks
} = actions.tasks;

const mapStateToProps = ({ edited, tasks }) => ({
  edited,
  tasks
});

const mapDispatchToProps = {
  closeTask,
  deleteTask,
  newTask,
  openTask,
  saveTasks
}

const TasksContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Tasks);

export default TasksContainer;

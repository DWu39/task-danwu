import React from 'react';
import { connect } from 'react-redux';

import {
  deleteTask,
  editTask
} from '../actions';
import TaskList from '../components/TaskList';

const mapStateToProps = (state) => ({
  tasks: state.tasks
});

const mapDispatchToProps = {
  deleteTask,
  editTask
}

const TaskListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(TaskList);

export default TaskListContainer;

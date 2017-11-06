import PropTypes from 'prop-types';
import React from 'react';

import TaskList from './TaskList';
import Toolbar from './Toolbar';

const Tasks = ({
  closeTask,
  deleteTask,
  edited,
  newTask,
  openTask,
  saveTasks,
  tasks
}) => (
  <section>
    <Toolbar
      edited={edited}
      newTask={newTask}
      saveTasks={() => { saveTasks(tasks); }}
    />
    <TaskList
      closeTask={closeTask}
      deleteTask={deleteTask}
      openTask={openTask}
      tasks={tasks}
    />
  </section>
);

Tasks.propTypes = {
  closeTask: PropTypes.func,
  deleteTask: PropTypes.func,
  edited: PropTypes.bool,
  newTask: PropTypes.func,
  openTask: PropTypes.func,
  saveTasks: PropTypes.func,
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired
    })
  )
}

Tasks.defaultProps = {
  closeTask: null,
  deleteTask: null,
  edited: false,
  newTask: null,
  openTask: null,
  saveTasks: null,
  tasks: []
}

export default Tasks;

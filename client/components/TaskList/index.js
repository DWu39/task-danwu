import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

import Task from './Task';
import Wrapper from './Wrapper';
import theme from '../../style/theme';

const StyledTaskList = styled.ul`
  margin: 0;
  margin-bottom: 100px;
  padding: 0;
`;

const EmptyTaskList = Wrapper.extend`
  color: ${theme.navy};
  font-size: 20px;

  display: flex;
  flex-direction:column;
  justify-content:center;
  text-align: center;
`;

const TaskList = ({
  closeTask,
  deleteTask,
  editTask,
  openTask,
  tasks
}) => (
  <StyledTaskList>
    {tasks.length
      ? tasks.map((task) => (
        <Task
          key={task.id}
          closeTask={() => { closeTask(task.id); }}
          deleteTask={() => { deleteTask(task.id); }}
          editTask={(text) => { editTask(task.id, text); }}
          openTask={() => { openTask(task.id); }}
          isOpened={task.isOpened}
          text={task.text}
        />
      ))
      : <EmptyTaskList>You don't have any tasks. Start by clicking "Add Task"!</EmptyTaskList>
    }
  </StyledTaskList>
);

TaskList.propTypes = {
  deleteTask: PropTypes.func,
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired
    })
  )
}

TaskList.defaultProps = {
  deleteTask: null,
  tasks: []
}

export default TaskList;

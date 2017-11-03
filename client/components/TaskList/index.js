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
  deleteTask,
  tasks
}) => (
  <StyledTaskList>
    {tasks.length
      ? tasks.map((task) => {
        return (
          <Task
            key={task.id}
            deleteTask={() => { deleteTask(task.id); }}
            text={task.text}
          />
        );
      })
      : <EmptyTaskList>You don't have any tasks. Start by clicking "Add Task"!</EmptyTaskList>
    }
  </StyledTaskList>
);

TaskList.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired
    })
  )
}

TaskList.defaultProps = {
  tasks: []
}

export default TaskList;

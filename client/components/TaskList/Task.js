import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

import Button from '../Button';
import Wrapper from './Wrapper';
import theme from '../../style/theme';

const StyledTask = Wrapper.extend`
  padding: 14px;

  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`;

const StyledTaskText = styled.p`
  color: ${theme.gray};
  margin: 0;
  text-transform: uppercase;
`;

const TrashButton = styled(Button)`
  background: ${theme.white};
  color: ${theme.gray};
  font-size: 16px;
  padding: 0;
`;

const handleInputChange = (handler) => {
  return (event) => {
    handler(event.target.value);
  };
}

const handleKeyDown = (handler) => {
  return (event) => {
    // pressed enter, escape, or tab
    if (event.key === 'Enter' || event.keyCode === 27 || event.keyCode === 9) {
      event.preventDefault();
      handler();
    }
  };
}

const Task = ({
  closeTask,
  deleteTask,
  editTask,
  openTask,
  isOpened,
  text
}) => (
  <StyledTask>
    {isOpened
      ? <input
          autoFocus
          onBlur={closeTask}
          onChange={handleInputChange(editTask)}
          onKeyDown={handleKeyDown(closeTask)}
          placeholder='Edit task description'
          type='text'
        />
      : <StyledTaskText
          onClick={openTask}
          onFocus={openTask}
          tabIndex={0}
        >
          {text}
        </StyledTaskText>
    }
    <TrashButton onClick={deleteTask}>
      <i className="fa fa-trash-o"></i>
    </TrashButton>
  </StyledTask>
);

Task.propTypes = {
  deleteTask: PropTypes.func,
  editTask: PropTypes.func,
  openTask: PropTypes.func,
  isOpened: PropTypes.bool,
  text: PropTypes.string
}

Task.defaultProps = {
  deleteTask: null,
  editTask: null,
  openTask: null,
  isOpened: false,
  text: PropTypes.string
}

export default Task;

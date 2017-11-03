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

const Task = ({
  deleteTask,
  text
}) => (
  <StyledTask>
    <StyledTaskText>{text}</StyledTaskText>
    <TrashButton onClick={deleteTask}>
      <i className="fa fa-trash-o"></i>
    </TrashButton>
  </StyledTask>
);

Task.propTypes = {
  deleteTask: PropTypes.func,
  text: PropTypes.string
}

Task.defaultProps = {
  deleteTask: null,
  text: PropTypes.string
}

export default Task;

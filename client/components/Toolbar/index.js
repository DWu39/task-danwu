import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

import Button from '../Button';
import theme from '../../style/theme';

const Container = styled.div`
align-items: center;
  display: flex;
  justify-content: space-between;
  margin: 24px 0;
`;

const StyledHeading = styled.p`
  color: ${theme.navy};
  font-size: 28px;
  margin: 0;
  text-transform: capitalize;
`;

const ButtonGroup = styled.div`
  > button:first-child {
    margin-right: 12px;
  }
`;

const Toolbar = ({
  edited,
  newTask,
  saveTasks
}) => (
  <Container>
    <StyledHeading>tasks</StyledHeading>
    <ButtonGroup>
      <Button primary={false} onClick={newTask}>add task</Button>
      <Button disabled={!edited} onClick={saveTasks}>save</Button>
    </ButtonGroup>
  </Container>
);

Toolbar.propTypes = {
  edited: PropTypes.bool,
  newTask: PropTypes.func,
  saveTasks: PropTypes.func
};

Toolbar.defaultProps = {
  edited: false,
  newTask: null,
  saveTasks: null
}

export default Toolbar;

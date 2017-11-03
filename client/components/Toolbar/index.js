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
  newTask,
  save
}) => (
  <Container>
    <StyledHeading>tasks</StyledHeading>
    <ButtonGroup>
      <Button primary={false} onClick={newTask}>add task</Button>
      <Button onClick={save}>save</Button>
    </ButtonGroup>
  </Container>
);

export default Toolbar;

import React from 'react';
import styled from 'styled-components';

import Header from './Header';
import TaskListContainer from '../containers/TaskListContainer';
import ToolbarContainer from '../containers/ToolbarContainer';

const Container = styled.div`
  margin: 0 auto;
  padding: 0 18%;
`;

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Header/>
        <Container>
          <ToolbarContainer/>
          <TaskListContainer/>
        </Container>
      </div>
    );
  }
}

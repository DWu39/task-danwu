import React from 'react';
import styled from 'styled-components';

import Header from './Header';
import TasksContainer from '../containers/TasksContainer';
import ToastAreaContainer from '../containers/ToastAreaContainer';

const AppWrapper = styled.div`
  margin: 0 auto;
  padding: 0 18%;
`;

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Header/>
        <AppWrapper>
          <TasksContainer/>
          <ToastAreaContainer/>
        </AppWrapper>
      </div>
    );
  }
}

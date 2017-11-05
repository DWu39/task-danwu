import React from 'react';
import styled from 'styled-components';

import Header from './Header';
import TasksContainer from '../containers/TasksContainer';
import ToastAreaContainer from '../containers/ToastAreaContainer';

const Wrapper = styled.div`
  margin: 0 auto;
  padding: 0 18%;
`;

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Header/>
        <Wrapper>
          <TasksContainer/>
          <ToastAreaContainer/>
        </Wrapper>
      </div>
    );
  }
}

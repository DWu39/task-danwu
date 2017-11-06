import configureMockStore from 'redux-mock-store';
import fetchMock from 'fetch-mock';
import thunk from 'redux-thunk';

import * as actions from '../tasks';
import {
  API,
  FETCH_FAIL,
  SUCCESS_MESSAGE,
  FAILURE_MESSAGE
} from '../../constants';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('sync task action creators', () => {
  it('should create a close task action', () => {
    const id = 'id1';
    const text = 'new text';
    const expectedAction = {
      type: 'CLOSE',
      id,
      text
    }
    expect(actions.closeTask(id, text)).toEqual(expectedAction);
  });

  it('should create a delete task action', () => {
    const id = 'id1';
    const expectedAction = {
      type: 'DELETE',
      id
    }
    expect(actions.deleteTask(id)).toEqual(expectedAction);
  });

  it('should create a new task action', () => {
    const expectedAction = {
      type: 'NEW'
    }
    expect(actions.newTask()).toEqual(expectedAction);
  });

  it('should create an open task action', () => {
    const id = 'id1';
    const expectedAction = {
      type: 'OPEN',
      id
    }
    expect(actions.openTask(id)).toEqual(expectedAction);
  });

  it('should create a receive tasks action', () => {
    const tasks = [];
    const expectedAction = {
      type: 'RECEIVE',
      tasks
    }
    expect(actions.receiveTasks(tasks)).toEqual(expectedAction);
  });

});

describe('async task action creators', () => {
  afterEach(() => {
    fetchMock.reset();
    fetchMock.restore();
  });

  it('should fetch tasks', () => {
    const mockTasks = [
      {
        id: 'id1',
        text: 'Buy milk'
      }
    ];

    fetchMock.getOnce(
      API,
      {
        body: {
          tasks: mockTasks
        },
        headers: {
          'content-type': 'application/json'
        }
      }
    );

    const expectedActions = [
      {
        type: 'RECEIVE',
        tasks: mockTasks
      }
    ];

    const store = mockStore({ tasks: [] });

    return store.dispatch(actions.fetchTasks()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    })
  });
});

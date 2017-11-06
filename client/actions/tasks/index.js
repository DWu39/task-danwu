import { showToastWithTimer } from '../toasts';
import {
  API,
  FETCH_FAIL,
  SUCCESS_MESSAGE,
  FAILURE_MESSAGE
} from '../../constants';

export const closeTask = (id, text) => ({
  type: 'CLOSE',
  id,
  text
});

export const deleteTask = (id) => ({
  type: 'DELETE',
  id
});

export const fetchTasks = () => {
  // TODO: handle loading state to display loading indicator
  return (dispatch) => {
    return fetch(API)
      .then((response) => {
        if (response.status === 400) {
          dispatch(showToastWithTimer(false, FETCH_FAIL));
          return Promise.reject();
        }
        return response.json();
      })
      .then((json) => {
        const tasks = json.tasks;
        dispatch(receiveTasks(tasks));
      });
  };
};

export const newTask = () => ({
  type: 'NEW'
});

export const openTask = (id) => ({
  type: 'OPEN',
  id
});

export const receiveTasks = (tasks) => ({
  type: 'RECEIVE',
  tasks
});

export const saveTasks = (tasks) => {
  // TODO: handle saving state to display saving indicator
  return (dispatch) => {
    const payload = {
      method: 'POST',
      body: JSON.stringify({
        tasks
      }),
      headers: new Headers({
        'accept': 'application/json',
        'content-type': 'application/json'
      })
    };

    return fetch(API, payload)
      .then((response) => {
        if (response.status === 400) {
          dispatch(showToastWithTimer(false, FAILURE_MESSAGE));
        } else {
          dispatch(showToastWithTimer(true, SUCCESS_MESSAGE));
        }
      });
  }
}

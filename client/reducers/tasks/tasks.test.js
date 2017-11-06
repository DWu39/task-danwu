import tasks from './index';

describe('tasks reducer', () => {
  it('should return the initial state', () => {
    expect(tasks(undefined, {})).toEqual([]);
  });

  it('should handle CLOSE on any task', () => {
    let state = [
      {
        id: 'id1',
        isOpened: true,
        text: 'New task'
      },
      {
        id: 'id2',
        isOpened: true,
        text: 'New task'
      },
      {
        id: 'id3',
        isOpened: true,
        text: 'New task'
      },
    ];

    state = tasks(state, {
      type: 'CLOSE',
      id: 'id2',
      text: 'Buy milk'
    });

    expect(state[1]).toEqual({
      id: 'id2',
      isOpened: false,
      text: 'Buy milk'
    });

    state = tasks(state, {
      type: 'CLOSE',
      id: 'id3',
      text: 'Buy milk'
    });

    expect(state[2]).toEqual({
      id: 'id3',
      isOpened: false,
      text: 'Buy milk'
    });

    state = tasks(state, {
      type: 'CLOSE',
      id: 'id1',
      text: 'Buy milk'
    });

    expect(state[0]).toEqual({
      id: 'id1',
      isOpened: false,
      text: 'Buy milk'
    });
  });

  it('should handle DELETE', () => {
    const state = [
      {
        id: 'id1',
        isOpened: false,
        text: 'New task'
      }
    ];

    const action = {
      type: 'DELETE',
      id: 'id1'
    };

    expect(tasks(state, action)).toEqual([]);
  });

  it('should handle NEW by adding task to front', () => {
    const state = [
      {
        id: 'id1',
        isOpened: false,
        text: 'New task'
      }
    ];

    const action = {
      type: 'NEW'
    };

    const newState = tasks(state, action);

    expect(newState[1]).toEqual(state[0]);
  });

  it('should handle OPEN', () => {
    const state = [
      {
        id: 'id1',
        isOpened: false,
        text: 'New task'
      }
    ];

    const action = {
      type: 'OPEN',
      id: 'id1'
    };

    expect(tasks(state, action)).toEqual([
      {
        id: 'id1',
        isOpened: true,
        text: 'New task'
      }
    ]);
  });

  describe('RECEIVE', () => {
    it('should handle RECEIVE', () => {
      const state = [];
      const newTasks = [
        {
          id: 'id1',
          isOpened: false,
          text: 'New task'
        }
      ];

      const action = {
        type: 'RECEIVE',
        tasks: newTasks
      };

      expect(tasks(state, action)).toEqual(newTasks);
    });

    it('should handle RECEIVE of no tasks', () => {
      const state = [];

      const action = {
        type: 'RECEIVE',
        tasks: []
      };

      expect(tasks(state, action)).toEqual([]);
    });
  });
});

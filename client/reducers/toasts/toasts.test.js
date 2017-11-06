import toasts from './index';

describe('toasts reducer', () => {
  it('should return the initial state', () => {
    expect(toasts(undefined, {})).toEqual([]);
  });

  it('should handle CLOSE_TOAST on any toast', () => {
    let state = [
      {
        id: 'id1',
        text: 'Toast message'
      },
      {
        id: 'id2',
        text: 'Toast message'
      },
      {
        id: 'id3',
        text: 'Toast message'
      },
    ];

    state = toasts(state, {
      type: 'CLOSE_TOAST',
      id: 'id2',
      text: 'Toast message'
    });

    expect(state).toEqual([
      {
        id: 'id1',
        text: 'Toast message'
      },
      {
        id: 'id3',
        text: 'Toast message'
      },
    ]);

    state = toasts(state, {
      type: 'CLOSE_TOAST',
      id: 'id3',
      text: 'Toast message'
    });

    expect(state).toEqual([
      {
        id: 'id1',
        text: 'Toast message'
      }
    ]);

    state = toasts(state, {
      type: 'CLOSE_TOAST',
      id: 'id1',
      text: 'Toast message'
    });

    expect(state).toEqual([]);
  });

  it('should handle SHOW_TOAST by showing new toasts last', () => {
    let state = [
      {
        id: 'id1',
        text: 'Toast message'
      }
    ];

    state = toasts(state, {
      type: 'SHOW_TOAST',
      toast: {
        id: 'id3',
        text: 'Toast message'
      }
    });

    expect(state).toEqual([
      {
        id: 'id1',
        text: 'Toast message'
      },
      {
        id: 'id3',
        text: 'Toast message'
      }
    ]);
  });
});

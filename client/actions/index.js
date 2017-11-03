export const closeTask = (id, text) => ({
  type: 'CLOSE',
  id,
  text
});

export const deleteTask = (id) => ({
  type: 'DELETE',
  id
});

export const get = () => ({
  type: 'GET'
});

export const newTask = () => ({
  type: 'NEW'
});

export const openTask = (id) => ({
  type: 'OPEN',
  id
});

export const save = () => ({
  type: 'SAVE'
});

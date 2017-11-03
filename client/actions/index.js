export const deleteTask = (id) => ({
  type: 'DELETE',
  id
});

export const editTask = (id, text) => ({
  type: 'EDIT',
  id,
  text
});

export const get = () => ({
  type: 'GET'
});

export const newTask = () => ({
  type: 'NEW'
});

export const save = () => ({
  type: 'SAVE'
});

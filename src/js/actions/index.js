import { ADD_TODO, TOGGLE_TODO, COMMENT_TODO } from '../constants/action-types';

export const addTodo = (id, todo) => ({
  type: ADD_TODO,
  payload: todo,
  id,
  completed: false,
  comments: [],
  date: null
});

export const toggleTodo = id => ({
  type: TOGGLE_TODO,
  id
});

export const commentTodo = (id, comment) => ({
  type: COMMENT_TODO,
  id,
  comment
});

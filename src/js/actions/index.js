import { ADD_USERS, CURRENT_USER } from '../constants/action-types';

export const addUsers = users => ({
  type: ADD_USERS,
  users,
  isCurrentUser: false
});

export const addCurrentUser = id => ({
  type: CURRENT_USER,
  id
});

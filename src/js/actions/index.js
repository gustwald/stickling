import { ADD_USERS, CURRENT_USER } from '../constants/action-types';

export const addUsers = (firstName, lastName, uid) => ({
  type: ADD_USERS,
  firstName,
  lastName,
  uid,
  isCurrentUser: false
});

export const addCurrentUser = id => ({
  type: CURRENT_USER,
  id
});

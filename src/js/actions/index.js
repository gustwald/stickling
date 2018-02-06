import { ADD_USERS, SETCURRENT_USER } from '../constants/action-types';

export const addUsers = (firstName, lastName, uid) => ({
  type: ADD_USERS,
  firstName,
  lastName,
  uid,
  isCurrentUser: false
});

export const setCurrentUser = id => ({
  type: SETCURRENT_USER,
  id
});

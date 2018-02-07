import { ADD_USERS, SETCURRENT_USER, REMOVECURRENT_USER } from '../constants/action-types';

export const addUsers = (firstName, lastName, email, uid) => ({
  type: ADD_USERS,
  firstName,
  lastName,
  email,
  uid,
  isCurrentUser: false
});

export const setCurrentUser = id => ({
  type: SETCURRENT_USER,
  id
});

export const removeCurrentUser = () => ({
  type: REMOVECURRENT_USER
});

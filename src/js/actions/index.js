import {
  ADD_USER,
  ADD_USERS,
  SETCURRENT_USER,
  REMOVECURRENT_USER
} from '../constants/action-types';

export const addUser = (firstName, lastName, email, uid) => ({
  type: ADD_USER,
  firstName,
  lastName,
  email,
  uid
});

export const addUsers = users => ({
  type: ADD_USERS,
  users
});

export const setCurrentUser = id => ({
  type: SETCURRENT_USER,
  id
});

export const removeCurrentUser = () => ({
  type: REMOVECURRENT_USER
});

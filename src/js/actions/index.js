import { ADD_USERS } from '../constants/action-types';

export const addUsers = users => ({
  type: ADD_USERS,
  users
});

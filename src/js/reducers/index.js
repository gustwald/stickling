import { combineReducers } from 'redux';
import usersReducer from './usersReducer';
import currentUser from './currentUser';

export default combineReducers({ usersReducer, currentUser });

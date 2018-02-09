import { combineReducers } from 'redux';
import usersReducer from './usersReducer';
import currentUser from './currentUser';
import adsReducer from './adsReducer';

export default combineReducers({ usersReducer, currentUser, adsReducer });

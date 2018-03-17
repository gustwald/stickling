import {
  ADD_USER,
  ADD_USERS,
  SETCURRENT_USER,
  REMOVECURRENT_USER,
  ADD_AD,
  ADD_ADS,
  REMOVE_AD,
  ADD_SOCIALLINKS
} from '../constants/action-types';

export const addUser = (firstName, lastName, email, uid, photo) => ({
  type: ADD_USER,
  firstName,
  lastName,
  email,
  uid,
  photo
});

export const addSocialLinks = (uid, instagram, twitter) => ({
  type: ADD_SOCIALLINKS,
  uid,
  instagram,
  twitter
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

export const addAd = ad => ({
  type: ADD_AD,
  ad
});

export const addAds = ads => ({
  type: ADD_ADS,
  ads
});

export const removeAd = id => ({
  type: REMOVE_AD,
  id
});

import React from 'react';
import { googleLogin, addUserToFirestore } from '../../utils/firebase';
import styles from './GoogleSignup.scss';

const signIn = () => {
  googleLogin(onSuccess, onFailure);
};

const onSuccess = result => {
  console.log('succes');
  const uID = result.user.uid;
  const fName = result.additionalUserInfo.profile.given_name;
  const lName = result.additionalUserInfo.profile.family_name;

  addUserToFirestore(uID, fName, lName);
};

const onFailure = error => {
  console.log('error');
  const errorCode = error.code;
  const errorMessage = error.message;
  const email = error.email;
  const credential = error.credential;
  console.log({ errorCode, errorMessage, email, credential });
};

const GoogleSignup = () => (
  <div className="GoogleSignup">
    <button onClick={signIn}>Logga in med Google</button>
  </div>
);

export default GoogleSignup;

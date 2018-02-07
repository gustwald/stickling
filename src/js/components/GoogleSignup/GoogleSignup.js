import React from 'react';
import { googleLogin, addUserToFirestore } from '../../utils/firebase';
import styles from './GoogleSignup.scss';

const onSuccess = result => {
  console.log(result);
  const uID = result.user.uid;
  const email = result.user.email;
  const fName = result.additionalUserInfo.profile.given_name;
  const lName = result.additionalUserInfo.profile.family_name;

  addUserToFirestore(uID, fName, lName, email);
};

const onFailure = error => {
  const { email, credential, code, message } = error;
  console.log({ email, credential, code, message });
};

const signIn = () => {
  googleLogin(onSuccess, onFailure);
};

const GoogleSignup = () => (
  <div className="GoogleSignup">
    <button onClick={signIn}>Logga in med Google</button>
  </div>
);

export default GoogleSignup;

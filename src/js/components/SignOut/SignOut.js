import React from 'react';
import { signOutUser } from '../../utils/firebase';
import styles from './SignOut.scss';

const onSuccess = () => {
  console.log('utloggad');
};

const onFailure = error => {
  console.log(error);
};

const signOut = () => {
  signOutUser(onSuccess, onFailure);
};

const SignOut = () => (
  <div className="Signout">
    <button onClick={signOut}>Logga ut</button>
  </div>
);

export default SignOut;

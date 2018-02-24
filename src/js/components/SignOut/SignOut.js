import React from 'react';
import { Button } from 'antd';
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
    <Button className={styles.signOutBtn} onClick={signOut}>
      Logga ut
    </Button>
  </div>
);

export default SignOut;

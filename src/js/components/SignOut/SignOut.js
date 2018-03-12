import React from 'react';
import { Button, Icon } from 'antd';
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

const SignOut = ({ windowWidth }) => (
  <div className={styles.container}>
    {windowWidth > 450 ? (
      <Button icon="logout" className={styles.signOutBtn} onClick={signOut}>
        Logga ut
      </Button>
    ) : (
      <Icon onClick={signOut} type="logout" style={{ fontSize: 38, color: 'rgba(5, 175, 117, 1)' }}>
        <span className={styles.iconText}>Logga ut</span>
      </Icon>
    )}
  </div>
);

export default SignOut;

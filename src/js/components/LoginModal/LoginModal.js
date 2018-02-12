import React, { Component } from 'react';
import { connect } from 'react-redux';
import styles from './LoginModal.scss';
import GoogleSignup from '../GoogleSignup/GoogleSignup';
import SignOut from '../SignOut/SignOut';
import CurrentUser from '../CurrentUser/CurrentUser';
import { getCurrentUser } from '../../Selector';
import StandardSignup from '../StandardSignup/StandardSignup';
import StandardSignin from '../StandardSingIn/StandardSignin';
import leaf from '../../../../assets/leaf.svg';

class LoginModal extends Component {
  render() {
    return (
      <div className={styles.modal}>
        <div style={{ backgroundImage: `url(${leaf})` }} className={styles.leaf} />
        <div className={styles.switch}>
          <button className={styles.signIn}>Logga in</button>
          <button className={styles.signUp}>Registrera</button>
        </div>
        <CurrentUser />
        {this.props.currentUser
          ? null
          : [
              <StandardSignup key="signIn" />,
              <StandardSignin key="standardSignIn" />,
              <GoogleSignup key="googleSignup" />
            ]}
        {this.props.currentUser ? <SignOut /> : null}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  currentUser: getCurrentUser(state)
});

export default connect(mapStateToProps)(LoginModal);

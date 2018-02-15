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
  state = {
    showRegister: false,
    showLogin: true,
    activeLogin: true,
    activeRegister: false
  };

  showRegister = () => {
    this.setState({
      showRegister: true,
      showLogin: false,
      activeLogin: false,
      activeRegister: true
    });
  };

  showLogin = () => {
    this.setState({
      showRegister: false,
      showLogin: true,
      activeLogin: true,
      activeRegister: false
    });
  };

  render() {
    return (
      <div className={styles.modal}>
        <div style={{ backgroundImage: `url(${leaf})` }} className={styles.leaf} />
        <div className={styles.switch}>
          <button
            className={styles.signIn + ' ' + (this.state.activeLogin ? 'active' : 'hidden')}
            onClick={this.showLogin}
          >
            Logga in
          </button>
          <button
            className={styles.signUp + ' ' + (this.state.activeRegister ? 'active' : 'hidden')}
            onClick={this.showRegister}
          >
            Registrera
          </button>
        </div>

        {this.state.showRegister ? <StandardSignup /> : null}
        {this.state.showLogin ? <StandardSignin /> : null}
        <GoogleSignup />
        {/* <CurrentUser />
        {this.props.currentUser
          ? null
          : [
              <StandardSignup key="signIn" />,
              <StandardSignin key="standardSignIn" />,
              <GoogleSignup key="googleSignup" />
            ]}
        {this.props.currentUser ? <SignOut /> : null} */}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  currentUser: getCurrentUser(state)
});

export default connect(mapStateToProps)(LoginModal);

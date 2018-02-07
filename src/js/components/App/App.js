import React, { Component } from 'react';
import { connect } from 'react-redux';
import styles from './App.scss';
import GoogleSignup from '../GoogleSignup/GoogleSignup';
import SignOut from '../SignOut/SignOut';
import CurrentUser from '../CurrentUser/CurrentUser';
import { getCurrentUser } from '../../Selector';
import StandardSignup from '../StandardSignup/StandardSignup';
import StandardSignin from '../StandardSingIn/StandardSignin';

class App extends Component {
  componentDidMount() {}
  render() {
    return (
      <div className="container">
        <h1 className={styles.heading}>stickling</h1>
        <CurrentUser />
        {this.props.currentUser
          ? null
          : [
              <GoogleSignup key="googleSignup" />,
              <StandardSignup key="signIn" />,
              <StandardSignin key="standardSignIn" />
            ]}
        {this.props.currentUser ? <SignOut /> : null}
      </div>
    );
  }
}
const mapStateToProps = state => ({
  currentUser: getCurrentUser(state)
});

export default connect(mapStateToProps)(App);

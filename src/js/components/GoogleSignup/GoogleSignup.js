import React, { Component } from 'react';
import { connect } from 'react-redux';
import { googleLogin, addUserToFirestore } from '../../utils/firebase';
import { addUser } from '../../actions/index';
import styles from './GoogleSignup.scss';

class GoogleSignup extends React.Component {
  onSuccess = result => {
    const uID = result.user.uid;
    const email = result.user.email;
    const fName = result.additionalUserInfo.profile.given_name;
    const lName = result.additionalUserInfo.profile.family_name;

    this.props.addUser(fName, lName, email, uID);
    addUserToFirestore(uID, fName, lName, email);
  };

  onFailure = error => {
    const { email, credential, code, message } = error;
    console.log({ email, credential, code, message });
  };

  signIn = () => {
    googleLogin(this.onSuccess, this.onFailure);
  };

  render() {
    return (
      <div className="GoogleSignup">
        <button onClick={this.signIn}>Logga in med Google</button>
      </div>
    );
  }
}
const mapDispatchToProps = dispatch => {
  return {
    addUser: (firstName, lastName, email, uid) => dispatch(addUser(firstName, lastName, email, uid))
  };
};

export default connect(null, mapDispatchToProps)(GoogleSignup);

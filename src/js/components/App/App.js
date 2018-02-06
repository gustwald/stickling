import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styles from './App.scss';
import { initFirebase, getAllUsers, currentUser } from '../../utils/firebase';
import GoogleSignup from '../GoogleSignup/GoogleSignup';
import SignOut from '../SignOut/SignOut';
import { addUsers, addCurrentUser } from '../../actions/index';

class App extends Component {
  static propTypes = {
    addUsers: PropTypes.func.isRequired
  };

  componentWillMount() {
    initFirebase();
  }

  componentDidMount() {
    getAllUsers(this.onSuccess, this.onFailure);
  }

  onSuccess = result => {
    result.forEach(doc => {
      const firstName = doc.data().first;
      const lastName = doc.data().last;
      const uid = doc.data().uID;
      this.props.addUsers(firstName, lastName, uid);
    });
    const id = currentUser();
    this.props.addCurrentUser(id);
  };

  onFailure = error => {
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log({ errorCode, errorMessage });
  };

  render() {
    return (
      <div className="container">
        <h1 className={styles.heading}>stickling</h1>
        <GoogleSignup />
        <SignOut />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addUsers: (firstName, lastName, uid) => dispatch(addUsers(firstName, lastName, uid)),
    addCurrentUser: id => dispatch(addCurrentUser(id))
  };
};

export default connect(null, mapDispatchToProps)(App);

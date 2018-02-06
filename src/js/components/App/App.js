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
      this.props.addUsers(doc.data());
    });
    const id = currentUser();
    console.log(id);
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
    addUsers: users => dispatch(addUsers(users)),
    addCurrentUser: id => dispatch(addCurrentUser(id))
  };
};

export default connect(null, mapDispatchToProps)(App);

import React, { Component } from 'react';
import { connect } from 'react-redux';
import firebase from 'firebase';
import PropTypes from 'prop-types';
import { initFirebase, getAllUsers, currentUser, checkForAuthChange } from './utils/firebase';
import { addUsers, setCurrentUser, removeCurrentUser } from './actions/index';
import { getCurrentUser } from './Selector';

class FirebaseSetup extends Component {
  static propTypes = {
    addUsers: PropTypes.func.isRequired
  };

  componentWillMount() {
    initFirebase();

    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.props.setCurrentUser(user.uid);
      } else {
        this.props.removeCurrentUser();
      }
    });
  }

  componentDidMount() {
    getAllUsers(this.onSuccess, this.onFailure);
  }

  onSuccess = result => {
    result.forEach(doc => {
      const { first, last, email, uID } = doc.data();
      this.props.addUsers(first, last, email, uID);
    });
  };

  onFailure = error => {
    var errorCode = error.code;
    var errorMessage = error.message;
  };

  render() {
    return null;
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addUsers: (firstName, lastName, email, uid) =>
      dispatch(addUsers(firstName, lastName, email, uid)),
    setCurrentUser: id => dispatch(setCurrentUser(id)),
    removeCurrentUser: () => dispatch(removeCurrentUser())
  };
};

export default connect(null, mapDispatchToProps)(FirebaseSetup);

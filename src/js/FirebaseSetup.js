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
      console.log(user);
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
    const users = [];
    result.forEach(doc => {
      const { first, last, email, uID } = doc.data();
      users.push({
        first,
        last,
        email,
        uID
      });
    });
    this.props.addUsers(users);
  };

  onFailure = error => {
    const { message, code } = error;
    console.log({ message, code });
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

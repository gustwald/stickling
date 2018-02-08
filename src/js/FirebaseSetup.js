import React, { Component } from 'react';
import { connect } from 'react-redux';
import firebase from 'firebase';
import PropTypes from 'prop-types';
import { initFirebase, getAllUsers, getAdsFromFirestore } from './utils/firebase';
import { addUsers, setCurrentUser, removeCurrentUser } from './actions/index';
import { getCurrentUser } from './Selector';

class FirebaseSetup extends Component {
  static propTypes = {
    addUsers: PropTypes.func.isRequired,
    setCurrentUser: PropTypes.func.isRequired,
    removeCurrentUser: PropTypes.func.isRequired
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
    getAllUsers(this.onUsersSuccess, this.onUsersFailure);
    getAdsFromFirestore(this.onAdSuccess, this.onAdFailure);
  }

  onAdSuccess = result => {
    result.forEach(doc => {
      // doc.data() is never undefined for query doc snapshots
      console.log(doc.id, ' => ', doc.data());
    });
  };

  onUsersSuccess = result => {
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

  onUsersFailure = error => {
    const { message, code } = error;
    console.log({ message, code });
  };

  render() {
    return null;
  }
}

const mapDispatchToProps = dispatch => ({
  addUsers: (firstName, lastName, email, uid) =>
    dispatch(addUsers(firstName, lastName, email, uid)),
  setCurrentUser: id => dispatch(setCurrentUser(id)),
  removeCurrentUser: () => dispatch(removeCurrentUser())
});

export default connect(null, mapDispatchToProps)(FirebaseSetup);

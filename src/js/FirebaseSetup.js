import React, { Component } from 'react';
import { connect } from 'react-redux';
import firebase from 'firebase';
import PropTypes from 'prop-types';
import { initFirebase, getAllUsers, getAdsFromFirestore } from './utils/firebase';
import { addUsers, setCurrentUser, removeCurrentUser, addAds } from './actions/index';
import { getCurrentUser } from './Selector';

class FirebaseSetup extends Component {
  static propTypes = {
    addUsers: PropTypes.func.isRequired,
    addAds: PropTypes.func.isRequired,
    setCurrentUser: PropTypes.func.isRequired,
    removeCurrentUser: PropTypes.func.isRequired
  };

  componentWillMount() {
    initFirebase();

    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        console.log(`vi har en user${user}`);
        this.props.setCurrentUser(user.uid);
      } else {
        this.props.removeCurrentUser();
      }
    });
  }

  componentDidMount() {
    getAllUsers(this.onUsersSuccess, this.onUsersFailure);
    // getAdsFromFirestore(this.onAdSuccess, this.onAdFailure);
  }

  onAdSuccess = result => {
    const ads = [];
    result.forEach(doc => {
      const { adText, adTitle, adPrice, uID, id } = doc.data();
      ads.push({
        adText,
        adTitle,
        adPrice,
        id,
        uID
      });
    });
    this.props.addAds(ads);
  };
  onAdFailure = error => {
    const { message, code } = error;
    console.log({ message, code });
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
  removeCurrentUser: () => dispatch(removeCurrentUser()),
  addAds: (adTitle, adText, adPrice, uId, id) => dispatch(addAds(adTitle, adText, adPrice, uId, id))
});

export default connect(null, mapDispatchToProps)(FirebaseSetup);

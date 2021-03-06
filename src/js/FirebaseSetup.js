import React, { Component } from 'react';
import { connect } from 'react-redux';
import firebase from 'firebase';
import PropTypes from 'prop-types';
import { initFirebase, getAllUsers, getAdsFromFirestore } from './utils/firebase';
import { addUsers, setCurrentUser, removeCurrentUser, addAds } from './actions/index';

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
    const ads = [];
    result.forEach(doc => {
      const id = doc.id;
      const {
        adText,
        adTitle,
        adPrice,
        uId,
        image,
        adShips,
        adFreightCost,
        adPickup,
        addToMap,
        adLatitude,
        adLongitude,
        date,
        email
      } = doc.data();
      ads.push({
        adTitle,
        adText,
        adPrice,
        uId,
        id,
        image,
        adShips,
        adFreightCost,
        adPickup,
        addToMap,
        adLatitude,
        adLongitude,
        date,
        email
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
      const { first, last, email, uID, photo, twitter, instagram } = doc.data();
      users.push({
        first,
        last,
        email,
        uID,
        photo,
        instagram,
        twitter
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
  addAds: ads => dispatch(addAds(ads))
});

export default connect(null, mapDispatchToProps)(FirebaseSetup);

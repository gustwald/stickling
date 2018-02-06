import React, { Component } from 'react';
import { connect } from 'react-redux';
import firebase from 'firebase';
import PropTypes from 'prop-types';
import styles from './App.scss';
import { initFirebase, getAllUsers, currentUser, checkForAuthChange } from '../../utils/firebase';
import GoogleSignup from '../GoogleSignup/GoogleSignup';
import SignOut from '../SignOut/SignOut';
import { addUsers, setCurrentUser, removeCurrentUser } from '../../actions/index';
import { getCurrentUser } from '../../Selector';

class App extends Component {
  static propTypes = {
    addUsers: PropTypes.func.isRequired
  };
  //
  componentWillMount() {
    initFirebase();

    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        console.log('kommer in här när vi loggar in');
        console.log(user);
        this.props.setCurrentUser(user.uid);
      } else {
        console.log('ingen user');
        this.props.removeCurrentUser();
      }
    });
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
  };

  onFailure = error => {
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log({ errorCode, errorMessage });
  };

  render() {
    console.log('Nuvarande:', this.props.currentUser);
    // console.log(this.props.state);
    return (
      <div className="container">
        <h1 className={styles.heading}>stickling</h1>
        <h1>
          {this.props.currentUser !== null &&
            this.props.currentUser !== undefined &&
            this.props.currentUser.firstName}
        </h1>
        {this.props.currentUser ? null : <GoogleSignup />}
        {this.props.currentUser ? <SignOut /> : null}
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    state: state,
    currentUser: getCurrentUser(state)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addUsers: (firstName, lastName, uid) => dispatch(addUsers(firstName, lastName, uid)),
    setCurrentUser: id => dispatch(setCurrentUser(id)),
    removeCurrentUser: () => dispatch(removeCurrentUser())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

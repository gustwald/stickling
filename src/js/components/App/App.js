import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styles from './App.scss';
import { initFirebase, getAllUsers } from '../../utils/firebase';
import GoogleSignup from '../GoogleSignup/GoogleSignup';

import { addUsers } from '../../actions/index';

class ConnectedApp extends Component {
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
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addUsers: users => dispatch(addUsers(users))
  };
};
const App = connect(null, mapDispatchToProps)(ConnectedApp);

ConnectedApp.propTypes = {
  addUsers: PropTypes.func.isRequired
};

export default App;

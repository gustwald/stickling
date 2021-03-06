import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { googleLogin, addUserToFirestore } from '../../utils/firebase';
import { addUser } from '../../actions/index';
import GoogleOutline from '../../../../assets/Google-outline.svg';
import styles from './GoogleSignup.scss';

class GoogleSignup extends Component {
  onSuccess = result => {
    const uID = result.user.uid;
    const email = result.user.email;
    const fName = result.additionalUserInfo.profile.given_name;
    const lName = result.additionalUserInfo.profile.family_name;
    const photo = result.user.photoURL;

    this.props.addUser(fName, lName, email, uID, photo);
    addUserToFirestore(uID, fName, lName, email, photo);
    this.props.closeModal();
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
      <div className={styles.container}>
        <button onClick={this.signIn}>
          <span style={{ backgroundImage: `url(${GoogleOutline})` }} />
          {this.props.btnText}
        </button>
      </div>
    );
  }
}

GoogleSignup.propTypes = {
  addUser: PropTypes.func.isRequired,
  closeModal: PropTypes.func.isRequired
};

const mapDispatchToProps = dispatch => ({
  addUser: (firstName, lastName, email, uid) => dispatch(addUser(firstName, lastName, email, uid))
});

export default connect(null, mapDispatchToProps)(GoogleSignup);

import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createUserWithEmail, addUserToFirestore } from '../../utils/firebase';
import { addUser } from '../../actions/index';
import styles from './StandardSignup.scss';
import leaf from '../../../../assets/leaf.svg';

class StandardSignup extends Component {
  state = {
    username: '',
    password: '',
    firstName: '',
    lastName: '',
    error: ''
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  onSucces = result => {
    const uID = result.uid;
    const fName = this.state.firstName;
    const lName = this.state.lastName;
    const email = this.state.username;
    const photo = '';

    this.props.addUser(fName, lName, email, uID, photo);
    addUserToFirestore(uID, fName, lName, email, photo);
    this.props.closeModal();
  };

  onFailure = error => {
    console.log(error);
    this.setState({ error: error.message });
    const { email, credential, code, message } = error;
    console.log({ email, credential, code, message });
  };

  register = () => {
    createUserWithEmail(this.onSucces, this.onFailure, this.state);
  };

  render() {
    return (
      <div className={styles.signUp}>
        <div className={styles.leaf} style={{ backgroundImage: `url(${leaf})` }} />
        <form className={styles.SignUpForm}>
          <label htmlFor="Email">
            <input
              type="email"
              name="username"
              id="Email"
              placeholder="Email"
              onChange={this.onChange}
            />
          </label>
          <label htmlFor="FirstName">
            <input
              type="text"
              name="firstName"
              id="FirstName"
              placeholder="Förnamn"
              onChange={this.onChange}
            />
          </label>
          <label htmlFor="LastName">
            <input
              type="text"
              name="lastName"
              id="LastName"
              placeholder="Efternamn"
              onChange={this.onChange}
            />
          </label>
          <label htmlFor="Password">
            <input
              type="password"
              name="password"
              id="Password"
              placeholder="Lösenord"
              onChange={this.onChange}
            />
          </label>
          <button type="button" onClick={this.register}>
            Registrera
          </button>
          <p>{this.state.error}</p>
        </form>
      </div>
    );
  }
}

StandardSignup.propTypes = {
  addUser: PropTypes.func.isRequired,
  closeModal: PropTypes.func.isRequired
};

const mapDispatchToProps = dispatch => ({
  addUser: (firstName, lastName, email, uid, photo) =>
    dispatch(addUser(firstName, lastName, email, uid, photo))
});

export default connect(null, mapDispatchToProps)(StandardSignup);

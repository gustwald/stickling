import React, { Component } from 'react';
import { createUserWithEmail, addUserToFirestore } from '../../utils/firebase';
import styles from './StandardSignup.scss';

class StandardSignup extends Component {
  state = {
    username: '',
    password: '',
    firstName: '',
    lastName: '',
    error: ''
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  register = result => {
    createUserWithEmail(this.onSucces, this.onFailure, this.state);
  };

  onSucces = result => {
    console.log('inne i succes');
    const uID = result.uid;
    const fName = this.state.firstName;
    const lName = this.state.lastName;
    const email = this.state.username;

    console.log({ uID, fName, lName });
    addUserToFirestore(uID, fName, lName, email);
  };

  onFailure = error => {
    console.log(error);
    this.setState({ error: error.message });
    const { email, credential, code, message } = error;
    console.log({ email, credential, code, message });
  };

  render() {
    return (
      <div className={styles.signUp}>
        <form className="SignupForm">
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

export default StandardSignup;

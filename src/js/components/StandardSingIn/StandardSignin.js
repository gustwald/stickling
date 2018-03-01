import React, { Component } from 'react';
import styles from './StandardSignin.scss';
import { logInWithEmail } from '../../utils/firebase';

class StandardSignin extends Component {
  state = {
    username: '',
    password: '',
    error: ''
  };

  onSuccess = result => {
    this.props.closeModal();
  };

  onFailure = error => {
    this.setState({ error: error.message });
    const { email, credential, code, message } = error;
    console.log({ email, credential, code, message });
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  signIn = result => {
    logInWithEmail(this.onSuccess, this.onFailure, this.state);
  };

  render() {
    return (
      <div className={styles.container}>
        <form className="SigninForm">
          <label htmlFor="Email">
            <input type="text" name="username" placeholder="Email" onChange={this.onChange} />
          </label>
          <label htmlFor="Password">
            <input
              type="password"
              name="password"
              placeholder="Lösenord"
              onChange={this.onChange}
            />
          </label>
          <button type="button" onClick={this.signIn}>
            Logga in
          </button>
        </form>
        <p>{this.state.error}</p>
      </div>
    );
  }
}

export default StandardSignin;

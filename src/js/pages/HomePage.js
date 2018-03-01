import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getCurrentUser } from '../Selector';
import styles from './HomePage.scss';
import logo from '../../../assets/logo.svg';
import Register from '../components/Register/Register';

class HomePage extends Component {
  state = {};

  render() {
    return (
      <div className={styles.wrapper}>
        <div className={styles.mainLogo} style={{ backgroundImage: `url(${logo})` }} />
        <div className={styles.textWrapper}>
          <h1>Sticklingar.se</h1>
          <h3>Vi är sveriges ledande marknadsplats för köp&sälj av sticklingar!</h3>
          <h5 className={styles.createAccount}>
            {' '}
            Skapa ett <Register /> för att komma igång{' '}
          </h5>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  currentUser: getCurrentUser(state)
});

export default connect(mapStateToProps)(HomePage);

import React, { Component } from 'react';
import { connect } from 'react-redux';
import CurrentUser from '../components/CurrentUser/CurrentUser';
import { getCurrentUser } from '../Selector';
import LoginModal from '../components/LoginModal/LoginModal';
import HomePageAds from '../components/HomePageAds/HomePageAds';
import Navigation from '../components/Navigation/Navigation';
import SignOut from '../components/SignOut/SignOut';
import styles from './HomePage.scss';
import logo from '../../../assets/logo.svg';
import { Modal } from 'react-materialize';

class HomePage extends Component {
  state = {};
  render() {
    return (
      <div className={styles.wrapper}>
        <div className={styles.mainLogo} style={{ backgroundImage: `url(${logo})` }} />
        <div className={styles.textWrapper}>
          <h1>Sticklingar.se</h1>
          <h3>Vi är sveriges ledande marknadsplats för köp&sälj av sticklingar!</h3>
          <h5>
            {' '}
            Skapa ett{' '}
            <Modal trigger={<span>konto</span>}>
              <p>HÄR SKA VI HA REGISTRERA COMPONENT</p>
            </Modal>{' '}
            för att komma igång{' '}
          </h5>
        </div>
        {/* {this.props.currentUser ? null : <LoginModal />}
          {this.props.currentUser ? <SignOut /> : null} */}
        {/* <CurrentUser /> */}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  currentUser: getCurrentUser(state)
});

export default connect(mapStateToProps)(HomePage);

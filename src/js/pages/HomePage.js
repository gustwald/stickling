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
import { Row, Col } from 'react-materialize';

class HomePage extends Component {
  render() {
    return (
      <div className={styles.wrapper}>
        <div className={styles.mainLogo} style={{ backgroundImage: `url(${logo})` }} />
        <div className={styles.textWrapper}>
          <h1>Sticklingar.se</h1>
          <h3>
            Vi är sveriges ledande marknadsplats <br /> för köp&sälj av stickingar!
          </h3>
          <h5>
            {' '}
            Skapa ett <span>konto</span> för att komma igång{' '}
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

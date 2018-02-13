import React, { Component } from 'react';
import { connect } from 'react-redux';
import CurrentUser from '../components/CurrentUser/CurrentUser';
import { getCurrentUser } from '../Selector';
import LoginModal from '../components/LoginModal/LoginModal';
import HomePageAds from '../components/HomePageAds/HomePageAds';
import Navigation from '../components/Navigation/Navigation';
import SignOut from '../components/SignOut/SignOut';
import styles from './HomePage.scss';

class HomePage extends Component {
  render() {
    return (
      <div className={styles.container}>
        <CurrentUser />
        <HomePageAds />
        {this.props.currentUser ? null : <LoginModal />}
        {this.props.currentUser ? <SignOut /> : null}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  currentUser: getCurrentUser(state)
});

export default connect(mapStateToProps)(HomePage);

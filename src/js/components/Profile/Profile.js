import React, { Component } from 'react';
import { connect } from 'react-redux';
import CurrentUser from '../CurrentUser/CurrentUser';
import { getCurrentUser } from '../../Selector';
import styles from './Profile.scss';
import herotest from '../../../../assets/hero-test.jpg';
import gurt from '../../../../assets/gurt.png';

class Profile extends Component {
  render() {
    return (
      <div className={styles.container}>
        <div className={styles.hero} style={{ backgroundImage: `url(${herotest})` }} />
        <div className={styles.mainContent}>
          <div className={styles.profilePic} style={{ backgroundImage: `url(${gurt})` }} />
          <div className={styles.profileInfo}>
            <h1>{this.props.currentUser.first + ' ' + this.props.currentUser.last}</h1>
            <h3>{this.props.currentUser.email}</h3>
          </div>
          <div className={styles.adContainer}>
            <div className={styles.ad} />
            <div className={styles.ad} />
            <div className={styles.ad} />
            <div className={styles.ad} />
            <div className={styles.ad} />
            <div className={styles.ad} />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  currentUser: getCurrentUser(state)
});

export default connect(mapStateToProps)(Profile);

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getCurrentUser } from '../../Selector';
import DisplayAds from '../DisplayAds/DisplayAds';
import styles from './Profile.scss';
import gurt from '../../../../assets/gurt.png';
import twitter from '../../../../assets/twitter.svg';
import insta from '../../../../assets/instagram.svg';
import { Row, Col } from 'antd';

class Profile extends Component {
  state = {};
  render() {
    return (
      <div className={styles.container}>
        <Row>
          <Col md={24} className={styles.profileInfo}>
            <div
              className={styles.profilePic}
              style={{ backgroundImage: `url(${this.props.currentUser.photo})` }}
            />
            <h3>
              <span>{`${this.props.currentUser.first} ${this.props.currentUser.last}`}</span>
            </h3>
            <div className={styles.socialMedia}>
              <div className={styles.instagram} style={{ backgroundImage: `url(${insta})` }} />
              <div className={styles.twitter} style={{ backgroundImage: `url(${twitter})` }} />
            </div>
          </Col>
          <Col md={24} className={styles.profileAds}>
            <DisplayAds ads={this.props.userAds} />
          </Col>
        </Row>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const userAds = state.adsReducer.filter(ad => ad.uId === state.currentUser.id);

  return {
    currentUser: getCurrentUser(state),
    userAds
  };
};

export default connect(mapStateToProps)(Profile);

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Col, Row } from 'react-materialize';
import { getCurrentUser } from '../../Selector';
import DisplayAds from '../DisplayAds/DisplayAds';
import styles from './Profile.scss';
import gurt from '../../../../assets/gurt.png';
import twitter from '../../../../assets/twitter.svg';
import insta from '../../../../assets/instagram.svg';

class Profile extends Component {
  state = {};
  render() {
    return (
      <div className="container">
        <Row className={styles.profileInfoWrapper}>
          <Col className={styles.profilePic} s={2} style={{ backgroundImage: `url(${gurt})` }} />
          <Col className={styles.profileInfo} s={10}>
            <h3>
              <span>{`${this.props.currentUser.first} ${this.props.currentUser.last}`}</span>
            </h3>
            <div className={styles.socialMedia}>
              <div className={styles.instagram} style={{ backgroundImage: `url(${insta})` }} />
              <div className={styles.twitter} style={{ backgroundImage: `url(${twitter})` }} />
            </div>
          </Col>
        </Row>
        <DisplayAds ads={this.props.userAds} />
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

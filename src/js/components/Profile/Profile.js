import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getCurrentUser, getUserById, getAdsByUser } from '../../Selector';
import DisplayAds from '../DisplayAds/DisplayAds';
import styles from './Profile.scss';
import gurt from '../../../../assets/gurt.png';
import twitter from '../../../../assets/twitter.svg';
import insta from '../../../../assets/instagram.svg';
import { Row, Col } from 'antd';

class Profile extends Component {
  state = {};
  componentDidMount() {}
  render() {
    if (!this.props.user) return <h1>Användaren hittades inte.</h1>;
    return (
      <div className={styles.container}>
        <Row>
          <Col md={24} className={styles.profileInfo}>
            <div
              className={styles.profilePic}
              style={{ backgroundImage: `url(${this.props.user.photo})` }}
            />
            <h3>
              <span>{`${this.props.user.first} ${this.props.user.last}`}</span>
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

const mapStateToProps = (state, ownProps) => {
  const currentUser = getCurrentUser(state);
  return {
    user: ownProps.userId ? getUserById(state, ownProps.userId) : currentUser,
    userAds: ownProps.userId
      ? getAdsByUser(state, ownProps.userId)
      : getAdsByUser(state, currentUser.uID)
  };
};

export default connect(mapStateToProps)(Profile);

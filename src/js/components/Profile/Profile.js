import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Row, Col } from 'antd';
import PropTypes from 'prop-types';
import { getCurrentUser, getUserById, getAdsByUser } from '../../Selector';
import DisplayAds from '../DisplayAds/DisplayAds';
import SocialSettings from '../SocialSettings/SocialSettings';
import styles from './Profile.scss';
import twitter from '../../../../assets/twitter.svg';
import insta from '../../../../assets/instagram.svg';
import noUserPhoto from '../../../../assets/nopp.png';

class Profile extends Component {
  render() {
    if (!this.props.user) return <h1>Användaren hittades inte.</h1>;
    return (
      <div className={styles.container}>
        <Row>
          <Col md={24} className={styles.profileInfo}>
            <div
              className={styles.profilePic}
              style={{
                backgroundImage: this.props.user.photo
                  ? `url(${this.props.user.photo})`
                  : `url(${noUserPhoto})`
              }}
            />
            <h3>
              <span>{`${this.props.user.first} ${this.props.user.last}`}</span>
            </h3>
            <div className={styles.socialMedia}>
              <div className={styles.instagram} style={{ backgroundImage: `url(${insta})` }} />
              <div className={styles.twitter} style={{ backgroundImage: `url(${twitter})` }} />
              {this.props.userId ? null : <SocialSettings />}
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

Profile.propTypes = {
  user: PropTypes.object.isRequired,
  userAds: PropTypes.array.isRequired
};

const mapStateToProps = (state, ownProps) => {
  const currentUser = getCurrentUser(state);
  return {
    user: ownProps.userId ? getUserById(state, ownProps.userId) : currentUser,
    userAds: ownProps.userId
      ? getAdsByUser(state, ownProps.userId)
      : getAdsByUser(state, currentUser.uID),
    userId: ownProps.userId ? ownProps.userId : null
  };
};

export default connect(mapStateToProps)(Profile);

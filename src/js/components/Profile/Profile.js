import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Row, Col } from 'antd';
import PropTypes from 'prop-types';
import { getCurrentUser, getUserById, getAdsByUser } from '../../Selector';
import DisplayAds from '../DisplayAds/DisplayAds';
import UserRating from '../UserRating/UserRating';
import SocialMedia from '../SocialMedia/SocialMedia';
import styles from './Profile.scss';
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
            <UserRating />
            <SocialMedia userId={this.props.userId} />
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

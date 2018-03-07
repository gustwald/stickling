import React from 'react';
import { connect } from 'react-redux';
import { getAdById, getUserById, getCurrentUser } from '../../Selector';
import { Avatar } from 'antd';

import styles from './SingleAd.scss';

const SingleAd = ({ ad, user }) => (
  <div className={styles.container}>
    <div className={styles.adContainer}>
      <div className={styles.adHeader}>
        <Avatar size="large" src={user.photo} />
        <h3 className={styles.adPerson}>
          <span>{`${user.first} ${user.last}`}</span>
        </h3>
      </div>
      <div className={styles.adImage} style={{ backgroundImage: `url(${ad.image})` }} />
      <div className={styles.adInfo}>
        <h1>{ad.adTitle}</h1>
        <p>{ad.adText}</p>
      </div>
    </div>
  </div>
);

const mapStateToProps = (state, ownProps) => {
  const user = getAdById(state, ownProps.adId);
  return {
    user: getUserById(state, user.uId),
    ad: ownProps.adId ? getAdById(state, ownProps.adId) : null
  };
};

export default connect(mapStateToProps)(SingleAd);

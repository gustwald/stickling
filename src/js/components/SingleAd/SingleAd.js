import React from 'react';
import { connect } from 'react-redux';
import { getAdById, getUserById, getCurrentUser } from '../../Selector';
import { Avatar } from 'antd';
import delivery from '../../../../assets/delivery.svg';
import package2 from '../../../../assets/package3.svg';
import email from '../../../../assets/mail.svg';

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
        <h2>{ad.adPrice + ' ' + 'kr'}</h2>
        <p>{ad.adText}</p>
        <div className={styles.adIcons}>
          <div className={styles.Icon} style={{ backgroundImage: `url(${delivery})` }} />
          <div className={styles.Icon} style={{ backgroundImage: `url(${package2})` }} />
          <div className={styles.Icon} style={{ backgroundImage: `url(${email})` }} />
        </div>
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

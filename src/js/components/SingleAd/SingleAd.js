import React from 'react';
import { connect } from 'react-redux';
import { getAdById } from '../../Selector';
import { Avatar } from 'antd';

import styles from './SingleAd.scss';

const SingleAd = ({ ad }) => (
  <div className={styles.container}>
    <div className={styles.adContainer}>
      <div className={styles.adHeader}>
        <Avatar size="large" />
        <h3 className={styles.adPerson}>
          <span>Profilnamn</span>
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
  console.log('saddd');
  return {
    ad: ownProps.adId ? getAdById(state, ownProps.adId) : null
  };
};

export default connect(mapStateToProps)(SingleAd);

import React from 'react';
import { connect } from 'react-redux';
import { getAdById } from '../../Selector';

import styles from './SingleAd.scss';

const SingleAd = ({ ad }) => (
  <div className={styles.container}>
    <h1>singlead</h1>
  </div>
);

const mapStateToProps = (state, ownProps) => {
  console.log('saddd');
  return {
    ad: ownProps.adId ? getAdById(state, ownProps.adId) : null
  };
};

export default connect(mapStateToProps)(SingleAd);

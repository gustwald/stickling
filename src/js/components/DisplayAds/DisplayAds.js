import React from 'react';
import { connect } from 'react-redux';
import styles from './DisplayAds.scss';

const DisplayAds = ({ ads }) => (
  <div>
    {ads.map(ad => (
      <div key={ad.id}>
        {ad.adTitle} {ad.adText}
        {ad.adPrice}
      </div>
    ))}
  </div>
);

const mapStateToProps = state => ({
  ads: state.adsReducer
});
export default connect(mapStateToProps)(DisplayAds);

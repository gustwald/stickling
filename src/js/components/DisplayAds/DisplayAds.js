import React from 'react';
import { connect } from 'react-redux';
import styles from './DisplayAds.scss';

const DisplayAds = ({ ads }) => (
  <div className={styles.grid}>
    {ads.map(ad => (
      <div className={styles.gridItem} key={ad.id}>
        {ad.adTitle} {ad.adText}
        {ad.adPrice}
        {ad.date}
        <img className={styles.img} alt={ad.title} src={ad.image} />
      </div>
    ))}
  </div>
);

const mapStateToProps = state => ({
  ads: state.adsReducer
});
export default connect(mapStateToProps)(DisplayAds);

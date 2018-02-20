import React from 'react';
import { connect } from 'react-redux';
import styles from './DisplayAds.scss';

const DisplayAds = ({ ads }) => (
  <div className={styles.grid}>
    {ads.map(ad => (
      <div className={styles.gridItem} key={ad.id}>
        <h3>{ad.adTitle}</h3>
        <img className={styles.img} alt={ad.title} src={ad.image} />
        <p>{ad.adText}</p>
        <p>{ad.adPrice}</p>
        <p>{ad.date}</p>
      </div>
    ))}
  </div>
);

const mapStateToProps = state => ({
  ads: state.adsReducer
});
export default connect(mapStateToProps)(DisplayAds);

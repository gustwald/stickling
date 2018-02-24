import React from 'react';
import PropTypes from 'prop-types';
import { Pagination } from 'antd';
import styles from './DisplayAds.scss';

const DisplayAds = ({ ads }) => (
  <div className="container">
    {ads.map(ad => (
      <div key={ad.id}>
        <h1>{ad.adTitle}</h1>
        <p>{ad.adText}</p>
        <p>{`${ad.adPrice}kr`}</p>
        {ad.adShips ? <p>Kan skickas</p> : <p>Skickas inte</p>}
        {ad.adPickup ? <p>Kan hämtas</p> : <p>Hämtas inte</p>}
        <img className={styles.adImage} src={ad.image} alt={ad.title} />
      </div>
    ))}
    <Pagination defaultCurrent={1} total={50} />
  </div>
);

DisplayAds.propTypes = {
  ads: PropTypes.array.isRequired
};

export default DisplayAds;

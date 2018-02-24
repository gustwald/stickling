import React from 'react';
import PropTypes from 'prop-types';
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
      </div>
    ))}
  </div>
);

DisplayAds.propTypes = {
  ads: PropTypes.array.isRequired
};

export default DisplayAds;

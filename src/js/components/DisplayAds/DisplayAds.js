import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Pagination, Icon } from 'antd';
import { removeAd } from '../../actions/index';
import { removedAdNotification } from '../Notification/Notification';
import { deleteAd } from '../../utils/firebase';
import styles from './DisplayAds.scss';

const onSucces = id => {
  // console.log('inne här');
  // console.log(id);
  // // fixa detta
  // removeAd(id);
  // removedAdNotification(id);
};

const onFailure = error => {
  console.log(error);
};

const aDdelete = id => {
  console.log(`första ad delete funktionen ${id}`);
  deleteAd(id, onSucces, onFailure);
  removedAdNotification(id);
};

const DisplayAds = ({ ads, currentUserId }) => (
  <div className="container">
    {ads.map(ad => (
      <div key={ad.id}>
        {ad.uId === currentUserId ? (
          <Icon className={styles.deleteAd} type="delete" onClick={() => aDdelete(ad.id)} />
        ) : null}
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

const mapDispatchToProps = dispatch => ({
  removeAd: id => dispatch(removeAd(id))
});

const mapStateToProps = state => ({
  currentUserId: state.currentUser.id
});

DisplayAds.propTypes = {
  ads: PropTypes.array.isRequired,
  currentUserId: PropTypes.string.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(DisplayAds);

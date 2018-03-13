import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import PropTypes from 'prop-types';
import { Avatar, Tooltip } from 'antd';
import { getAdById, getUserById } from '../../Selector';
import delivery from '../../../../assets/delivery.svg';
import package2 from '../../../../assets/package3.svg';
import email from '../../../../assets/mail.svg';
import noUserPhoto from '../../../../assets/nopp.png';
import styles from './SingleAd.scss';

const SingleAd = ({ ad, user }) => (
  <div className={styles.container}>
    <div className={styles.adContainer}>
      <Link to={`/user/${ad.uId}`}>
        <div className={styles.adHeader}>
          {user.photo ? (
            <Avatar className={styles.avatar} size="large" src={user.photo} />
          ) : (
            <Avatar src={noUserPhoto} size="large" />
          )}
          <h3 className={styles.adPerson}>
            <span>{`${user.first}`}</span>
          </h3>
        </div>
      </Link>
      <div className={styles.adImage} style={{ backgroundImage: `url(${ad.image})` }} />
      <div className={styles.adInfo}>
        <h1>{ad.adTitle}</h1>
        <h2>{`${ad.adPrice} kr`}</h2>
        <p>{ad.adText}</p>
        <div className={styles.adIcons}>
          {ad.adShips ? (
            <Tooltip title={`Den här sticklingen kan skickas för ${ad.adFreightCost} kr`}>
              <div className={styles.Icon} style={{ backgroundImage: `url(${delivery})` }} />
            </Tooltip>
          ) : (
            <Tooltip title="Den här sticklingen kan inte skickas">
              <div
                className={styles.IconDisabled}
                style={{ backgroundImage: `url(${delivery})` }}
              />
            </Tooltip>
          )}
          {ad.adPickup ? (
            <Tooltip title="Den här sticklingen kan hämtas">
              <div className={styles.Icon} style={{ backgroundImage: `url(${package2})` }} />
            </Tooltip>
          ) : (
            <Tooltip title="Den här sticklingen kan inte hämtas">
              <div
                className={styles.IconDisabled}
                style={{ backgroundImage: `url(${package2})` }}
              />
            </Tooltip>
          )}

          <Tooltip title={`Kontakta ${user.first}`}>
            <a href={`mailto:${ad.email}?subject=Intresserad av din annons: ${ad.adTitle}`}>
              <div className={styles.Icon} style={{ backgroundImage: `url(${email})` }} />
            </a>
          </Tooltip>
        </div>
      </div>
    </div>
  </div>
);

SingleAd.propTypes = {
  ad: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired
};

const mapStateToProps = (state, ownProps) => {
  const user = getAdById(state, ownProps.adId);
  return {
    user: getUserById(state, user.uId),
    ad: ownProps.adId ? getAdById(state, ownProps.adId) : null
  };
};

export default connect(mapStateToProps)(SingleAd);

import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import twitter from '../../../../assets/twitter.svg';
import insta from '../../../../assets/instagram.svg';
import SocialSettings from '../SocialSettings/SocialSettings';
import styles from './SocialMedia.scss';

class SocialMedia extends Component {
  render() {
    return (
      <div className={styles.socialMedia}>
        <div className={styles.instagram} style={{ backgroundImage: `url(${insta})` }} />
        <div className={styles.twitter} style={{ backgroundImage: `url(${twitter})` }} />
        {this.props.userId ? null : <SocialSettings />}
      </div>
    );
  }
}

// SocialMedia.propTypes = {
//   userId: PropTypes.string.is
// };

export default SocialMedia;

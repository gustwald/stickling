import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Tooltip } from 'antd';
import { getCurrentUser, getUserById } from '../../Selector';
import twitterLogo from '../../../../assets/twitter.svg';
import instaLogo from '../../../../assets/instagram.svg';
import SocialSettings from '../SocialSettings/SocialSettings';
import styles from './SocialMedia.scss';

class SocialMedia extends Component {
  render() {
    const { user } = this.props;
    const { instagram, twitter } = user;
    return (
      <div className={styles.container}>
        {instagram ? (
          <a href={user.instagram} target="_blank">
            <div
              className={instagram ? styles.icon : styles.disabled}
              style={{ backgroundImage: `url(${instaLogo})` }}
            />
          </a>
        ) : (
          <Tooltip title="Den har personen har inte instagram">
            <a href={user.instagram} target="_blank">
              <div
                className={instagram ? styles.icon : styles.disabled}
                style={{ backgroundImage: `url(${instaLogo})` }}
              />
            </a>
          </Tooltip>
        )}
        {twitter ? (
          <a href={user.twitter} target="_blank">
            <div
              className={twitter ? styles.icon : styles.disabled}
              style={{ backgroundImage: `url(${twitterLogo})` }}
            />
          </a>
        ) : (
          <Tooltip title="Den här personen har inte twitter">
            <a href={user.twitter} target="_blank">
              <div
                className={twitter ? styles.icon : styles.disabled}
                style={{ backgroundImage: `url(${twitterLogo})` }}
              />
            </a>
          </Tooltip>
        )}

        {this.props.userId ? null : <SocialSettings />}
      </div>
    );
  }
}
const mapStateToProps = (state, ownProps) => {
  const currentUser = getCurrentUser(state);
  return {
    user: ownProps.userId ? getUserById(state, ownProps.userId) : currentUser
  };
};
export default connect(mapStateToProps)(SocialMedia);

import React, { Component } from 'react';
import { Icon } from 'antd';
import styles from './SocialSettings.scss';

class SocialSettings extends Component {
  render() {
    return (
      <div className={styles.container}>
        <Icon className={styles.icon} type="setting" />
      </div>
    );
  }
}

export default SocialSettings;

import React, { Component } from 'react';
import CreateAd from '../components/CreateAd/CreateAd';
import DisplayAds from '../components/DisplayAds/DisplayAds';
import styles from './AdsPage.scss';

class AdsPage extends Component {
  state = {};
  render() {
    return (
      <div className={styles.container}>
        <CreateAd />
        <DisplayAds />
        {/* {this.props.children} */}
      </div>
    );
  }
}

export default AdsPage;

import React, { Component } from 'react';
import { connect } from 'react-redux';
import CreateAd from '../components/CreateAd/CreateAd';
import DisplayAds from '../components/DisplayAds/DisplayAds';
import styles from './AdsPage.scss';

class AdsPage extends Component {
  state = {};
  render() {
    return (
      <div className={styles.container}>
        <CreateAd />
        <DisplayAds ads={this.props.ads} />
        {/* {this.props.children} */}
      </div>
    );
  }
}
const mapStateToProps = state => ({
  ads: state.adsReducer
});

export default connect(mapStateToProps)(AdsPage);

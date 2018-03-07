import React, { Component } from 'react';
import CreateAd from '../components/CreateAd/CreateAd';
import DisplayAds from '../components/DisplayAds/DisplayAds';

class AdsPage extends Component {
  state = {};
  render() {
    return (
      <div>
        <CreateAd />
        <DisplayAds />
        {this.props.children}
      </div>
    );
  }
}

export default AdsPage;

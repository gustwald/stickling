import React, { Component } from 'react';
import SingleAd from '../components/SingleAd/SingleAd';

class AdsPage extends Component {
  state = {};
  render() {
    return (
      <div>
        <h1>sadsda</h1>
        <SingleAd adId={this.props.params.adId} />
      </div>
    );
  }
}

export default AdsPage;

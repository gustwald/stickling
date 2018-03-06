import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getCurrentUser } from '../Selector';
import CreateAd from '../components/CreateAd/CreateAd';
import DisplayAds from '../components/DisplayAds/DisplayAds';

class AdsPage extends Component {
  state = {};
  render() {
    return (
      <div>
        <CreateAd />
        <DisplayAds adId={this.props.params.adId} />
      </div>
    );
  }
}
// const mapStateToProps = state => ({
//   currentUser: getCurrentUser(state),
//   ads: state.adsReducer
// });

export default AdsPage;

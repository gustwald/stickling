import React from 'react';
import { connect } from 'react-redux';
import { getCurrentUser } from '../Selector';
import CreateAd from '../components/CreateAd/CreateAd';
import DisplayAds from '../components/DisplayAds/DisplayAds';

const AdsPage = ({ ads }) => (
  <div>
    <h1>Ads</h1>
    <CreateAd />
    <DisplayAds ads={ads} />
  </div>
);
const mapStateToProps = state => ({
  currentUser: getCurrentUser(state),
  ads: state.adsReducer
});

export default connect(mapStateToProps)(AdsPage);

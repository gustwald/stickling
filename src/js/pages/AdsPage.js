import React from 'react';
import { connect } from 'react-redux';
import { getCurrentUser } from '../Selector';
import CreateAd from '../components/CreateAd/CreateAd';
import DisplayAds from '../components/DisplayAds/DisplayAds';

const AdsPage = () => (
  <div>
    <h1>Ads</h1>
    <CreateAd />
    <DisplayAds />
  </div>
);
const mapStateToProps = state => ({
  currentUser: getCurrentUser(state)
});

export default connect(mapStateToProps)(AdsPage);

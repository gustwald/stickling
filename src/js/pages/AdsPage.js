import React from 'react';
import { connect } from 'react-redux';
import { getCurrentUser } from '../Selector';
import CreateAd from '../components/CreateAd/CreateAd';
import AdSearch from '../components/AdSearch/AdSearch';
import DisplayAds from '../components/DisplayAds/DisplayAds';

const AdsPage = ({ ads }) => (
  <div>
    <h1>Ads</h1>
    <AdSearch />
    <CreateAd />
    <DisplayAds ads={ads} />
  </div>
);
const mapStateToProps = state => ({
  currentUser: getCurrentUser(state),
  ads: state.adsReducer
});

export default connect(mapStateToProps)(AdsPage);

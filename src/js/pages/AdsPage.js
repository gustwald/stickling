import React from 'react';
import { connect } from 'react-redux';
import { getCurrentUser } from '../Selector';
import CreateAd from '../components/CreateAd/CreateAd';

const AdsPage = () => (
  <div>
    <h1>Ads</h1>
    <CreateAd currentUser />
  </div>
);
const mapStateToProps = state => ({
  currentUser: getCurrentUser(state)
});

export default connect(mapStateToProps)(AdsPage);

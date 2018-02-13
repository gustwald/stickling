import React from 'react';
import LoginModal from '../components/LoginModal/LoginModal';
import HomePageAds from '../components/HomePageAds/HomePageAds';
import styles from './HomePage.scss';

const HomePage = () => (
  <div className={styles.container}>
    <HomePageAds />
    <LoginModal />
  </div>
);

export default HomePage;

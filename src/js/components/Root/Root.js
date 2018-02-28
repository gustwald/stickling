import React from 'react';
import FirebaseSetup from '../../FirebaseSetup';
import Navigation from '../Navigation/Navigation';
import TopNavigation from '../TopNavigation/TopNavigation';
import styles from './Root.scss';

const Root = ({ children }) => (
  <div className={styles.container}>
    <FirebaseSetup />
    <TopNavigation />
    <Navigation />

    {children}
  </div>
);

export default Root;

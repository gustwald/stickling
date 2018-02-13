import React from 'react';
import FirebaseSetup from '../../FirebaseSetup';
import Navigation from '../Navigation/Navigation';
import Header from '../Header/Header';
import styles from './Root.scss';

const Root = ({ children }) => (
  <div className={styles.container}>
    <FirebaseSetup />
    <Navigation />
    <Header />
    {children}
  </div>
);

export default Root;

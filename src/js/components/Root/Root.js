import React from 'react';
import FirebaseSetup from '../../FirebaseSetup';
import Navigation from '../Navigation/Navigation';
import Header from '../Header/Header';

const Root = ({ children }) => (
  <div>

    <FirebaseSetup />
    <Navigation />
    <Header />
    {children}
  </div>
);

export default Root;

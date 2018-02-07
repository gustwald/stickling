import React from 'react';
import FirebaseSetup from '../../FirebaseSetup';
import Navigation from '../Navigation/Navigation';

const Root = ({ children }) => (
  <div>
    <FirebaseSetup />
    <Navigation />
    {children}
  </div>
);

export default Root;

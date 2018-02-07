import React from 'react';
import FirebaseSetup from '../../FirebaseSetup';

const Root = ({ children }) => (
  <div>
    {children}
    <FirebaseSetup />
  </div>
);

export default Root;

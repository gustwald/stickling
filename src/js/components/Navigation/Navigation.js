import React from 'react';
import { Link } from 'react-router';
import styles from './Navigation.scss';

const Navigation = () => (
  <div>
    <Link to={'/'}>Home</Link>
    <Link to={'/profile'}>Profile</Link>
  </div>
);

export default Navigation;

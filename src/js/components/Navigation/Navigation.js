import React from 'react';
import { Link } from 'react-router';
import styles from './Navigation.scss';

const Navigation = () => (
  <div>
    <Link to="/">Hem</Link>
    <Link to="/profile">Profil</Link>
    <Link to="/ads">Annonser</Link>
  </div>
);

export default Navigation;

import React from 'react';
import { Link } from 'react-router';
import styles from './Navigation.scss';
import logo from './../../../../assets/logo.js';

console.log(logo);

const Navigation = () => (
  <div className={styles.navBar}>
    <div className={styles.logo}></div>
    <Link className={styles.links} to="/">Hem</Link>
    <Link className={styles.links} to="/profile">Profil</Link>
    <Link className={styles.links} to="/ads">Annonser</Link>
  </div>
);

export default Navigation;

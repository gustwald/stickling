import React from 'react';
import { Link } from 'react-router';
import styles from './Navigation.scss';
import logo from './../../../../assets/logo.svg';

const Navigation = () => (
  <div className={styles.navBar}>
    <div style={{ backgroundImage: `url(${logo})` }} className={styles.logo} />
    <Link className={styles.links} to="/">
      Hem
    </Link>
    <Link className={styles.links} to="/profil">
      Profil
    </Link>
    <Link className={styles.links} to="/annonser">
      Annonser
    </Link>
    <Link className={styles.links} to="/karta">
      karta
    </Link>
  </div>
);

export default Navigation;

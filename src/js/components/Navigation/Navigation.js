import React from 'react';
import { Link } from 'react-router';
import styles from './Navigation.scss';
import logo from './../../../../assets/logo.svg';
import { CSSTransitionGroup } from 'react-transition-group';

// const Navigation = () => (
//   <div className={styles.navBar}>
//     <div style={{ backgroundImage: `url(${logo})` }} className={styles.logo} />
//     <CSSTransitionGroup 
//               transitionName="example"
//               transitionAppear={true}
//               transitionAppearTimeout={500}
//     >

//     <Link className={styles.links} to="/">
//       Hem
//     </Link>
//     <Link className={styles.links} to="/profil">
//       Profil
//     </Link>
//     <Link className={styles.links} to="/annonser">
//       Annonser
//     </Link>
//     <Link className={styles.links} to="/karta">
//       karta
//     </Link>
//     </CSSTransitionGroup>
//   </div>
// );

const Navigation = () => (
  <CSSTransitionGroup 
    component="ul"
    className={styles.navBar}
    transitionName="example"
    transitionAppear={true}
    transitionAppearTimeout={3000}
    transitionEnterTimeout={3000}
    transitionLeaveTimeout={3000}
    >
    <li style={{ backgroundImage: `url(${logo})` }} className={styles.logo} />
    <li className={styles.links} to="/">Hem</li>
    <li className={styles.links} to="/profil">Profil</li>
    <li className={styles.links} to="/annonser">Annonser</li>
    <li className={styles.links} to="/karta">Karta</li>
  </CSSTransitionGroup>
);

export default Navigation;

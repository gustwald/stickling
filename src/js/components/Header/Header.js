import React from 'react';
import styles from './Header.scss';
import hero from '../../../../assets/hero.jpg';

const Header = () => <div className={styles.hero} style={{ backgroundImage: `url(${hero})` }} />;

export default Header;

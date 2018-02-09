import React from 'react';
import styles from './Header.scss';
import hero from '../../../../assets/hero.jpg';

const Header = () => (
    <div style={{ backgroundImage: `url(${hero})` }} className={styles.hero}>
    </div>
);

export default Header;
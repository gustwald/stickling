import React from 'react';
import styles from './Loader.scss';

const Loader = () => (
  <div className={styles.spinner}>
    <div className={styles.bounce1} />
    <div className={styles.bounce2} />
    <div className={styles.bounce3} />
  </div>
);

export default Loader;

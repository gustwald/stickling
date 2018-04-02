import React from 'react';
import notfound from '../../../../assets/notfound.gif';
import styles from './PageNotFound.scss';

const PageNotFound = () => (
  <div className={styles.container}>
    <h1>Sidan hittades inte :(</h1>
    <img className={styles.gif} src={notfound} alt="plant throwing" />
  </div>
);

export default PageNotFound;

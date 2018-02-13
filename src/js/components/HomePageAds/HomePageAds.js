import React, { Component } from 'react';
import styles from './HomePageAds.scss';
import testad1 from '../../../../assets/testad1.jpg';
import testad2 from '../../../../assets/testad2.jpg';
import testad3 from '../../../../assets/testad3.jpg';
import testad4 from '../../../../assets/testad4.jpg';
import testad5 from '../../../../assets/testad5.jpg';
import testad6 from '../../../../assets/testad6.jpg';
import testad7 from '../../../../assets/testad7.jpg';
import testad8 from '../../../../assets/testad8.jpg';

class HomePageAds extends Component {
  render() {
    return (
      <div className={styles.container}>
        <h1>Stickli.ng</h1>
        <div style={{ backgroundImage: `url(${testad1})` }} className={styles.ad} />
        <div style={{ backgroundImage: `url(${testad2})` }} className={styles.ad} />
        <div style={{ backgroundImage: `url(${testad3})` }} className={styles.ad} />
        <div style={{ backgroundImage: `url(${testad4})` }} className={styles.ad} />
        <div style={{ backgroundImage: `url(${testad5})` }} className={styles.ad} />
        <div style={{ backgroundImage: `url(${testad6})` }} className={styles.ad} />
        <div style={{ backgroundImage: `url(${testad7})` }} className={styles.ad} />
        <div style={{ backgroundImage: `url(${testad8})` }} className={styles.ad} />
      </div>
    );
  }
}

export default HomePageAds;

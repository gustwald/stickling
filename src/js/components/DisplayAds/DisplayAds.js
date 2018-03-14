import React, { Component } from 'react';
import { Link } from 'react-router';
import moment from 'moment';
import styles from './DisplayAds.scss';
import AdSearch from '../AdSearch/AdSearch';

class DisplayAds extends Component {
  state = {};

  onSearch = searchWord => {
    this.setState({ searchWord });
  };

  render() {
    let { ads } = this.props;
    const { searchWord } = this.state;

    if (searchWord) {
      ads = ads.filter(ad => ad.adTitle.toLowerCase().includes(searchWord.toLowerCase()));
    }

    const sorted = ads.sort((a, b) => {
      const dateA = moment(a.date);
      const dateB = moment(b.date);
      return dateA.isBefore(dateB);
    });

    return (
      <div className={styles.container}>
        <AdSearch onSearch={this.onSearch} />
        <div className={styles.adContainer}>
          {sorted.map(ad => (
            <div key={ad.id} className={styles.ad}>
              <Link to={`/ads/${ad.id}`}>
                <div className={styles.adWrapper}>
                  <div className={styles.adImage} style={{ backgroundImage: `url(${ad.image})` }} />
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default DisplayAds;

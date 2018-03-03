import React from 'react';
import { Icon, Avatar } from 'antd';
import Map from '../components/Map/Map';
import styles from './MapPage.scss';
import shipping from '../../../assets/delivery.svg';
import manPackage from '../../../assets/package2.svg';

class MapPage extends React.PureComponent {
  state = {
    isMarkerShown: true,
    mapWidth: '100%',
    mapHeight: '90vh',
    adItem: styles.adItem,
    windowWidth: window.innerWidth,
    ad: {}
  };

  componentDidMount() {
    // this.delayedShowMarker();
  }

  checkWidth = () => {
    if (this.state.windowWidth < 450) {
      this.setState({ mapHeight: '80vh' });
    }
  };

  delayedShowMarker = () => {
    setTimeout(() => {
      this.setState({ isMarkerShown: true });
    }, 2000);
  };

  handleMarkerClick = ad => {
    if (this.state.windowWidth > 450) {
      this.setState({ mapWidth: '60%', ad });
    } else this.setState({ mapHeight: '40vh', ad });
  };

  closeMarkerClick = () => {
    if (this.state.windowWidth > 450) {
      this.setState({ ad: {}, mapWidth: '100%' });
    } else if (this.state.windowWidth > 450) {
      this.setState({ ad: {}, mapHeight: '80vh' });
    } else this.setState({ ad: {}, mapHeight: '90vh' });
  };

  render() {
    return (
      <div className={styles.container}>
        <Map
          isMarkerShown={this.state.isMarkerShown}
          googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={
            <div
              className={styles.mapContainer}
              style={{ height: this.state.mapHeight, width: this.state.mapWidth }}
            />
          }
          mapElement={<div style={{ height: `100%` }} />}
          onMarkerClick={this.handleMarkerClick}
        />
        {(this.state.mapWidth === '100%' && this.state.mapHeight === '90vh') ||
        this.state.mapHeight === '80vh' ? null : (
          <div className={styles.ad}>
            <Icon className={styles.adClose} type="close-square" onClick={this.closeMarkerClick} />
            <div
              className={styles.adImage}
              style={{ backgroundImage: `url(${this.state.ad.image})` }}
            />
            <div className={styles.adInfoWrapper}>
              <div className={styles.adInfo}>
                <h1 className={this.state.adItem}>
                  <span>{this.state.ad.adTitle}</span>
                </h1>
                <p className={this.state.adItem}>{this.state.ad.adText}</p>
                <h3>{this.state.ad.adPrice + ' ' + 'kr'}</h3>
              </div>
            </div>
            <div className={styles.adShipping}>
              <div className={styles.adShippingWrapper}>
                {this.state.ad.adShips ? (
                  <div
                    className={styles.shipping}
                    style={{ backgroundImage: `url(${shipping})` }}
                  />
                ) : (
                  <div className={styles.shipping} style={{ backgroundImage: `url(${shipping})` }}>
                    <Icon className={styles.noShipping} type="close" />
                  </div>
                )}
              </div>
              <div className={styles.adShippingWrapper}>
                {this.state.ad.adPickup ? (
                  <div
                    className={styles.pickup}
                    style={{ backgroundImage: `url(${manPackage})` }}
                  />
                ) : (
                  <div className={styles.pickup} style={{ backgroundImage: `url(${manPackage})` }}>
                    <Icon className={styles.noShipping} type="close" />
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default MapPage;

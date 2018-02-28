import React from 'react';
import { Icon, Avatar } from 'antd';
import Map from '../components/Map/Map';
import styles from './MapPage.scss';

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
    // this.setState({ adItem: styles.showAdItem });
    // console.log(ad);
    if (this.state.windowWidth > 450) {
      this.setState({ mapWidth: '60%', ad });
    } else this.setState({ mapHeight: '40vh', ad });
  };

  closeMarkerClick = () => {
    console.log('stänger');
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
          <div className={styles.adContainer}>
            <Icon className={styles.adClose} type="close-square" onClick={this.closeMarkerClick} />
            {/* <img className={styles.adImage} alt={this.state.ad.adTitle} src={this.state.ad.image} /> */}
            <Avatar size="large" src={this.state.ad.image} />
            <h1 className={this.state.adItem}>{this.state.ad.adTitle}</h1>
            <p className={this.state.adItem}>{this.state.ad.adText}</p>
            <p className={this.state.adItem}>{this.state.ad.adPrice}</p>
            {this.state.ad.adShips ? (
              <p className={this.state.adItem}> Kan skickas</p>
            ) : (
              <p className={this.state.adItem}> Skickas inte</p>
            )}
            {this.state.ad.adPickup ? (
              <p className={this.state.adItem}>Kan hämtas</p>
            ) : (
              <p className={this.state.adItem}>Hämtas inte</p>
            )}
          </div>
        )}
      </div>
    );
  }
}

export default MapPage;

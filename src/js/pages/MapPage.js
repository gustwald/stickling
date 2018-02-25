import React from 'react';
import { Icon } from 'antd';
import Map from '../components/Map/Map';
import styles from './MapPage.scss';

class MapPage extends React.PureComponent {
  state = {
    isMarkerShown: false,
    mapWidth: '100%',
    mapHeight: '90vh',
    windowWidth: window.innerWidth,
    ad: {}
  };
  // 450px;
  componentDidMount() {
    this.delayedShowMarker();
  }

  delayedShowMarker = () => {
    setTimeout(() => {
      this.setState({ isMarkerShown: true });
    }, 2000);
  };

  handleMarkerClick = ad => {
    // console.log(ad);
    if (this.state.windowWidth > 450) {
      this.setState({ mapWidth: '60%', ad });
    } else this.setState({ mapHeight: '40vh', ad });
  };

  closeMarkerClick = () => {
    console.log('stänger');
    if (this.state.windowWidth > 450) {
      this.setState({ ad: {}, mapWidth: '100%' });
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
        {this.state.mapWidth === '100%' && this.state.mapHeight === '90vh' ? null : (
          <div className={styles.adContainer}>
            <Icon className={styles.adClose} type="close-square" onClick={this.closeMarkerClick} />
            <h1>{this.state.ad.adTitle}</h1>
            <p>{this.state.ad.adText}</p>
            <p>{this.state.ad.adPrice}</p>
            {this.state.ad.adShips ? <p> Kan skickas</p> : <p> Skickas inte</p>}
            {this.state.ad.adPickup ? <p>Kan hämtas</p> : <p>Hämtas inte</p>}
          </div>
        )}
      </div>
    );
  }
}

export default MapPage;

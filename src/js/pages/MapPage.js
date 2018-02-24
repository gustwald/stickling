import React from 'react';
import Map from '../components/Map/Map';
import styles from './MapPage.scss';

class MapPage extends React.PureComponent {
  state = {
    isMarkerShown: false,
    mapWidth: '100%',
    ad: {}
  };

  componentDidMount() {
    this.delayedShowMarker();
  }

  delayedShowMarker = () => {
    setTimeout(() => {
      this.setState({ isMarkerShown: true });
    }, 2000);
  };

  handleMarkerClick = ad => {
    console.log(ad);
    this.setState({ mapWidth: '60%', ad });
  };

  closeMarkerClick = () => {
    console.log('stänger');
    this.setState({ ad: {}, mapWidth: '100%' });
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
              style={{ height: `90vh`, width: this.state.mapWidth }}
            />
          }
          mapElement={<div style={{ height: `100%` }} />}
          onMarkerClick={this.handleMarkerClick}
        />
        {this.state.mapWidth === '100%' ? null : (
          <div className={styles.adContainer}>
            <a className={styles.adClose} onClick={this.closeMarkerClick}>
              stäng
            </a>
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

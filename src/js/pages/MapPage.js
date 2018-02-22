import React from 'react';
import Map from '../components/Map/Map';
import { Icon } from 'react-materialize';
import styles from './MapPage.scss';

class MapPage extends React.PureComponent {
  state = {
    isMarkerShown: false,
    mapWidth: '100%',
    ad: {},
    adItem: styles.adItem
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
              style={{ height: `100vh`, width: this.state.mapWidth }}
            />
          }
          mapElement={<div style={{ height: `100%` }} />}
          onMarkerClick={this.handleMarkerClick}
        />
        {this.state.mapWidth === '100%' ? null : (
          <div className={styles.adContainer}>
            <a className={styles.adClose} onClick={this.closeMarkerClick}>
              <Icon>close</Icon>
            </a>
            <h1>{this.state.ad.adTitle}</h1>
            <p>{this.state.ad.adText}</p>
            <p>
              <Icon>attach_money</Icon>
              {this.state.ad.adPrice}
            </p>
            {this.state.ad.adShips ? (
              <p>
                {' '}
                <Icon>local_shipping</Icon>Kan skickas
              </p>
            ) : (
              <p>
                {' '}
                <Icon>location_off</Icon>Skickas inte
              </p>
            )}
            {this.state.ad.adPickup ? (
              <p>
                <Icon>local_shipping</Icon>Kan hämtas
              </p>
            ) : (
              <p>
                <Icon>location_off</Icon>Hämtas inte
              </p>
            )}
          </div>
        )}
      </div>
    );
  }
}

export default MapPage;

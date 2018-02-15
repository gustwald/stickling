import React from 'react';
import Map from '../components/Map/Map';
import styles from './MapPage.scss';

class MapPage extends React.PureComponent {
  state = {
    isMarkerShown: true,
    mapWidth: '100%',
    ad: {}
  };

  // componentDidMount() {
  //   this.delayedShowMarker();
  // }

  // delayedShowMarker = () => {
  //   setTimeout(() => {
  //     this.setState({ isMarkerShown: true });
  //   }, 3000);
  // };

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
              style={{ height: `400px`, width: this.state.mapWidth }}
            />
          }
          mapElement={<div style={{ height: `100%` }} />}
          onMarkerClick={this.handleMarkerClick}
        />
        {this.state.mapWidth === '100%' ? null : (
          <div className={styles.adContainer}>
            <button onClick={this.closeMarkerClick}>stäng</button>
            <h1 className={styles.adItem}>{this.state.ad.adTitle}</h1>
            <p className={styles.adItem}>{this.state.ad.adText}</p>
            <p className={styles.adItem}>{this.state.ad.adPrice}</p>
          </div>
        )}
      </div>
    );
  }
}

export default MapPage;

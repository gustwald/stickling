import React from 'react';
import Map from '../components/Map/Map';
import styles from './MapPage.scss';

class MapPage extends React.PureComponent {
  state = {
    isMarkerShown: true,
    infoBox: false
  };

  componentDidMount() {
    // this.delayedShowMarker();
  }

  // delayedShowMarker = () => {
  //   setTimeout(() => {
  //     this.setState({ isMarkerShown: true });
  //   }, 2000);
  // };

  handleMarkerClick = ad => {
    this.setState({ infoBox: ad.id });
  };

  // closeMarkerClick = () => {
  // };

  render() {
    return (
      <div className={styles.container}>
        <Map
          infoBox={this.state.infoBox}
          isMarkerShown={this.state.isMarkerShown}
          googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={
            <div className={styles.mapContainer} style={{ height: '90vh', width: '100%' }} />
          }
          mapElement={<div style={{ height: `100%` }} />}
          onMarkerClick={this.handleMarkerClick}
        />
      </div>
    );
  }
}

export default MapPage;

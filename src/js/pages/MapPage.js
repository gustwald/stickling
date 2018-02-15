import React from 'react';
import Map from '../components/Map/Map';

class MapPage extends React.PureComponent {
  state = {
    isMarkerShown: true,
    mapWidth: '100%'
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
    this.setState({ mapWidth: '70%' });
  };

  render() {
    return (
      <Map
        isMarkerShown={this.state.isMarkerShown}
        googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `400px`, width: this.state.mapWidth }} />}
        mapElement={<div style={{ height: `100%` }} />}
        onMarkerClick={this.handleMarkerClick}
      />
    );
  }
}

export default MapPage;

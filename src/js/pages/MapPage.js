import React from 'react';
import Map from '../components/Map/Map';

const MapPage = () => (
  <div>
    <h1>Karta</h1>
    <Map
      isMarkerShown
      googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
      loadingElement={<div style={{ height: `100%` }} />}
      containerElement={<div style={{ height: `400px` }} />}
      mapElement={<div style={{ height: `100%` }} />}
    />
  </div>
);

export default MapPage;

import React from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps';

const Map = withScriptjs(
  withGoogleMap(props => (
    <GoogleMap
      defaultZoom={8}
      defaultCenter={{ lat: 59.334591, lng: 18.06324 }}
      defaultOptions={{
        // these following 7 options turn certain controls off see link below
        streetViewControl: false,
        scaleControl: false,
        mapTypeControl: false,
        panControl: false,
        // zoomControl: false,
        rotateControl: false,
        fullscreenControl: false
      }}
    >
      {props.isMarkerShown && <Marker position={{ lat: 59.575548, lng: 18.500977 }} />}
    </GoogleMap>
  ))
);

export default Map;

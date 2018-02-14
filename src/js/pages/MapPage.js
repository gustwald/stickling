import React from 'react';
import Map from '../components/Map/Map';

class MapPage extends React.PureComponent {
  state = {
    isMarkerShown: false
  };

  componentDidMount() {
    this.delayedShowMarker();
  }

  delayedShowMarker = () => {
    setTimeout(() => {
      this.setState({ isMarkerShown: true });
    }, 3000);
  };

  handleMarkerClick = () => {
    this.setState({ isMarkerShown: false });
    this.delayedShowMarker();
  };

  render() {
    return <Map isMarkerShown={this.state.isMarkerShown} onMarkerClick={this.handleMarkerClick} />;
  }
}

export default MapPage;

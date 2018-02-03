import React, { Component } from 'react';
import { Link } from 'react-router';

class Navigation extends Component {
  render() {
    return (
      <div>
        <Link to="/home"> Home </Link>
        <Link to="/profile"> Profile </Link>
        {this.props.children}
      </div>
    );
  }
}

export default Navigation;

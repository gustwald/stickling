import React, { Component } from 'react';
import styles from './App.scss';
import { initFirebase } from '../../utils/firebase';

class App extends Component {
  componentWillMount() {
    initFirebase();
  }

  render() {
    return (
      <div className="container">
        <h1 className={styles.heading}>stickling</h1>
      </div>
    );
  }
}

export default App;

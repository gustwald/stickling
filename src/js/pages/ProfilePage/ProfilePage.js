import React, { Component } from 'react';
import Profile from '../../components/Profile/Profile';
import styles from './Profilepage.scss';

class ProfilePage extends Component {
  state = {};
  render() {
    return (
      <div className={styles.container}>
        <Profile userId={this.props.params.userId} />
      </div>
    );
  }
}

export default ProfilePage;

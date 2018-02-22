import React, { Component } from 'react';
import { connect } from 'react-redux';
import CurrentUser from '../CurrentUser/CurrentUser';
import { getCurrentUser } from '../../Selector';
import styles from './Profile.scss';
import gurt from '../../../../assets/gurt.png';

class Profile extends Component {
  state = {};
  render() {
    return (
      <div className={styles.container}>
        {/* <h1>{this.props.currentUser.first + ' ' + this.props.currentUser.last}</h1>
            <h3>{this.props.currentUser.email}</h3> */}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  currentUser: getCurrentUser(state)
});

export default connect(mapStateToProps)(Profile);

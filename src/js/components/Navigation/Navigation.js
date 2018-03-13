import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import PropTypes from 'prop-types';
import { Avatar, Icon } from 'antd';
import SignOut from '../SignOut/SignOut';
import { getCurrentUser } from '../../Selector';
import styles from './Navigation.scss';
import SignIn from '../SignIn/SignIn';
import noUserPhoto from '../../../../assets/nopp.png';

class Navigation extends Component {
  state = {
    windowWidth: window.innerWidth
  };

  render() {
    return (
      <div className={styles.navBar}>
        {this.state.windowWidth > 450 ? (
          <Link className={styles.links} to="/">
            <span>Hem</span>
          </Link>
        ) : (
          <Link className={styles.links} to="/">
            <Icon type="home" style={{ fontSize: 38, color: 'rgba(5, 175, 117, 1)' }}>
              <span className={styles.iconText}>Hem</span>
            </Icon>
          </Link>
        )}

        {this.state.windowWidth > 450 ? (
          <Link className={styles.links} to="/ads">
            <span>Annonser</span>
          </Link>
        ) : (
          <Link className={styles.links} to="/ads">
            <Icon type="profile" style={{ fontSize: 38, color: 'rgba(5, 175, 117, 1)' }}>
              <span className={styles.iconText}>Annonser</span>
            </Icon>
          </Link>
        )}

        {this.state.windowWidth > 450 ? (
          <Link className={styles.links} to="/map">
            <span>karta</span>
          </Link>
        ) : (
          <Link className={styles.links} to="/map">
            <Icon type="environment-o" style={{ fontSize: 38, color: 'rgba(5, 175, 117, 1)' }}>
              <span className={styles.iconText}>Karta</span>
            </Icon>
          </Link>
        )}

        {this.props.currentUser ? (
          [
            <Link key="profile" to="/user" className={styles.avatar}>
              {this.props.currentUser.photo ? (
                <Avatar className={styles.avatar} size="large" src={this.props.currentUser.photo} />
              ) : (
                <Avatar src={noUserPhoto} size="large" />
              )}
            </Link>,

            <Link className={this.state.windowWidth < 450 ? styles.links : null} key="home" to="/">
              <SignOut windowWidth={this.state.windowWidth} />
            </Link>
          ]
        ) : (
          <div>{this.state.windowWidth > 450 ? <SignIn /> : null}</div>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  currentUser: getCurrentUser(state)
});

export default connect(mapStateToProps)(Navigation);

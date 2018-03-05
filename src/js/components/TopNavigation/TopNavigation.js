import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { Icon, Avatar, Modal } from 'antd';
import Register from '../Register/Register';
import { scrollToTop } from '../../utils/scrollTop';
import SignIn from '../SignIn/SignIn';
import { getCurrentUser } from '../../Selector';
import styles from './TopNavigation.scss';
import logo from '../../../../assets/logo.svg';
import CreateAd from '../CreateAd/CreateAd';

class TopNavigation extends Component {
  scrollTop = () => {
    scrollToTop();
  };

  render() {
    return (
      <div className={styles.container}>
        {this.props.currentUser ? <CreateAd /> : <Register />}

        <div
          onClick={this.scrollTop}
          className={styles.mainLogo}
          style={{ backgroundImage: `url(${logo})` }}
        />
        {this.props.currentUser ? (
          <div className={styles.topNavIcon}>
            <Link key="profile" to="/user" className={styles.avatar}>
              {this.props.currentUser.photo ? (
                <Avatar size="large" src={this.props.currentUser.photo} />
              ) : (
                <Avatar
                  style={{ backgroundColor: '#a77a50', verticalAlign: 'middle' }}
                  size="large"
                >
                  {this.props.currentUser.first}
                </Avatar>
              )}
            </Link>
          </div>
        ) : (
          <SignIn />
        )}
      </div>
    );
  }
}
const mapStateToProps = state => ({
  currentUser: getCurrentUser(state)
});

export default connect(mapStateToProps)(TopNavigation);

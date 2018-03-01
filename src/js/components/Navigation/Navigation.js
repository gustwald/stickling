import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
// import { CSSTransitionGroup } from 'react-transition-group';
import { Avatar, Icon } from 'antd';
import SignOut from '../SignOut/SignOut';
import { getCurrentUser } from '../../Selector';
import styles from './Navigation.scss';
import SignIn from '../SignIn/SignIn';

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
            <Icon type="home" style={{ fontSize: 38, color: '#a77a50' }}>
              <span className={styles.iconText}>Hem</span>
            </Icon>
          </Link>
        )}

        {this.state.windowWidth > 450 ? (
          <Link className={styles.links} to="/annonser">
            <span>Annonser</span>
          </Link>
        ) : (
          <Link className={styles.links} to="/annonser">
            <Icon type="profile" style={{ fontSize: 38, color: '#a77a50' }}>
              <span className={styles.iconText}>Annonser</span>
            </Icon>
          </Link>
        )}

        {this.state.windowWidth > 450 ? (
          <Link className={styles.links} to="/karta">
            <span>karta</span>
          </Link>
        ) : (
          <Link className={styles.links} to="/karta">
            <Icon type="environment-o" style={{ fontSize: 38, color: '#a77a50' }}>
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
                <Avatar
                  style={{ backgroundColor: '#a77a50', verticalAlign: 'middle' }}
                  size="large"
                >
                  {this.props.currentUser.first}
                </Avatar>
              )}
            </Link>,

            <Link key="home" to="/">
              <SignOut windowWidth={this.state.windowWidth} />
            </Link>
          ]
        ) : (
          <SignIn />
        )}
      </div>
    );
  }
}

// const Navigation = () => (
//   <CSSTransitionGroup
//     component="ul"
//     className={styles.navBar}
//     transitionName="example"
//     transitionAppear={true}
//     transitionAppearTimeout={3000}
//     transitionEnterTimeout={3000}
//     transitionLeaveTimeout={3000}
//     >
//     <li style={{ backgroundImage: `url(${logo})` }} className={styles.logo} />
//     <li className={styles.links} to="/">Hem</li>
//     <li className={styles.links} to="/profil">Profil</li>
//     <li className={styles.links} to="/annonser">Annonser</li>
//     <li className={styles.links} to="/karta">Karta</li>
//   </CSSTransitionGroup>
// );
const mapStateToProps = state => ({
  currentUser: getCurrentUser(state)
});

export default connect(mapStateToProps)(Navigation);

import React, { Component } from 'react';
import { connect } from 'react-redux';
import CurrentUser from '../components/CurrentUser/CurrentUser';
import { getCurrentUser } from '../Selector';
import LoginModal from '../components/LoginModal/LoginModal';
import HomePageAds from '../components/HomePageAds/HomePageAds';
import Navigation from '../components/Navigation/Navigation';
import SignOut from '../components/SignOut/SignOut';
import styles from './HomePage.scss';
import logo from '../../../assets/logo.svg';
import { Row, Col } from 'react-materialize';

class HomePage extends Component {
  render() {
    return (
      <div className={styles.wrapper}>
        <Row className={styles.rowWrapper}>
          <Col s={6} className={styles.logoWrapper}>
            <div className={styles.mainLogo} style={{ backgroundImage: `url(${logo})` }} />
          </Col>
          <Col s={3}>
            {this.props.currentUser ? null : <LoginModal />}
            {this.props.currentUser ? <SignOut /> : null}
          </Col>
        </Row>
        {/* <CurrentUser /> */}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  currentUser: getCurrentUser(state)
});

export default connect(mapStateToProps)(HomePage);

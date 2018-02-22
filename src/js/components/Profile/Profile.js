import React, { Component } from 'react';
import { connect } from 'react-redux';
import CurrentUser from '../CurrentUser/CurrentUser';
import { getCurrentUser } from '../../Selector';
import styles from './Profile.scss';
import gurt from '../../../../assets/gurt.png';
import { Col, Row, Card, CardTitle } from 'react-materialize';
import twitter from '../../../../assets/twitter.svg';
import insta from '../../../../assets/instagram.svg';

class Profile extends Component {
  state = {};
  render() {
    return (
      <div className="container">
        <Row className={styles.profileInfoWrapper}>
          <Col className={styles.profilePic} s={2} style={{ backgroundImage: `url(${gurt})` }} />
          <Col className={styles.profileInfo} s={10}>
            <h3>
              <span>{this.props.currentUser.first + ' ' + this.props.currentUser.last}</span>
            </h3>
            <div className={styles.socialMedia}>
              <div className={styles.instagram} style={{ backgroundImage: `url(${insta})` }} />
              <div className={styles.twitter} style={{ backgroundImage: `url(${twitter})` }} />
            </div>
          </Col>
        </Row>

        <Row className={styles.adsWrapper}>
          {this.props.ads.map(ad => (
            <Col className={styles.gridItem} key={ad.id} s={12} m={6} l={4}>
              <Card
                className={styles.card}
                header={
                  <CardTitle
                    // className={styles.cardImage}
                    // style={{ backgroundImage: `url(${ad.image})` }}
                    image={ad.image}
                    reveal
                    waves="light"
                  />
                }
                title={ad.adTitle}
                reveal={
                  <div>
                    <p>{ad.adText}</p>
                    <p>{ad.adPrice + 'kr'}</p>
                    {ad.adShips ? <p>Kan skickas</p> : <p>Skickas inte</p>}
                    {ad.adPickup ? <p>Kan hämtas</p> : <p>Hämtas inte</p>}
                  </div>
                }
              >
                <p>
                  <a href="#">This is a link</a>
                </p>
              </Card>
            </Col>
          ))}
        </Row>

        {/* <h1>{this.props.currentUser.first + ' ' + this.props.currentUser.last}</h1>
            <h3>{this.props.currentUser.email}</h3> */}
      </div>
    );
  }
}

const mapStateToProps = state => {
  const userAds = state.adsReducer.filter(ad => ad.uId === state.currentUser.id);
  console.log(userAds);

  return {
    currentUser: getCurrentUser(state),
    ads: userAds
  };
};

export default connect(mapStateToProps)(Profile);

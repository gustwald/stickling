import React from 'react';
import { connect } from 'react-redux';
import { Row, Col, Card, CardTitle } from 'react-materialize';
import styles from './DisplayAds.scss';

const DisplayAds = ({ ads }) => (
  <div className={styles.grid}>
    <Row>
      {ads.map(ad => (
        <Col className={styles.gridItem} key={ad.id} s={12} m={6} l={2}>
          <Card
            className={styles.card}
            header={<CardTitle reveal image={ad.image} waves="light" />}
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
  </div>
);

const mapStateToProps = state => ({
  ads: state.adsReducer
});
export default connect(mapStateToProps)(DisplayAds);

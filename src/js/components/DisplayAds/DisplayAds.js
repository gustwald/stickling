import React from 'react';
import { connect } from 'react-redux';
import { Row, Col, Card, CardTitle } from 'react-materialize';
import styles from './DisplayAds.scss';

const DisplayAds = ({ ads }) => (
  <div className={styles.grid}>
    <Row>
      {ads.map(ad => (
        <div className={styles.gridItem} key={ad.id}>
          <Col s={4}>
            <Card
              header={<CardTitle reveal image={ad.image} waves="light" />}
              title={ad.adTitle}
              reveal={<p>{ad.adText}</p>}
            >
              <p>
                <a href="#">This is a link</a>
              </p>
            </Card>
          </Col>
        </div>
      ))}
    </Row>
  </div>
);

const mapStateToProps = state => ({
  ads: state.adsReducer
});
export default connect(mapStateToProps)(DisplayAds);

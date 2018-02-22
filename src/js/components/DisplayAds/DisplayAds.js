import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col, Card, CardTitle } from 'react-materialize';

import styles from './DisplayAds.scss';

const DisplayAds = ({ ads }) => (
  <div className="container">
    <Row>
      {ads.map(ad => (
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
                <p>{`${ad.adPrice}kr`}</p>
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

DisplayAds.propTypes = {
  ads: PropTypes.array.isRequired
};

export default DisplayAds;

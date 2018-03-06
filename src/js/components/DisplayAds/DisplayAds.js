import React, { Component } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import PropTypes from 'prop-types';
import { Pagination, Icon, Col, Row, Tooltip } from 'antd';
import { removeAd } from '../../actions/index';
import { removedAdNotification } from '../Notification/Notification';
import { deleteAd } from '../../utils/firebase';
import styles from './DisplayAds.scss';
import AdSearch from '../AdSearch/AdSearch';
import shipping from '../../../../assets/delivery.svg';
import manPackage from '../../../../assets/package2.svg';
import cross from '../../../../assets/multiply.svg';

class DisplayAds extends Component {
  state = {
    deleteId: ''
  };
  onSucces = () => {
    const { deleteId } = this.state;
    this.props.removeAd(deleteId);
    removedAdNotification(deleteId);
  };

  onFailure = error => {
    console.log(error);
  };

  onSearch = searchWord => {
    this.setState({ searchWord });
  };

  imageDeleteSucces = () => {
    console.log('raderat bild');
  };

  imageDeleteFailure = error => {
    console.log(error);
  };

  adDelete = (id, image) => {
    this.setState({ deleteId: id });
    deleteAd(
      id,
      image,
      this.onSucces,
      this.onFailure,
      this.imageDeleteSucces,
      this.imageDeleteFailure
    );
  };

  render() {
    let { ads } = this.props;
    const { searchWord } = this.state;

    if (searchWord) {
      ads = ads.filter(ad => ad.adTitle.includes(searchWord));
    }

    const sorted = ads.sort((a, b) => {
      const dateA = moment(a.date);
      const dateB = moment(b.date);
      return dateA.isBefore(dateB);
    });
    return (
      <div className={styles.container}>
        <AdSearch onSearch={this.onSearch} />
        <Row className={styles.adRow} gutter={{ xs: 0, sm: 0, md: 0, lg: 0 }}>
          {sorted.map(ad => (
            <Col xs={22} sm={22} md={10} lg={7} key={ad.id}>
              <div key={ad.id} className={styles.ad}>
                <div className={styles.adImage} style={{ backgroundImage: `url(${ad.image})` }} />
                <div className={styles.adInfoWrapper}>
                  <div className={styles.adInfo}>
                    <h1>
                      <span>{ad.adTitle}</span>
                    </h1>
                    <p className={styles.adText}>{ad.adText}</p>
                    <h3>{`${ad.adPrice} kr`}</h3>
                    <a href={`mailto:${ad.email}?subject=Intresserad av din annons: ${ad.adTitle}`}>
                      Kontakta
                    </a>
                  </div>
                  <div className={styles.adShipping}>
                    {/* <div className={styles.adShippingWrapper}>
                      <p>{`${ad.adPrice}kr`}</p>
                    </div> */}
                    <Tooltip
                      title={
                        ad.adShips
                          ? 'Den här sticklingen kan skickas'
                          : 'Den här sticklingen kan inte skickas'
                      }
                    >
                      <div className={styles.adShippingWrapper}>
                        {ad.adShips ? (
                          <div
                            className={styles.shipping}
                            style={{ backgroundImage: `url(${shipping})` }}
                          />
                        ) : (
                          <div
                            className={styles.shipping}
                            style={{ backgroundImage: `url(${shipping})` }}
                          >
                            <Icon className={styles.noShipping} type="close" />
                          </div>
                        )}
                      </div>
                    </Tooltip>
                    <Tooltip
                      title={
                        ad.adPickup
                          ? 'Den här sticklingen kan hämtas'
                          : 'Den här sticklingen kan inte hämtas'
                      }
                    >
                      <div className={styles.adShippingWrapper}>
                        {ad.adPickup ? (
                          <div
                            className={styles.pickup}
                            style={{ backgroundImage: `url(${manPackage})` }}
                          />
                        ) : (
                          <div
                            className={styles.pickup}
                            style={{ backgroundImage: `url(${manPackage})` }}
                          >
                            <Icon className={styles.noShipping} type="close" />
                          </div>
                        )}
                      </div>
                    </Tooltip>
                    {/* <p>{`${ad.adPrice}kr`}</p>
                    {ad.adShips ? <p>Kan skickas</p> : <p>Skickas inte</p>}
                    {ad.adPickup ? <p>Kan hämtas</p> : <p>Hämtas inte</p>} */}
                  </div>
                  {ad.uId === this.props.currentUserId ? (
                    <Icon
                      className={styles.deleteAd}
                      type="delete"
                      onClick={() => this.adDelete(ad.id, ad.image)}
                    />
                  ) : null}
                </div>
              </div>
            </Col>
          ))}
          {/* <Pagination defaultCurrent={1} total={50} /> */}
        </Row>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  removeAd: id => dispatch(removeAd(id))
});

const mapStateToProps = state => ({
  currentUserId: state.currentUser.id
});

DisplayAds.propTypes = {
  ads: PropTypes.array.isRequired,
  currentUserId: PropTypes.string.isRequired,
  removeAd: PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(DisplayAds);

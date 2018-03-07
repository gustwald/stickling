import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import moment from 'moment';
import PropTypes from 'prop-types';
import { Pagination, Icon, Col, Row, Tooltip } from 'antd';
import { removeAd } from '../../actions/index';
import { getCurrentUser, getAdById } from '../../Selector';
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
        <div className={styles.adContainer}>
          {sorted.map(ad => (
            <div key={ad.id} className={styles.ad}>
              <Link to={`/ads/${ad.id}`}>
                <div className={styles.adWrapper}>
                  <div className={styles.adImage} style={{ backgroundImage: `url(${ad.image})` }} />
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  removeAd: id => dispatch(removeAd(id))
});

const mapStateToProps = (state, ownProps) => {
  // const currentUser = getCurrentUser(state);
  return {
    currentUserId: state.currentUser.id,
    ads: state.adsReducer
  };
};

DisplayAds.propTypes = {
  // ads: PropTypes.array.isRequired,
  currentUserId: PropTypes.string.isRequired,
  removeAd: PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(DisplayAds);

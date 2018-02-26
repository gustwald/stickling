import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Pagination, Icon } from 'antd';
import { removeAd } from '../../actions/index';
import { removedAdNotification } from '../Notification/Notification';
import { deleteAd } from '../../utils/firebase';
import styles from './DisplayAds.scss';

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

  aDdelete = id => {
    this.setState({ deleteId: id });
    deleteAd(id, this.onSucces, this.onFailure);
  };
  render() {
    return (
      <div className="container">
        {this.props.ads.map(ad => (
          <div key={ad.id}>
            {ad.uId === this.props.currentUserId ? (
              <Icon
                className={styles.deleteAd}
                type="delete"
                onClick={() => this.aDdelete(ad.id)}
              />
            ) : null}
            <h1>{ad.adTitle}</h1>
            <p>{ad.adText}</p>
            <p>{`${ad.adPrice}kr`}</p>
            {ad.adShips ? <p>Kan skickas</p> : <p>Skickas inte</p>}
            {ad.adPickup ? <p>Kan hämtas</p> : <p>Hämtas inte</p>}
            <img className={styles.adImage} src={ad.image} alt={ad.title} />
          </div>
        ))}
        <Pagination defaultCurrent={1} total={50} />
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

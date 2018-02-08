import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addAdToFirestore } from '../../utils/firebase';
import { getCurrentUser } from '../../Selector';
import styles from './CreateAd.scss';

class CreateAd extends Component {
  state = {
    adTitle: '',
    adText: '',
    adPrice: ''
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  createAd = () => {
    const { uID } = this.props.currentUser;
    const { adTitle, adText, adPrice } = this.state;
    const item = {
      uId: uID,
      adTitle,
      adText,
      adPrice
    };
    addAdToFirestore(item);
  };

  render() {
    if (!this.props.currentUser) return null;
    return (
      <div className="CreateAd">
        <form className="CreateAdForm">
          <label htmlFor="adTitle">
            <input
              type="text"
              name="adTitle"
              id="adTitle"
              placeholder="Titel"
              onChange={this.onChange}
            />
          </label>
          <label htmlFor="AdText">
            <input
              type="text"
              name="adText"
              id="AdText"
              placeholder="Text"
              onChange={this.onChange}
            />
          </label>
          <label htmlFor="AdPrice">
            <input
              type="text"
              name="adPrice"
              id="AdPrice"
              placeholder="Pris"
              onChange={this.onChange}
            />
          </label>
          <button type="button" onClick={this.createAd}>
            Skapa annons
          </button>
          <p>{this.state.error}</p>
        </form>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  currentUser: getCurrentUser(state)
});

CreateAd.propTypes = {
  currentUser: PropTypes.object
};
CreateAd.defaultProps = { currentUser: null };

export default connect(mapStateToProps)(CreateAd);

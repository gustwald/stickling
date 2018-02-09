import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addAdToFirestore } from '../../utils/firebase';
import { getCurrentUser } from '../../Selector';
import { addAd } from '../../actions/index';
import styles from './CreateAd.scss';

class CreateAd extends Component {
  state = {
    adTitle: '',
    adText: '',
    adPrice: '',
    error: ''
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  onSucces = result => {
    const { id } = result;
    // måste detta upprepas??
    const uId = this.props.currentUser.uID;
    const { adTitle, adText, adPrice } = this.state;

    this.props.addAd(adTitle, adText, adPrice, id, uId);
  };

  onFailure = error => {
    console.log(error);
    this.setState({ error: error.message });
    const { email, credential, code, message } = error;
    console.log({ email, credential, code, message });
  };

  createAd = () => {
    const { uID } = this.props.currentUser;
    const { adTitle, adText, adPrice } = this.state;
    const ad = {
      uId: uID,
      adTitle,
      adText,
      adPrice
    };
    addAdToFirestore(this.onSucces, this.onFailure, ad);
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

const mapDispatchToProps = dispatch => ({
  addAd: (adTitle, adText, adPrice, uId, id) => dispatch(addAd(adTitle, adText, adPrice, uId, id))
});

CreateAd.propTypes = {
  currentUser: PropTypes.object
};

CreateAd.defaultProps = { currentUser: null };

export default connect(mapStateToProps, mapDispatchToProps)(CreateAd);

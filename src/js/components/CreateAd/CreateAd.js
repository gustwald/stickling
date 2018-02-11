import React, { Component } from 'react';
import Dropzone from 'react-dropzone';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import uuidv1 from 'uuid';
import { addAdToFirestore, uploadFile } from '../../utils/firebase';
import { getCurrentPosition } from '../../utils/getCurrentPosition';
import { getCurrentUser } from '../../Selector';
import { addAd } from '../../actions/index';
import styles from './CreateAd.scss';

class CreateAd extends Component {
  state = {
    adTitle: '',
    adText: '',
    adPrice: '',
    error: '',
    files: [],
    adShips: true,
    adFreightCost: '',
    adPickup: true,
    addToMap: false,
    adLatitude: '',
    adLongitude: ''
  };

  onDrop = files => {
    this.setState({
      files
    });
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });
  onCheckBoxChange = e => this.setState({ [e.target.name]: e.target.checked });

  onPositionSucces = position => {
    const { latitude, longitude } = position.coords;
    this.setState({ adLatitude: latitude, adLongitude: longitude });
  };

  onPositionFailure = error => {
    console.log(error);
  };

  onCheckBoxMapChange = e => {
    if (e.target.checked === true) {
      getCurrentPosition(this.onPositionSucces, this.onPositionFailure);
    }

    this.setState({ [e.target.name]: e.target.checked });
  };

  onSucces = async (result, model) => {
    const { id } = result;
    // const uId = this.props.currentUser.uID;
    const ad = {
      id,
      ...model
    };
    this.props.addAd(ad);
  };

  onFailure = error => {
    console.log(error);
    this.setState({ error: error.message });
    const { email, credential, code, message } = error;
    console.log({ email, credential, code, message });
  };

  createAd = async () => {
    const { uID } = this.props.currentUser;
    const {
      adTitle,
      adText,
      adPrice,
      adShips,
      adFreightCost,
      adPickup,
      addToMap,
      adLatitude,
      adLongitude
    } = this.state;
    const imageId = uuidv1();
    const uploadedFile = await uploadFile(this.state.files[0], imageId);

    const ad = {
      adTitle,
      adText,
      adPrice,
      uId: uID,
      adShips,
      adFreightCost,
      adPickup,
      addToMap,
      image: uploadedFile.downloadURL,
      adLatitude,
      adLongitude
    };

    addAdToFirestore(result => this.onSucces(result, ad), this.onFailure, ad);
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
          <label htmlFor="adShips">
            Skickas
            <input
              type="checkbox"
              name="adShips"
              id="adShips"
              defaultChecked={this.state.adShips}
              onChange={this.onCheckBoxChange}
            />
          </label>
          <label htmlFor="adPickup">
            Hämtas
            <input
              type="checkbox"
              name="adPickup"
              id="adPickup"
              defaultChecked={this.state.adPickup}
              onChange={this.onCheckBoxChange}
            />
          </label>
          <label htmlFor="adFreightCost">
            <input
              type="text"
              name="adFreightCost"
              id="adFreightCost"
              placeholder="Fraktkostnad"
              onChange={this.onChange}
            />
          </label>
          <label htmlFor="addToMap">
            Lägg till i sticklingskartan
            <input
              type="checkbox"
              name="addToMap"
              id="addToMap"
              defaultChecked={this.state.addToMap}
              onChange={this.onCheckBoxMapChange}
            />
          </label>
          <button type="button" onClick={this.createAd}>
            Skapa annons
          </button>
          <p>{this.state.error}</p>
          <section>
            <div className="dropzone">
              <Dropzone accept="image/jpeg, image/png" multiple={false} onDrop={this.onDrop}>
                <p>Try dropping some files here, or click to select files to upload.</p>
              </Dropzone>
            </div>
            <aside>
              <ul>
                {this.state.files.map(f => (
                  <li key={f.name}>
                    {f.name} - {f.size} bytes
                  </li>
                ))}
              </ul>
            </aside>
          </section>
        </form>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  currentUser: getCurrentUser(state)
});

const mapDispatchToProps = dispatch => ({
  addAd: ad => dispatch(addAd(ad))
});

CreateAd.propTypes = {
  currentUser: PropTypes.object,
  addAd: PropTypes.func.isRequired
};

CreateAd.defaultProps = { currentUser: null };

export default connect(mapStateToProps, mapDispatchToProps)(CreateAd);

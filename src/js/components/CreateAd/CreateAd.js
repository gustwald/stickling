import React, { Component } from 'react';
import Dropzone from 'react-dropzone';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import uuidv1 from 'uuid';
import { Button } from 'antd';
import { addAdToFirestore, uploadFile } from '../../utils/firebase';
import { getCurrentPosition } from '../../utils/getCurrentPosition';
import { getCurrentUser } from '../../Selector';
import { addAd } from '../../actions/index';
import { getCurrentTime } from '../../utils/date';

import styles from './CreateAd.scss';

class CreateAd extends Component {
  state = {
    adTitle: '',
    adText: '',
    adPrice: '',
    error: '',
    files: [],
    adShips: false,
    adFreightCost: '',
    adPickup: false,
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

  createAd = async e => {
    e.preventDefault();
    console.log('skapar annons');
    const { uID } = this.props.currentUser;
    const date = getCurrentTime();
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
      adLongitude,
      date
    };

    addAdToFirestore(result => this.onSucces(result, ad), this.onFailure, ad);
  };

  render() {
    if (!this.props.currentUser) return null;
    return (
      <div className={styles.createAd}>
        <form className={styles.createAdForm}>
          <input required type="text" name="adTitle" label="Titel" onChange={this.onChange} />
          <input required type="text" name="adText" label="Text" onChange={this.onChange} />
          <input required type="number" name="adPrice" label="Pris" onChange={this.onChange} />
          <input
            name="adShips"
            type="checkbox"
            label="Skickas"
            // defaultChecked={this.state.adShips}
            onChange={this.onCheckBoxChange}
          />
          <input
            type="checkbox"
            name="adPickup"
            label="Hämtas"
            // defaultChecked={this.state.adPickup}
            onChange={this.onCheckBoxChange}
          />
          <input type="text" name="adFreightCost" label="Fraktkostnad" onChange={this.onChange} />
          <input
            type="checkbox"
            name="addToMap"
            label="Lägg till i kartan"
            // defaultChecked={this.state.addToMap}
            onChange={this.onCheckBoxMapChange}
          />
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
          <Button
            onClick={e => {
              this.createAd(e);
            }}
          >
            Skapa annons
          </Button>
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
  addAd: ad => dispatch(addAd(ad))
});

CreateAd.propTypes = {
  currentUser: PropTypes.object,
  addAd: PropTypes.func.isRequired
};

CreateAd.defaultProps = { currentUser: null };

export default connect(mapStateToProps, mapDispatchToProps)(CreateAd);

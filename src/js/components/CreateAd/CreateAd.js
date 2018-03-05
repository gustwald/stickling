import React, { Component } from 'react';
import Dropzone from 'react-dropzone';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import uuidv1 from 'uuid';
import { Button, Modal, Icon } from 'antd';
import { openAdNotification } from '../Notification/Notification';
import { addAdToFirestore, uploadFile } from '../../utils/firebase';
import { getCurrentPosition } from '../../utils/getCurrentPosition';
import { getCurrentUser } from '../../Selector';
import { addAd } from '../../actions/index';
import { getCurrentTime } from '../../utils/date';

import styles from './CreateAd.scss';

class CreateAd extends Component {
  state = {
    createModal: false,
    // windowWidth: window.innerWidth,
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
    openAdNotification(ad.adTitle);
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
    this.setState({
      createModal: false
    });
  };

  showModal = () => {
    this.setState({
      createModal: true
    });
  };
  handleOk = e => {
    console.log(e);
    this.setState({
      createModal: false
    });
  };
  handleCancel = e => {
    console.log(e);
    this.setState({
      createModal: false
    });
  };

  render() {
    if (!this.props.currentUser) return null;
    return (
      <div className={styles.container}>
        <div className={styles.topNavIcon}>
          <Link to="/annonser">
            <Icon type="edit" onClick={this.showModal} style={{ fontSize: 38, color: '#a77a50' }} />
          </Link>
        </div>
        {/* <Button type="primary" onClick={this.showModal}>
          Skapa annons
        </Button> */}
        <Modal
          visible={this.state.createModal}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          footer={null}
        >
          <div className={styles.createAd}>
            <form className={styles.createAdForm}>
              <label htmlFor="adTitle">
                <input
                  required
                  type="text"
                  name="adTitle"
                  placeholder="Titel"
                  id="adTitle"
                  onChange={this.onChange}
                />
              </label>
              <label htmlFor="adDescription">
                <input
                  required
                  type="text"
                  name="adText"
                  id="adDescription"
                  placeholder="Text"
                  onChange={this.onChange}
                />
              </label>
              <label htmlFor="adPrice">
                <input
                  required
                  type="number"
                  name="adPrice"
                  id="adPrice"
                  placeholder="Pris"
                  onChange={this.onChange}
                />
              </label>
              <div className={styles.customCheckboxWrapper}>
                <label htmlFor="adShips">
                  <input
                    name="adShips"
                    id="adShips"
                    type="checkbox"
                    onChange={this.onCheckBoxChange}
                  />
                  <div className={styles.customCheckbox}>
                    <span />
                  </div>
                </label>
                <h3>Skickas</h3>
              </div>
              <div className={styles.customCheckboxWrapper}>
                <label htmlFor="adPickup">
                  <input
                    name="adPickup"
                    id="adPickup"
                    type="checkbox"
                    onChange={this.onCheckBoxChange}
                  />
                  <div className={styles.customCheckbox}>
                    <span />
                  </div>
                </label>
                <h3>Hämtas</h3>
              </div>
              <label htmlFor="adFreightCost">
                <input
                  name="adFreightCost"
                  id="adFreightCost"
                  type="text"
                  placeholder="Fraktkostnad"
                  onChange={this.onChange}
                />
              </label>
              <div className={styles.customCheckboxWrapper}>
                <label htmlFor="addToMap">
                  <input
                    name="addToMap"
                    id="addToMap"
                    type="checkbox"
                    onChange={this.onCheckBoxChange}
                  />
                  <div className={styles.customCheckbox}>
                    <span />
                  </div>
                </label>
                <h3>Lägg till på kartan</h3>
              </div>
              {/* <Input required type="text" name="adTitle" placeholder="Titel" onChange={this.onChange} />
          <Input required type="text" name="adText" placeholder="Text" onChange={this.onChange} />
          <Input
            required
            type="number"
            name="adPrice"
            placeholder="Pris"
            onChange={this.onChange}
          />
          skickas
          <input
            name="adShips"
            type="checkbox"
            // defaultChecked={this.state.adShips}
            onChange={this.onCheckBoxChange}
          />
          hämtas
          <input
            type="checkbox"
            name="adPickup"
            label="Hämtas"
            // defaultChecked={this.state.adPickup}
            onChange={this.onCheckBoxChange}
          />
          <Input
            type="text"
            name="adFreightCost"
            placeholder="Fraktkostnad"
            onChange={this.onChange}
          />
          lägg till i kartan
          <input
            type="checkbox"
            name="addToMap"
            label="Lägg till i kartan"
            // defaultChecked={this.state.addToMap}
            onChange={this.onCheckBoxMapChange}
          /> */}
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
              <button
                onClick={e => {
                  this.createAd(e);
                }}
              >
                Skapa annons
              </button>
              {/* <p>{this.state.error}</p> */}
            </form>
          </div>
        </Modal>
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

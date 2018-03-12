import React, { Component } from 'react';
import Dropzone from 'react-dropzone';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { Modal, Icon } from 'antd';
import PropTypes from 'prop-types';
import uuidv1 from 'uuid';
import Loader from '../Loader/Loader';
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
    windowWidth: window.innerWidth,
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
    adLongitude: '',
    loading: false
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
    this.setState({ error: 'Vi kunde inte hämta din position.', loading: false });
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
    this.setState({ loading: false });
    this.handleOk();
  };

  onFailure = error => {
    console.log(error);
    console.log('errorororo');
    this.setState({
      error: 'Något gick fel när du försökte skapa annonsen, har du fyllt i alla fält?',
      loading: false
    });
    const { email, credential, code, message } = error;
    console.log({ email, credential, code, message });
  };

  createAd = async e => {
    this.setState({ loading: true });
    e.preventDefault();
    console.log('skapar annons');
    const { uID, email } = this.props.currentUser;
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
      date,
      email
    };

    addAdToFirestore(result => this.onSucces(result, ad), this.onFailure, ad);
  };

  showModal = () => {
    this.setState({
      createModal: true
    });
  };

  handleOk = () => {
    this.setState({
      createModal: false
    });
  };

  handleCancel = () => {
    this.setState({
      createModal: false
    });
  };

  render() {
    if (!this.props.currentUser) return null;
    return (
      <div className={styles.container}>
        {this.state.windowWidth > 450 ? (
          <button onClick={this.showModal}>Skapa annons</button>
        ) : (
          <div className={styles.topNavIcon}>
            {this.props.showCreate ? (
              <Link to="/ads">
                <Icon
                  type="edit"
                  onClick={this.showModal}
                  style={{ fontSize: 38, color: 'rgba(5, 175, 117, 1)' }}
                />
              </Link>
            ) : null}
          </div>
        )}

        <Modal
          className={styles.createAdModal}
          visible={this.state.createModal}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          footer={null}
        >
          <div className={styles.createAd}>
            {this.state.loading ? <Loader /> : null}
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
                    onChange={this.onCheckBoxMapChange}
                  />
                  <div className={styles.customCheckbox}>
                    <span />
                  </div>
                </label>
                <h3>Lägg till på kartan</h3>
              </div>
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
              <p>{this.state.error}</p>
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

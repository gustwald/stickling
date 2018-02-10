import React, { Component } from 'react';
import Dropzone from 'react-dropzone';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addAdToFirestore, uploadFile } from '../../utils/firebase';
import { getCurrentUser } from '../../Selector';
import { addAd } from '../../actions/index';
import styles from './CreateAd.scss';

class CreateAd extends Component {
  state = {
    adTitle: '',
    adText: '',
    adPrice: '',
    error: '',
    files: []
  };

  onDrop = files => {
    this.setState({
      files
    });
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  onSucces = async (result, model) => {
    const { id } = result;
    const uId = this.props.currentUser.uID;
    const ad = {
      id,
      ...model
    };

    console.log(ad);
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
    const { adTitle, adText, adPrice } = this.state;
    const uploadedFile = await uploadFile(this.state.files[0]);
    console.log(uploadedFile);
    const ad = {
      adTitle,
      adText,
      adPrice,
      uId: uID,
      image: uploadedFile.downloadURL
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
          <button type="button" onClick={this.createAd}>
            Skapa annons
          </button>
          <p>{this.state.error}</p>
          <section>
            <div className="dropzone">
              <Dropzone multiple={false} onDrop={this.onDrop}>
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
  currentUser: PropTypes.object
};

CreateAd.defaultProps = { currentUser: null };

export default connect(mapStateToProps, mapDispatchToProps)(CreateAd);

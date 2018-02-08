import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addAdToFirestore } from '../../utils/firebase';
import { getCurrentUser } from '../../Selector';
import styles from './CreateAd.scss';

class CreateAd extends Component {
  state = {
    adTitle: '',
    adText: '',
    adPrice: '',
    uId: this.props.currentUser.uID
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  createAd = () => {
    addAdToFirestore(this.state);
  };

  render() {
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

// CurrentUser.propTypes = {
//   currentUser: PropTypes.object.isRequired
// };

export default connect(mapStateToProps)(CreateAd);

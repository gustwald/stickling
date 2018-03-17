import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Icon, Modal } from 'antd';
import { getCurrentUser, getUserById } from '../../Selector';
import { addSocialLinks } from '../../actions/index';
import { addSocialMedia } from '../../utils/firebase';
import styles from './SocialSettings.scss';

class SocialSettings extends Component {
  state = {
    socialModal: false,
    twitter: this.props.user.twitter,
    instagram: this.props.user.instagram
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  onSucces = () => {
    console.log('lagt till social grejer');
    const { userId } = this.props;
    const { instagram, twitter } = this.state;

    this.setState({
      socialModal: false
    });
    this.props.addSocialLinks(userId, instagram, twitter);
  };
  onFailre = error => {
    console.log(error);
  };

  handleOk = () => {
    this.setState({
      socialModal: false
    });
  };

  addSocialInformation = () => {
    this.setState({
      socialModal: true
    });
  };

  socialMedia = () => {
    const { userId } = this.props;
    const { instagram, twitter } = this.state;
    addSocialMedia(userId, instagram, twitter, this.onSucces, this.onFailure);
  };

  render() {
    const { instagram, twitter } = this.state;
    return (
      <div className={styles.container}>
        <Icon className={styles.icon} type="setting" onClick={this.addSocialInformation} />
        <Modal footer={null} visible={this.state.socialModal} onCancel={this.handleOk}>
          <form className={styles.socialForm}>
            <label htmlFor="instagram">
              <input
                type="text"
                name="instagram"
                id="instagram"
                value={instagram ? instagram : ''}
                onChange={this.onChange}
              />
            </label>
            <label htmlFor="twitter">
              <input
                type="text"
                name="twitter"
                id="twitter"
                value={twitter ? twitter : ''}
                onChange={this.onChange}
              />
            </label>

            <button type="button" onClick={this.socialMedia}>
              Lägg till
            </button>
          </form>
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const currentUser = getCurrentUser(state);
  return {
    userId: currentUser.uID,
    user: ownProps.userId ? getUserById(state, ownProps.userId) : currentUser
  };
};

const mapDispatchToProps = dispatch => ({
  addSocialLinks: (uid, instagram, twitter) => dispatch(addSocialLinks(uid, instagram, twitter))
});

export default connect(mapStateToProps, mapDispatchToProps)(SocialSettings);

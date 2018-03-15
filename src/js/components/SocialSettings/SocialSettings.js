import React, { Component } from 'react';
import { Icon, Modal } from 'antd';
import styles from './SocialSettings.scss';

class SocialSettings extends Component {
  state = {
    socialModal: false
  };

  addSocialInformation = () => {
    this.setState({
      socialModal: true
    });
  };

  handleOk = () => {
    this.setState({
      socialModal: false
    });
  };

  render() {
    return (
      <div className={styles.container}>
        <Icon className={styles.icon} type="setting" onClick={this.addSocialInformation} />
        <Modal
          footer={null}
          visible={this.state.socialModal}
          onOk={this.handleOk}
          onCancel={this.handleOk}
        >
          <form className={styles.socialForm}>
            <label htmlFor="instagram">
              <input
                type="text"
                name="instagram"
                id="instagram"
                placeholder="instagram"
                onChange={this.onChange}
              />
            </label>
            <label htmlFor="twitter">
              <input
                type="text"
                name="twitter"
                id="twitter"
                placeholder="twitter"
                onChange={this.onChange}
              />
            </label>

            <button type="button" onClick={this.register}>
              Registrera
            </button>
          </form>
        </Modal>
      </div>
    );
  }
}

export default SocialSettings;

import React, { Component } from 'react';
import { Modal, Icon } from 'antd';
import StandardSignup from '../StandardSignup/StandardSignup';
import styles from './Register.scss';

class Register extends Component {
  state = {
    modalRegister: false,
    windowWidth: window.innerWidth
  };

  showModal = () => {
    this.setState({
      modalRegister: true
    });
  };

  handleOk = () => {
    this.setState({
      modalRegister: false
    });
  };

  render() {
    return (
      <div className={styles.container}>
        {this.state.windowWidth > 450 ? (
          <span onClick={this.showModal}>konto</span>
        ) : (
          <div className={styles.topNavIcon}>
            <Icon
              onClick={this.showModal}
              type="user-add"
              style={{ fontSize: 38, color: '#a77a50' }}
            >
              <span className={styles.iconText}>skapa konto</span>
            </Icon>
          </div>
        )}

        <Modal
          footer={null}
          visible={this.state.modalRegister}
          onOk={this.handleOk}
          onCancel={this.handleOk}
        >
          <StandardSignup closeModal={this.handleOk} />
        </Modal>
      </div>
    );
  }
}

export default Register;

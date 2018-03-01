import React, { Component } from 'react';
import { Modal, Icon } from 'antd';
import StandardSignup from '../StandardSignup/StandardSignup';
import styles from './Register.scss';

class Register extends Component {
  state = {
    modalRegister: false
  };
  showModal = () => {
    this.setState({
      modalRegister: true
    });
  };
  handleOk = e => {
    console.log(e);
    this.setState({
      modalRegister: false
    });
  };

  render() {
    return (
      <div>
        <div className={styles.topNavIcon}>
          <Icon onClick={this.showModal} type="user-add" style={{ fontSize: 38, color: '#a77a50' }}>
            <span className={styles.iconText}>skapa konto</span>
          </Icon>
        </div>
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

import React, { Component } from 'react';
import { Modal, Icon } from 'antd';
import StandardSingIn from '../StandardSingIn/StandardSignin';
import GoogleSignup from '../GoogleSignup/GoogleSignup';
import styles from './SignIn.scss';

class SignIn extends Component {
  state = {
    modalLogin: false
  };
  showModal = () => {
    this.setState({
      modalLogin: true
    });
  };
  handleOk = e => {
    console.log(e);
    this.setState({
      modalLogin: false
    });
  };

  render() {
    return (
      <div>
        <div className={styles.topNavIcon}>
          <Icon onClick={this.showModal} type="user" style={{ fontSize: 38, color: '#a77a50' }}>
            <span className={styles.iconText}>logga in</span>
          </Icon>
        </div>
        <Modal
          footer={null}
          visible={this.state.modalLogin}
          onOk={this.handleOk}
          onCancel={this.handleOk}
        >
          <StandardSingIn closeModal={this.handleOk} />
          <GoogleSignup closeModal={this.handleOk} />
        </Modal>
      </div>
    );
  }
}

export default SignIn;

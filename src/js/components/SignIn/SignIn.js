import React, { Component } from 'react';
import { Modal, Icon, Button } from 'antd';
import StandardSingIn from '../StandardSingIn/StandardSignin';
import GoogleSignup from '../GoogleSignup/GoogleSignup';
import styles from './SignIn.scss';

class SignIn extends Component {
  state = {
    modalLogin: false,
    windowWidth: window.innerWidth
  };
  showModal = () => {
    this.setState({
      modalLogin: true
    });
  };
  handleOk = () => {
    this.setState({
      modalLogin: false
    });
  };

  render() {
    return (
      <div>
        {this.state.windowWidth > 450 ? (
          <Button className={styles.loginBtn} onClick={this.showModal}>
            Logga in
          </Button>
        ) : (
          <div className={styles.topNavIcon}>
            <Icon onClick={this.showModal} type="user" style={{ fontSize: 38, color: '#a77a50' }}>
              <span className={styles.iconText}>logga in</span>
            </Icon>
          </div>
        )}

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

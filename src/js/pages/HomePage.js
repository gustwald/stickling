import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Modal } from 'antd';
import { getCurrentUser } from '../Selector';
import styles from './HomePage.scss';
import logo from '../../../assets/logo.svg';
import StandardSignup from '../components/StandardSignup/StandardSignup';

class HomePage extends Component {
  state = {
    visible: false
  };
  showModal = () => {
    this.setState({
      visible: true
    });
  };

  handleOk = e => {
    console.log(e);
    this.setState({
      visible: false
    });
  };
  handleCancel = e => {
    console.log(e);
    this.setState({
      visible: false
    });
  };

  render() {
    return (
      <div className={styles.wrapper}>
        <div className={styles.mainLogo} style={{ backgroundImage: `url(${logo})` }} />
        <div className={styles.textWrapper}>
          <h1>Sticklingar.se</h1>
          <h3>Vi är sveriges ledande marknadsplats för köp&sälj av sticklingar!</h3>
          <h5>
            {' '}
            Skapa ett <span onClick={this.showModal}>konto</span> för att komma igång{' '}
          </h5>
          <Modal
            title="register"
            visible={this.state.visible}
            onOk={this.handleOk}
            onCancel={this.handleCancel}
          >
            <StandardSignup />
          </Modal>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  currentUser: getCurrentUser(state)
});

export default connect(mapStateToProps)(HomePage);

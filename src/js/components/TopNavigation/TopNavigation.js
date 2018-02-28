import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { Icon, Avatar, Modal } from 'antd';
import { scrollToTop } from '../../utils/scrollTop';
import LoginModal from '../LoginModal/LoginModal';
import { getCurrentUser } from '../../Selector';
import styles from './TopNavigation.scss';
import logo from '../../../../assets/logo.svg';

class TopNavigation extends Component {
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
  handleCancel = e => {
    console.log(e);
    this.setState({
      modalLogin: false
    });
  };

  scrollTop = () => {
    scrollToTop();
  };

  render() {
    return (
      <div className={styles.container}>
        {this.props.currentUser ? (
          <div className={styles.topNavIcon}>
            <Link className={styles.links} to="/annonser">
              <Icon type="edit" style={{ fontSize: 38, color: '#a77a50' }} />
            </Link>
          </div>
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

        <div
          onClick={this.scrollTop}
          className={styles.mainLogo}
          style={{ backgroundImage: `url(${logo})` }}
        />
        {this.props.currentUser ? (
          <div className={styles.topNavIcon}>
            <Link key="profile" to="/profil" className={styles.avatar}>
              {this.props.currentUser.photo ? (
                <Avatar size="large" src={this.props.currentUser.photo} />
              ) : (
                <Avatar
                  style={{ backgroundColor: '#a77a50', verticalAlign: 'middle' }}
                  size="large"
                >
                  {this.props.currentUser.first}
                </Avatar>
              )}
            </Link>
          </div>
        ) : (
          <div className={styles.topNavIcon}>
            <Icon onClick={this.showModal} type="user" style={{ fontSize: 38, color: '#a77a50' }}>
              <span className={styles.iconText}>logga in</span>
            </Icon>
          </div>
        )}
        <Modal visible={this.state.modalLogin} onOk={this.handleOk} onCancel={this.handleCancel}>
          <LoginModal />
        </Modal>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  currentUser: getCurrentUser(state)
});

export default connect(mapStateToProps)(TopNavigation);

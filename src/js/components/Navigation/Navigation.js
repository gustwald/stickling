import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
// import { CSSTransitionGroup } from 'react-transition-group';
import { Button, Modal, Avatar } from 'antd';
import SignOut from '../SignOut/SignOut';
import { getCurrentUser } from '../../Selector';
import styles from './Navigation.scss';
import LoginModal from '../LoginModal/LoginModal';

class Navigation extends Component {
  state = { visible: false };
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
      <div className={styles.navBar}>
        <Link className={styles.links} to="/">
          <span>Hem</span>
        </Link>
        {this.props.currentUser ? (
          <Link className={styles.links} to="/profil">
            <span>Profil</span>
          </Link>
        ) : null}

        <Link className={styles.links} to="/annonser">
          <span>Annonser</span>
        </Link>
        <Link className={styles.links} to="/karta">
          <span>karta</span>
        </Link>
        {this.props.currentUser ? (
          [
            <Link key="profile" to="/profil">
              {this.props.currentUser.photo ? (
                <Avatar src={this.props.currentUser.photo} />
              ) : (
                <Avatar icon="user" />
              )}
            </Link>,
            <Link key="home" to="/">
              <SignOut />
            </Link>
          ]
        ) : (
          <Button className={styles.loginBtn} onClick={this.showModal}>
            Logga in
          </Button>
        )}
        <Modal visible={this.state.visible} onOk={this.handleOk} onCancel={this.handleCancel}>
          <LoginModal />
        </Modal>
      </div>
    );
  }
}

// const Navigation = () => (
//   <CSSTransitionGroup
//     component="ul"
//     className={styles.navBar}
//     transitionName="example"
//     transitionAppear={true}
//     transitionAppearTimeout={3000}
//     transitionEnterTimeout={3000}
//     transitionLeaveTimeout={3000}
//     >
//     <li style={{ backgroundImage: `url(${logo})` }} className={styles.logo} />
//     <li className={styles.links} to="/">Hem</li>
//     <li className={styles.links} to="/profil">Profil</li>
//     <li className={styles.links} to="/annonser">Annonser</li>
//     <li className={styles.links} to="/karta">Karta</li>
//   </CSSTransitionGroup>
// );
const mapStateToProps = state => ({
  currentUser: getCurrentUser(state)
});

export default connect(mapStateToProps)(Navigation);

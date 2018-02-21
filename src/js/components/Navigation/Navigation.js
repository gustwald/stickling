import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { CSSTransitionGroup } from 'react-transition-group';
import { Button, Icon, Modal } from 'react-materialize';
import CurrentUser from '../CurrentUser/CurrentUser';
import SignOut from '../SignOut/SignOut';
import { getCurrentUser } from '../../Selector';
import styles from './Navigation.scss';
import logo from './../../../../assets/logo.svg';
import LoginModal from '../LoginModal/LoginModal';

const Navigation = ({ currentUser }) => (
  <div className={styles.navBar}>
    <Link className={styles.links} to="/">
      <span>Hem</span>
    </Link>
    <Link className={styles.links} to="/profil">
      <span>Profil</span>
    </Link>
    <Link className={styles.links} to="/annonser">
      <span>Annonser</span>
    </Link>
    <Link className={styles.links} to="/karta">
      <span>karta</span>
    </Link>
    {currentUser ? (
      [
        <Link key="profile" className={styles.links} to="/profil">
          <Button className={styles.userBtn} waves="light">
            {currentUser.first}
            <Icon left>person</Icon>
          </Button>
        </Link>,
        <SignOut key="signout" />
      ]
    ) : (
      <Modal
        trigger={
          <Button className={styles.loginBtn} waves="light">
            Logga in<Icon left>person</Icon>
          </Button>
        }
      >
        <LoginModal />
      </Modal>
    )}
  </div>
);

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

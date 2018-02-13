import React, { Component } from 'react';
import { connect } from 'react-redux';
import styles from './App.scss';
import CurrentUser from '../CurrentUser/CurrentUser';
import { getCurrentUser } from '../../Selector';

class App extends Component {
  componentDidMount() {}
  render() {
    return (
      <div className={styles.container}>
        {/* <CurrentUser />
        {this.props.currentUser
          ? null
          : [
            <GoogleSignup key="googleSignup" />,
            <StandardSignup key="signIn" />,
            <StandardSignin key="standardSignIn" />
          ]}
        {this.props.currentUser ? <SignOut /> : null} */}
      </div>
    );
  }
}

// const mapStateToProps = state => ({
//   currentUser: getCurrentUser(state)
// });

export default App;

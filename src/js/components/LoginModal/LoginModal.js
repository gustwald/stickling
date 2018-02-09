import React, { Component } from 'react';
import { connect } from 'react-redux';
import styles from './LoginModal.scss';
import GoogleSignup from '../GoogleSignup/GoogleSignup';
import SignOut from '../SignOut/SignOut';
import CurrentUser from '../CurrentUser/CurrentUser';
import { getCurrentUser } from '../../Selector';
import StandardSignup from '../StandardSignup/StandardSignup';
import StandardSignin from '../StandardSingIn/StandardSignin';

class LoginModal extends Component {
    render() {
        return (
            <div className={styles.modal}>
                <CurrentUser />
                {this.props.currentUser
                    ? null
                    : [
                        <GoogleSignup key="googleSignup" />,
                        <StandardSignup key="signIn" />,
                        <StandardSignin key="standardSignIn" />
                    ]}
                {this.props.currentUser ? <SignOut /> : null}
            </div>
        )
    }
}

const mapStateToProps = state => ({
    currentUser: getCurrentUser(state)
});

export default connect(mapStateToProps)(LoginModal);
import React from 'react';
import styles from './SignIn.scss';

const onSuccess = result => {
    const uID = result.user.uid;
    const fName = result.additionalUserInfo.profile.given_name;
    const lName = result.additionalUserInfo.profile.family_name;
  
    addUserToFirestore(uID, fName, lName);
  };
  
  const onFailure = error => {
    const { email, credential, code, message } = error;
    console.log({ email, credential, code, message });
  };

const onSubmit = resulut => {
    const uID = result.user.uid;
    const fName 
}

const SignIn = () => {
    <div className="Signin">
        <form className="SigninForm">
            <label for="Email">
                <input 
                    type="text" 
                    name="Email" 
                    id="Email" 
                    placeholder="Email"
                    onChange={this.handleChange}
                >
                </input>
            </label>
            <label for="Password">
                <input 
                    type="text" 
                    name="Password" 
                    id="Password" 
                    placeholder="Password"
                    onChange={this.handleChange}
                >
                </input>
            </label>
            <button 
                type="button" 
                onSubmit={onSubmit}
            >
            </button>
        </form>
    </div>
}

export default SignIn;
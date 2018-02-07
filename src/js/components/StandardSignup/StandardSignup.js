import React, { Component } from 'react';
import { createUserWithEmail, addUserToFirestore } from "../../utils/firebase";
import styles from './StandardSignup.scss';


class StandardSignup extends Component {

    state = {
        username: "",
        password: "",
        firstName: "",
        lastName: ""
    }

    onChange = e => this.setState({ [e.target.name]: e.target.value });

    register = result => {
        createUserWithEmail(this.onSucces, this.onFailure, this.state);
    }

    onSucces = result => {
        console.log("inne i succes");
        const uID = result.uid;
        const fName = this.state.firstName;
        const lName = this.state.lastName;

        console.log({ uID, fName, lName });
        addUserToFirestore(uID, fName, lName);
    }

    onFailure = error => {

        console.log(error);
        const { email, credential, code, message } = error;
        console.log({ email, credential, code, message });
    }


    render() {
        return (
            <div className="Signup">
                <form className="SignupForm">
                    <label for="Email">
                        <input
                            type="email"
                            name="username"
                            id="Email"
                            placeholder="Email"
                            onChange={this.onChange}
                        >
                        </input>
                    </label>
                    <label for="FirstName">
                        <input
                            type="text"
                            name="firstName"
                            id="FirstName"
                            placeholder="Firstname"
                            onChange={this.onChange}
                        >
                        </input>
                    </label>
                    <label for="LastName">
                        <input
                            type="text"
                            name="lastName"
                            id="LastName"
                            placeholder="LastName:"
                            onChange={this.onChange}
                        >
                        </input>
                    </label>
                    <label for="Password">
                        <input
                            type="password"
                            name="password"
                            id="Password"
                            placeholder="Password"
                            onChange={this.onChange}
                        >
                        </input>
                    </label>
                    <button
                        type="button"
                        onClick={this.register}
                    />
                </form>
            </div>
        )
    }
}


export default StandardSignup;
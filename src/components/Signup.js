import React, { useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { createUser } from "../actions/sessionActions";
import Header from "./Header";


const Signup = props => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const updateFirstName = (event) => setFirstName(event.target.value);
    const updateLastName = (event) => setLastName(event.target.value);
    const updateEmail = (event) => setEmail(event.target.value);
    const updatePassword = (event) => setPassword(event.target.value);
    const updateConfirmPassword = (event) => setConfirmPassword(event.target.value);

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (password === confirmPassword) {
            await props.createUser(firstName, lastName, email, password);
            props.history.push("/login")
        } else {
            alert("Passwords must match!");
        }
    };

    return (
        <>
            <Header />
            <div className="signup__header">Join the Xupreme Team</div>
            <form className="form__container" onSubmit={handleSubmit}>
                <input type="text" onChange={updateFirstName} value={firstName} className="form__input-signup form__input--firstname" placeholder="First name" />
                <input type="text" onChange={updateLastName} value={lastName} className="form__input-signup form__input--lastname" placeholder="Last name" />
                <input type="email" onChange={updateEmail} value={email} className="form__input-signup" placeholder="Email address" />
                <input type="password" onChange={updatePassword} value={password} className="form__input-signup" placeholder="Create a password" />
                <input type="password" onChange={updateConfirmPassword} value={confirmPassword} className="form__input-signup" placeholder="Confirm password" />
                <button className="signupform__button">Join Xupreme</button>
                <Link to="/login" className="login__link">already a member?</Link>
            </form>
        </>
    );
}

const mapDispatchToProps = dispatch => {
    return {
        createUser: (firstName, lastName, email, password) => dispatch(createUser(firstName, lastName, email, password)),
    }
}

export default connect(
    null,
    mapDispatchToProps
)(
    Signup
);
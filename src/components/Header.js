import React from "react";
import { Link } from "react-router-dom";
import Clock from "./Clock"

const Header = () => {


    return (
        <>
        <Link to="/" className="header__logo"><img className="img__logo" src={require("../assets/Xupreme-logo.png")} alt="brand__logo" /> </Link>
        <Clock />
        </>
    )
}

export default Header;
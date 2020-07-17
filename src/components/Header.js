import React from "react";
import Clock from "./Clock"

const Header = () => {


    return (
        <>
        <div className="header__logo"><img className="img__logo" src={require("../assets/supreme_logo-01.png")} alt="brand__logo" /> </div>
        <Clock />
        </>
    )
}

export default Header;
import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";


const NavBox = props => {


    return (
        <div className="navbox__container">
            <a className="navbox" href=''>login</a>
            <a className="navbox" href=''>news</a>
            <a className="navbox" href='/shop'>shop</a>
            <a className="navbox" href=''>stores</a>
            <a className="navbox" href=''>about</a>
        </div>
    )
}

export default NavBox;
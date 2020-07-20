import React from "react";
import { Link, NavLink } from "react-router-dom";
import { connect } from "react-redux";


const NavBox = props => {


    return (
        <div className="navbox__container">
            <NavLink className="navbox" to='/login'>login</NavLink>
            <NavLink className="navbox" to='/news'>news</NavLink>
            <NavLink className="navbox" to='/shop'>shop</NavLink>
            <NavLink className="navbox" to='/stores'>stores</NavLink>
            <NavLink className="navbox" to='/about'>about</NavLink>
        </div>
    )
}

export default NavBox;
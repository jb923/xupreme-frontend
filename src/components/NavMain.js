import React from "react";
import { NavLink } from "react-router-dom";
// import { connect } from "react-redux";


const NavMain = props => {


    return (
        <div className="navmain__container">
            <NavLink className="navmain" to='/'>home</NavLink>
            <NavLink className="navmain" to='/news'>news</NavLink>
            <NavLink className="navmain" to='/shop'>shop</NavLink>
            <NavLink className="navmain" to='/stores'>stores</NavLink>
            <NavLink className="navmain" to='/about'>about</NavLink>
        </div>
    )
}

export default NavMain;
import React from 'react';
import { NavLink } from "react-router-dom";

const NavLower = props => {

    return (
        <div className="navlower__container">
            <div className='home-left'>
                <NavLink className="navlower navlower__home" to='/'>home</NavLink>
                <NavLink className="navlower navlower__profile" to='/profile'>profile</NavLink>
                <NavLink className="navlower navlower__profile" to='/cart'>cart</NavLink>
            </div>
            <div className='nav-right'>
                {/* <NavLink className="navlower navlower__profile" to='/cart'>cart</NavLink> */}
                <NavLink className="navlower navlower__viewall" to='/all'>view all</NavLink>
                <NavLink className="navlower navlower__stores" to='/bio'>bio</NavLink>
                <NavLink className="navlower navlower__privacy" to='/contact'>contact</NavLink>
            </div>
        </div>
    )
}

export default NavLower;
import React from 'react';
import { NavLink } from "react-router-dom";

const NavLower = props => {

    return (
        <div className="navlower__container">
            <div className='home-left'>
                <NavLink className="navlower navlower__home" to='/'>home</NavLink>
                <NavLink className="navlower navlower__profile" to='/profile'>profile</NavLink>
            </div>
            <div className='nav-right'>
                <NavLink className="navlower navlower__profile" to='/cart'>cart</NavLink>
                <NavLink className="navlower navlower__viewall" to='/all'>view all</NavLink>
                <NavLink className="navlower navlower__shop" to='/terms'>terms</NavLink>
                <NavLink className="navlower navlower__stores" to='/privacy'>privacy</NavLink>
                <NavLink className="navlower navlower__privacy" to='/faq'>f.a.q</NavLink>
            </div>
        </div>
    )
}

export default NavLower;
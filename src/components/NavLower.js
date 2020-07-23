import React from 'react';
import { NavLink } from "react-router-dom";

const NavLower = props => {

    return (
        <div className="navlower__container">
            <div className='home-left'>
                <a className="navlower navlower__home" href='/'>home</a>
            </div>
            <div className='nav-right'>
                <a className="navlower navlower__viewall" href='/all'>view all</a>
                <NavLink className="navlower navlower__shop" to='/terms'>terms</NavLink>
                <a className="navlower navlower__stores" href='/privacy'>privacy</a>
                <a className="navlower navlower__privacy" href='/faq'>f.a.q</a>
            </div>
        </div>
    )
}

export default NavLower;
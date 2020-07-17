import React from 'react';

const NavLower = props => {

    return (
        <div className="navlower__container">
            <div className='home-left'>
                <a className="navlower navlower__home" href='/'>home</a>
            </div>
            <div className='nav-right'>
                <a className="navlower navlower__viewall" href=''>view all</a>
                <a className="navlower navlower__shop" href='/shop'>sizing</a>
                <a className="navlower navlower__stores" href=''>terms</a>
                <a className="navlower navlower__privacy" href=''>privacy</a>
            </div>
        </div>
    )
}

export default NavLower;
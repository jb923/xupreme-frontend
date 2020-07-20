import React from 'react';


const NavUpper = props => {

    return (
        <div className="navupper__container">
            <a className="navupper navupper__all" href=''>all</a>
            <a className="navupper navupper__jackets" href=''>jackets</a>
            <a className="navupper navupper__shirts" href='/shop'>shirts</a>
            <a className="navupper navupper__tops" href=''>tops</a>
            <a className="navupper navupper__sweaters" href=''>sweatshirts</a>
            <a className="navupper navupper__shorts" href=''>shorts</a>
            <a className="navupper navupper__hats" href=''>hats</a>
            <a className="navupper navupper__bags" href=''>bags</a>
            <a className="navupper navupper__accessories" href=''>accessories</a>
            <a className="navupper navupper__shoess" href=''>shoes</a>
            <a className="navupper navupper__skate" href=''>skate</a>
        </div>
    )
}

export default NavUpper;
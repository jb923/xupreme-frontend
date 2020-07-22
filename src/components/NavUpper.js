import React from 'react';


const NavUpper = props => {

    return (
        <div className="navupper__container">
            <a className="navupper navupper__all" href='/all'>all</a>
            <a className="navupper navupper__jackets" href='/category/1'>jackets</a>
            <a className="navupper navupper__shirts" href='/category/2'>shirts</a>
            <a className="navupper navupper__tops" href='/category/3'>tops</a>
            <a className="navupper navupper__sweaters" href='/category/4'>sweatshirts</a>
            <a className="navupper navupper__shorts" href='/category/5'>shorts</a>
            <a className="navupper navupper__hats" href='/category/6'>hats</a>
            <a className="navupper navupper__bags" href='/category/7'>bags</a>
            <a className="navupper navupper__accessories" href='/category/8'>accessories</a>
            <a className="navupper navupper__shoess" href='/category/9'>shoes</a>
            <a className="navupper navupper__skate" href='/category/10'>skate</a>
        </div>
    )
}

export default NavUpper;
import React from 'react';
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Header from './Header';
import NavLower from './NavLower'
import NavUpper from './NavUpper'



const ViewAll = props => {

    if (props.products.length === 0) return null;
    let products = props.products;

    return (
        <>
        <Header />
        <NavUpper />
            <div className='product__map-container'>
                {products.map((product, i) => {
                    return (
                        <div className="product__list-product" key={i}>
                            <div className="product__list-container">
                                <Link className="product__list-product-img" to={`/product/${product.id}`}><img className="product__item--img" src={product.imgurl} alt="product-img" /></Link>
                            </div>
                        </div>
                    );
                })}
            </div>
        <NavLower />
    </>
    )
}

const mapStateToProps = (state) => {
    return {
        products: Object.values(state.products),
    };
};


export default connect(
    mapStateToProps
)(
    ViewAll
);
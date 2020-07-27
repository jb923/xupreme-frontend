import React from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import Header from "./Header";
import NavUpper from "./NavUpper";
import NavLower from "./NavLower";


const ProductList = (props) => {
    if (props.products.length === 0) return null;
    let products = props.products
    let category = (props.match.params.categoryId);



    const matchedProducts = products.filter(product => {
        return product.category === (parseInt(category, 10))});

        return (
            <>
                <Header {...props}/>
                <NavUpper/>
                <div className="category__outer">
                    <div className='category__map--container'>
                        {matchedProducts.map((product, i) => {
                            return (
                                <div className="category__list--product" key={i}>
                                    <NavLink className="category__list--img" to={`/product/${product.id}`}>
                                        <img className="category__img" src={product.imgurl} alt="product-img" />
                                        <div className="category__product--name">{product.name}</div>
                                        <div className="category__product--color">{product.color}</div>
                                    </NavLink>
                                </div>
                            );
                        })}
                    </div>
                </div>
                <NavLower />
            </>
        );
};

const mapStateToProps = (state) => {
    return {
        products: Object.values(state.products), 
    };
};



export default connect(
    mapStateToProps
)(
    ProductList
);
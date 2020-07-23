import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Header from "./Header";


const ProductList = (props) => {
    if (props.products.length === 0) return null;
    let products = props.products
    // let category = (props.match.params.categoryId);

    const category = products.map(product => {
        return product.category
    })
    console.log(category)
    // console.log(categoryId)
    const productsArray = ["", "jackets", "shirts", "tops", "sweatshirts", "shorts", "hats", "bags", "accessories", "shoes", "skate"];

    // if (typeof (parseInt(category, 10)) === "Number") {
    //     const matchedProducts = products.filter(product => {
    //         return product.category === (parseInt(category, 10));
    //     })
    const matchedProducts = products.filter(product => {
        return product.category === (parseInt(category, 10))});

        return (
            <>
                <Header {...props}/>
                <div className="category__list">
                    <div className='category__title-container'>
                        <div className='category__title'>{productsArray[parseInt(category, 10) - 1]}</div>
                        <br></br>
                    </div>
                    <div className='category__map-container'>
                        {matchedProducts.map((product, i) => {
                            return (
                                <div className="category__list-product" key={i}>
                                    <Link className="category__list-product-img" to={`/products/${product.id}`}><img className="product__item--img" src={product.imgurl} alt="product-img" /></Link>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </>
        );
    // } 

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
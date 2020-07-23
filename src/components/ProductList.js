import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";


const ProductList = (props) => {
    if (props.products.length === 0) return null;
    let products = props.products
    // let categories = categories
    // if (props.categories.length === 0 ) return null;
    // let category = products.category
    // let category = (props.match.params.categoryId);
    // let category = props.products.category
    // console.log(category)
    const category = products.map(product => {
        return product.category
    })
    console.log(category)
    // if (typeof (category) === "string" && category.length > 2) {
    //     const matchedProducts = products.filter(product => {
    //         return product.category
    //     })

    //     return (
    //         <>
    //             <div className='product__map-container'>
    //                 {products.map((product, i) => {
    //                     return (
    //                         <div className="product__list-product" key={i}>
    //                             <div className="product__list-container">
    //                                 <Link className="product__list-product-img" to={`/product/${product.id}`}><img className="product__item--img" src={product.imgurl} alt="product-img" /></Link>
    //                             </div>
    //                         </div>
    //                     );
    //                 })}
    //             </div>
    //         </>
    //     );
    // }

    const productsArray = ["", "jackets", "shirts", "tops", "sweatshirts", "shorts", "hats", "bags", "accessories", "shoes", "skate"];
    if (typeof (parseInt(category, 10)) === "number") {
        const matchedProducts = products.filter(product => {
            return product.category === (parseInt(category, 10));
        })
        console.log(window.location.href)
        return (
            <>
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
    }
};

const mapStateToProps = (state) => {
    return {
        products: Object.values(state.products),
        // categories: Object.values(state.products.category) 
    };
};


export default connect(
    mapStateToProps
)(
    ProductList
);
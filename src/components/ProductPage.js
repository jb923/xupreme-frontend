import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
// import ReviewDiv from "./ReviewDiv";
import Header from "./Header";
import NavUpper from "./NavUpper";
import NavLower from "./NavLower";
import { fetchReviews } from "../actions/reviewActions";
import { addToCart } from "../actions/cartActions";


const ProductPage = (props) => {
    let id = Number(props.match.params.productId);

    useEffect(() => {
        (async () => {
            await props.fetchReviews(id);
        })();
    }, [id]);

    let product = props.products[id];

    if (!product) return null;

    let { description, imgurl, name, price, color } = props.products[id];

    const handleSubmit = event => {
        event.preventDefault();
        props.addToCart(id);
    }

    // {...props} 
    return (
        <>
            <Header />
            <NavUpper />
            <div className="products__main">
                <div className="products__main-container">
                    <div className="products__img">
                        <img src={imgurl} alt={`${product.name}`} />
                    </div>
                    <div className="products__container-inner">
                        <div className="products__name">{name}</div>
                        <div className="products__color">{color}</div>
                        <div className="products__details">{description}</div>
                        <div className="products__price">${(price / 100)}</div>

                        <form className="products__cart-container" onSubmit={handleSubmit}>
                            <label className="products__label">Size: <input className="products__quantity" type="number" placeholder="Small" /></label>
                            <button className="products__cart">add to cart</button>
                            <button className="products__shopping">keep shopping</button>
                        </form>
                    </div>
                </div>
                <div className="products__review-header">Reviews:</div>
                {/* <ReviewDiv id={id} /> */}

            </div>
            <NavLower />
        </>
    );
};

const mapStateToProps = (state) => {
    return {
        products: state.products,
        reviews: state.reviews,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchReviews: (id) => dispatch(fetchReviews(id)),
        addToCart: (productId) => dispatch(addToCart(productId))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductPage);
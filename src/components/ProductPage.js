import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
// import ReviewDiv from "./ReviewDiv";
import Header from "./Header";
import NavUpper from "./NavUpper";
import NavLower from "./NavLower";
import { fetchReviews } from "../actions/reviewActions";
import { addToCart } from "../actions/cartActions";
import { fetchTransaction } from "../actions/transactionActions";


const ProductPage = (props) => {
    let id = Number(props.match.params.productId);
    const [selectedSize, setSelectedSize] = useState()    

    // useEffect(() => {
    //     (async () => {
    //         await props.fetchReviews(id);
    //     })();
    // }, [id]);


    let sizes = props.sizes
    let product = props.products[id];

    if (!product) return null;
    if (!sizes) return null;

    let { description, imgurl, name, price, color } = props.products[id];

    const handleSubmit = event => {
        event.preventDefault();
        props.addToCart({product: product.id, size: selectedSize});
    }

    const handleChange = (event) => {
        event.preventDefault();
        setSelectedSize(event.target.value)
    }

    const handleKeepShopping = () => {
        props.history.push('/all')
    }

    let selectField;
    if (sizes[id]) {
        selectField = (
            <label className="products__label">size: 
                <select className="products__size" placeholder="size"  onChange={handleChange}> 
                    <option value="">select size</option>
                    <option value="small">Small</option>
                    <option value="medium">Medium</option>
                    <option value="large">Large</option>
                    <option value="xlarge">Xlarge</option>
                </select>
            </label>
        )} 
    
    
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
                            {selectField}
                            <div className="products__buttons">
                                <button className="products__shopping" onClick={handleKeepShopping}>keep shopping</button>
                                <button className="products__cart">add to cart</button>
                            </div>
                        </form>
                    </div>
                </div>
                {/* <div className="products__review-header">Reviews:</div> */}
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
        sizes: state.sizes,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchReviews: (id) => dispatch(fetchReviews(id)),
        addToCart: (productId) => dispatch(addToCart(productId)),
        // removeFromCart: (id) => dispatch(removeFromCart(id)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductPage);
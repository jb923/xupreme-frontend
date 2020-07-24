import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
// import ReviewDiv from "./ReviewDiv";
import Header from "./Header";
import NavUpper from "./NavUpper";
import NavLower from "./NavLower";
import { fetchReviews } from "../actions/reviewActions";
import { addToCart } from "../actions/cartActions";
// import { removeFromCart } from "../actions/cartActions";


const ProductPage = (props) => {
    let id = Number(props.match.params.productId);
    const [selectedSize, setSelectedSize] = useState()    

    useEffect(() => {
        (async () => {
            await props.fetchReviews(id);
        })();
    }, [id]);

    let product = props.products[id];

    let { description, imgurl, name, price, color } = props.products[id];

    let sizes = props.sizes
    console.log(sizes)

    if (!product) return null;
    if (!sizes) return null;

    const handleSubmit = event => {
        event.preventDefault();
        props.addToCart({product: product.id, size: selectedSize});
    }

    const handleChange = (event) => {
        event.preventDefault();
        setSelectedSize(event.target.value)
    }

    let selectField;
    if (sizes[id]) {
        selectField = (
            <label className="products__label">size: 
                <select className="products__size" placeholder="size"  onChange={handleChange}> 
                    <option value="small">small</option>
                    <option value="medium">medium</option>
                    <option value="large">large</option>
                    <option value="xlarge">xlarge</option>
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
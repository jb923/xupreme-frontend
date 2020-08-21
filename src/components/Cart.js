import React, { useState} from "react";
import { connect } from "react-redux";
import Header from "./Header";
import NavLower from "./NavLower";


import { removeFromCart } from "../actions/cartActions";




const Cart = (props) => {

    // const userId = props.sessionId;
    const cartItemsArray = props.cartItemsArray;
    const [cartArray, setCartArray] = useState(cartItemsArray); 
    if (props.products.length === 0) return null;
    const targetProducts = cartItemsArray.map(item => {
        let selectedProduct = props.productsObj[item.product]
        selectedProduct.size = item.size
        return selectedProduct 
    });
    let total = 0;
    

    const handleRemove = event => {
        event.preventDefault();
        props.removeFromCart(event.target.id);
    }

    const handleCheckout = ()=>{
        props.history.push('/checkout')
    }

    const handleShopping = () => {
        props.history.push('/all')
    }


    return (
        <>
            <Header />
            <div className="cart__container">
                <div className="header__container">
                    <div className="cart__header">Edit / View Cart</div>
                    <div className="checkout__header">Shipping / Payment</div>
                </div>
                <div className="cart__container--outer">
                {targetProducts.map((product, i) => {
                    total += product.price;
                    return (
                        <div key={i} className="cart__item--container">
                            <div className="cart__item">
                                <div className="cart__item--img"><img src={product.imgurl} alt={product.id} /></div>
                            </div>
                            <div className="cart__item--description">
                                <div className="cart__item--name">{product.name}
                                    <div className="cart__item--color">Style: {product.color}</div>
                                    <div className="cart__item--size">Size: {product.size} </div>
                                </div>
                            </div>
                            <button onClick={handleRemove} id={i} className="cart__item--remove">Remove</button>
                            <div className="cart__item--price">${(product.price / 100)}</div>
                        </div>
                    );
                })}
                </div>
            </div>
            <div className="cart__lower">
                    <div className="cart__subtotal--container">
                        <div className="cart__subtotal--total">subtotal: ${(total / 100)}</div>
                    </div>
                    <div className="cart__button--container">
                        <button className="cart__shopping--button" onClick={(handleShopping)}>keep shopping</button>  
                        <button className="cart__checkout--button" onClick={(handleCheckout)}>checkout now</button>
                    </div>
            </div>
            <NavLower />
        </>
    );
};

const mapStateToProps = (state) => {
    return {
        cartItemsArray: state.cart,
        productsObj: state.products,
        products: Object.values(state.products),
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        removeFromCart: (id) => dispatch(removeFromCart(id)),

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);


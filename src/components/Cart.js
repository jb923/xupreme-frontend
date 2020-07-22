import React, { useState } from "react";
import { connect } from "react-redux";
import Header from "./Header";
import NavUpper from "./NavUpper";
import NavLower from "./NavLower";
import { removeFromCart } from "../actions/cartActions";



const Cart = (props) => {
    const cartItemsArray = props.cartItemsArray;
    const [cartArray, setCartArray] = useState(cartItemsArray);
    const targetProducts = cartItemsArray.map(item => props.productsObj[item]);
    let total = 0;

    const handleRemove = event => {
        props.removeFromCart(event.target.id);
    }

    return (
        <>
            <Header />
            {/* <NavUpper /> */}
            <div className="cart__container">
                <div className="header__container">
                    <div className="cart__header">Edit / View Cart</div>
                    <div className="checkout__header">Shipping / Payment</div>
                </div>
                {targetProducts.map((product, i) => {
                    total += product.price;
                    return (
                        <div key={i} className="cart__item--container">
                            <div className="cart__item">
                                <div className="cart__item--img"><img src={product.imgUrl} alt={product.id} /></div>
                            </div>
                            <div className="cart__item--text">
                                <div className="cart__item--name">{product.name}</div>
                                <div className="cart__item--price">${(product.price / 100).toFixed(2)}</div>
                                <button onClick={handleRemove} id={product.id} className="cart__item--remove">Remove</button>
                            </div>
                        </div>
                    );
                })}
                <div className="cart__total">Total: ${(total / 100).toFixed(2)}</div>
                <button className="cart__checkout--button" onClick={() => props.openModal("checkout")}>Checkout</button>
            </div>
            <NavLower />
        </>
    );
};

const mapStateToProps = (state) => {
    return {
        cartItemsArray: state.cart,
        productsObj: state.products,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        // openModal: (modal) => dispatch(openModal(modal)),
        removeFromCart: (id) => dispatch(removeFromCart(id)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);

{/* <Modal total={total} setCartArray={setCartArray} {...props} /> */}
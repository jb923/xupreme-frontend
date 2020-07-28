import React, { useState } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { FaCreditCard } from 'react-icons/fa';
import { createTransaction } from "../actions/transactionActions";
import Header from "./Header";
import NavLower from "./NavLower";



const Checkout = (props) => {
    const userId = props.sessionId;
    const cartItems = props.cartItems;
    

    const [cartArray, setCartArray] = useState(cartItems);


    const handleClick = event => {
        props.createTransaction(userId, transactionItems, total);
        window.localStorage.removeItem("supreme/cart");
        props.history.push('/profile');
    }

    const handleCancel = () => {
        props.history.push('/all')
    }

    if (props.products.length === 0) return null;
    let total = 0;
    const targetProducts = cartItems.map(item => props.productsObj[item.product]);
    targetProducts.forEach(product => {total += product.price});

    const transactionItems = cartItems.map(item => props.productsObj[item.product].id)


    return (
        <>
            <Header />
            <div className="checkout__container">
                <div className="header__container-payment">
                    <NavLink to="/cart" className="cart__header-payment">Edit / View Cart</NavLink>
                    <div className="checkout__header-payment">Shipping / Payment</div>
                </div>
                <div className="checkout__header--lower">
                    <div className="lower-checkout checkout__header--billing">billing/shipping information</div>
                    <div className="lower-checkout checkout__header--card">credit card information</div>
                </div>
                <div className="checkout__main">
                    <form className="checkout__billing-container">
                        <input type="text" className="checkout__form checkout__form-name" placeholder="name" required/>
                        <input type="email" className="checkout__form checkout__form-email" placeholder="email" required/>
                        <input type="tel" className="checkout__form checkout__form-tel" placeholder="tel" />
                        <input type="address" className="checkout__form checkout__form-address" placeholder="address" required/>
                        <div className="checkout__inner">
                            <input type="zip" className="checkout__form checkout__form-zip" placeholder="zip" required/>
                            <input type="city" className="checkout__form checkout__form-city" placeholder="city" required/>
                        </div>
                        <input type="state" className="checkout__form checkout__form-state" placeholder="state" required/>
                    </form>
                    <form className="checkout__card-container">
                        <input type="text" className="checkout__card checkout__card-number" placeholder="number" required/>
                        <div className="card__info">
                            <input type="text" className="checkout__card-back checkout__card-date" placeholder="MM" required/>
                            <input type="text" className="checkout__card-back checkout__card-date" placeholder="yyyy" required/>
                            <input type="text" className="checkout__card-back checkout__card-cvv" placeholder="CVV" required/>
                            <FaCreditCard className="fa_card" />
                        </div>
                        <div className="subtotal__container">
                            <div className="checkout__total checkout__total-cart">cart total: ${(total / 100)} </div>
                            <div className="checkout__total checkout__total-shipping">shipping: $10</div>
                            <div className="checkout__total checkout__total-order">order total: ${((total / 100) + 10)}</div>
                        </div>
                    </form>
                </div>
                <div className="checkout__button-container">
                    <button className="checkout__button-cancel" onClick={handleCancel}>cancel</button>
                    <button className="checkout__button-process" onClick={handleClick}>process payment</button>
                </div>
            </div>
            <NavLower />
        </>
    );
};

const mapStateToProps = state => {
    return {
        reviews: state.reviews,
        sessionId: state.session.id,
        firstName: state.session.firstName,
        cartItems: state.cart,
        productsObj: state.products,
        products: Object.values(state.products),
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        createTransaction: (userId, transactionItems, total) => dispatch(createTransaction(userId, transactionItems, total)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);

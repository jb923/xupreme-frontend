import React, { useEffect } from "react";
import { connect } from "react-redux";



const ProfileInfo = props => {
    const transactions = Object.values(props.transactions);
    if (transactions.length === 0) return null;

    const transactionArray = [];
    transactions.forEach(transaction => transactionArray.push(transaction.products))
    const products = props.products;


    return (
        <>
            <div className="profile__order-container">
                <div className="profile__container--outer">
                {transactionArray.map((transaction, i) => {
                    return (
                        <div key={i} className="profile__transaction">
                            {transaction.map(item => {
                                return (
                                    <div key={item} className="profile__item--container">
                                        <div className="profile__item">
                                            <img className="profile__item--img" src={products[item].imgurl} alt="profile-img" />
                                        </div>
                                        <div className="profile__item--description">
                                            <div className="profile__item--name">{products[item].name}
                                                <div className="profile__item--color">Style: {products[item].color}</div>
                                                <div className="profile__item--size">Price: ${(products[item].price)/100.00} </div>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                            <div className="profile__transaction--price">Total: ${(transactions[i].total / 100).toFixed(2)}</div>
                        </div>
                    )
                })}
                </div>
            </div>
        </>
    );
}


const mapStateToProps = state => {
    return {
        firstName: state.session.firstName,
        lastName: state.session.lastName,
        products: state.products,
        transactions: state.transactions,
    };
};



export default connect(
    mapStateToProps,
    // mapDispatchToProps
)(
    ProfileInfo
);
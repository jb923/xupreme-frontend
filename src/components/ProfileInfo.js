import React from "react";
import { connect } from "react-redux";
import { GrLogout } from "react-icons/gr"
import { logout } from "../actions/sessionActions";


const ProfileInfo = props => {
    const transactions = Object.values(props.transactions);
    if (transactions.length === 0) return null;

    const transactionArray = [];
    transactions.forEach(transaction => transactionArray.push(transaction.products))

    const products = props.products;

    const displayName = props.firstName === "demo" ? "Guest" : props.firstName === "null" ? "" : `${props.firstName} ${props.lastName}.`;



    return (
        <>
            <div className="profile__userinfo">
                <div className="profile__user--container">
                    <img className="profile__pic" src={require("../assets/supremexlv.jpg")} alt="profile-logo" />
                    <div className="profile__username">Supreme Team Member: {displayName}</div>
                    <GrLogout className="profile__logout" onClick={props.logout}/>
                </div>
            </div>
            <div className="profile__order-container">
                <div className="profile__orders">Recent Orders:</div>
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
                                                {/* <div className="profile__item--size">Size: {products[item].size} </div> */}
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

const mapDispatchToProps = dispatch => {
    return {
        logout: () => dispatch(logout()),
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(
    ProfileInfo
);
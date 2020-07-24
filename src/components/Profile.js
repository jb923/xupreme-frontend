import React, {useEffect} from 'react';
import { connect } from "react-redux";
import { fetchTransaction } from "../actions/transactionActions";

import Header from "./Header";
import NavMain from "./NavMain";


const Profile = (props) => {
    const userId = props.userId;
    // const transactions = Object.values(props.transactions);
    // if (transactions.length === 0) return null;

    // const transactionArray = [];
    // transactions.forEach(transaction => transactionArray.push(transaction.products))

    // const productsObj = props.productsList;

    // const displayName = props.firstName === "demo" ? "Guest" : props.firstName === "null" ? "" : `${props.firstName} ${props.lastName}.`;

    useEffect(() => {
        (async () => {
            await props.fetchTransaction(userId);
        })();
    });

    // const transactions = Object.values(props.transactions);
    // if (transactions.length === 0) return null;

    // const transactionArray = [];
    // transactions.forEach(transaction => transactionArray.push(transaction.products))

    const productsObj = props.productsList;

    const userName = props.firstName === "demo" ? "Guest" : props.firstName === "null" ? "" : `${props.firstName} ${props.lastName}.`;

    return (
        <>
        <Header />

        <NavMain />
        </>

    )
}

const mapStateToProps = state => {
    return {
        userId: state.session.id,
        transactions: state.transactions,
        productsList: state.products,
        firstName: state.session.firstName,
        lastName: state.session.lastName
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchTransaction: (userId) => dispatch(fetchTransaction(userId)),
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(
    Profile
);

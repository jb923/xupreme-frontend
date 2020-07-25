import React, {useEffect} from 'react';
import { connect } from "react-redux";
import { fetchTransaction } from "../actions/transactionActions";

import Header from "./Header";
import NavMain from "./NavMain";
import ProfileInfo from "./ProfileInfo";


const Profile = (props) => {
    const userId = props.userId;


    useEffect(() => {
        (async () => {
            await props.fetchTransaction(userId);
        })();
    });


    return (
        <>
        <Header />
        <ProfileInfo {...props} />
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

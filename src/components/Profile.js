import React, {useEffect} from 'react';
import { connect } from "react-redux";
import { fetchTransaction } from "../actions/transactionActions";

import Header from "./Header";
import NavMain from "./NavMain";


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
        <NavMain />
        </>

    )
}

const mapStateToProps = state => {
    return {
        userId: state.session.id
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

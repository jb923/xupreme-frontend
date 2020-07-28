import React, {useEffect} from 'react';
import { connect } from "react-redux";
import { fetchTransaction } from "../actions/transactionActions";
import { GrLogout } from "react-icons/gr"
import { logout } from "../actions/sessionActions";

import Header from "./Header";
import NavMain from "./NavMain";
import ProfileInfo from "./ProfileInfo";


const Profile = (props) => {
    const userId = props.userId;
    const displayName = props.firstName === "demo" ? "Guest" : props.firstName === "null" ? "" : `${props.firstName} ${props.lastName}`;

    useEffect(() => {
        (async () => {
            await props.fetchTransaction(userId);
        })();
    },[userId]);


    return (
        <>
        <Header />
        <div className="profile__userinfo">
            <div className="profile__user--container">
                <img className="profile__pic" src={require("../assets/supremexlv.jpg")} alt="profile-logo" />
                <div className="profile__username">Xupreme Team Member: {displayName}</div>
                <GrLogout className="profile__logout" onClick={props.logout}/>
            </div>
        </div>
        <div className="profile__orders">Recent Orders:</div>
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
        logout: () => dispatch(logout()),
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(
    Profile
);

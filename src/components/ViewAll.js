import React from 'react';
import { connect } from "react-redux";
import Header from './Header';
import NavLower from './NavLower'
import NavUpper from './NavUpper'
import ProductList from './ProductList';


const ViewAll = props => {

    if (props.products.length === 0) return null;

    return (
        <>
        <Header />
        <NavUpper />
        <ProductList />
        <NavLower />
    </>
    )
}

const mapStateToProps = (state) => {
    return {
        products: Object.values(state.products),
    };
};


export default connect(
    mapStateToProps
)(
    ViewAll
);
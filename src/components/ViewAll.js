import React from 'react';
import Header from './Header';
import NavLower from './NavLower'
import NavUpper from './NavUpper'
import ProductList from './ProductList';


const ViewAll = props => {


    return (
        <>
        <Header />
        <NavUpper />
        {/* <ProductList /> */}
        <NavLower />
    </>
    )
}

export default ViewAll;
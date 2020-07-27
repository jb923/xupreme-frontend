import React from 'react';
import NavBox from './NavBox';
import Footer from './Footer';
import Clock from "./Clock"



const MainPage = props => {
    return (
        <div className="background-image-container">
             <div className="header__logo-main"><img className="img__logo" src={require("../assets/Xupreme-logo.png")} alt="brand__logo" /> </div>
                <Clock />
            <NavBox {...props}/>
            <Footer />
        </div>
    )
}

export default MainPage;
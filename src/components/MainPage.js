import React from 'react';
import Header from './Header';
import NavBox from './NavBox';
import Footer from './Footer';
// import "../stylesheets/header.css";
// import "../stylesheets/footer.css";


const MainPage = props => {
    return (
        <div className="background-image-container">
            <Header />
            <NavBox />
            <Footer />
        </div>
    )
}

export default MainPage;
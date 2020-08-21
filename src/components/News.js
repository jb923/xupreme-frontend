import React from 'react';
import Header from './Header';
import NavMain from './NavMain';


const News = () => {

    return (
        <>
            <Header />
            <div className="news__container">
                <img src={require("../assets/supreme-news.jpg")} alt='supreme-news' />
                <div className="news__info">
                    <p>08/20/2020</p>
                    <h2>Xupreme</h2>
                    <p>Our Fall/Winter collection is now available online. Feel free to browse the shop and make an account if you aren't already a member.</p>
                    <p>Made exclusively for Xupreme, the lookbook shop has been updated.</p>
                    <br />
                    <p>Available August 20.</p>
                </div>
            </div>
            <NavMain />
        </>
    )

}

export default News;
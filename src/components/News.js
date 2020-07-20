import React from 'react';
import Header from './Header';
import NavMain from './NavMain';


const News = () => {

    return (
        <>
            <Header />
            <div className="news__container">
                <img src="https://assets.supremenewyork.com/190345/ma/bzgwWYHW_J4.jpg" />
                <div className="news__info">
                    <p>07/07/2020</p>
                    <h2>Supreme/Vans</h2>
                    <p>This spring, Supreme will release new bersions of the Vans Sk8-Hi Pro and Slip-On Pro. The Sk8-Hi Pro features a premium suede and denim upper with hole punch pattern, leather lining, vulcanized outsole and embroidered logo at heel. The Slip-On Pro features a denim upper with hole punch pattern, leather lining and vulcanized outsole.</p>
                    <p>Made exclusively for Supreme, the Sk8-Hi Pro and Slip-On Pro will be offered in two color ways.</p>
                    <br />
                    <p>Available July 9th.</p>
                    <p>Available in Japan July 11th.</p>
                </div>
            </div>
            <NavMain />
        </>
    )

}

export default News;
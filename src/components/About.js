import React from 'react';
import Header from './Header';
import NavMain from './NavMain';
import { NavLink } from "react-router-dom";

const About = () => {

    return (
        <>
            <Header />
            <div className="about__container">
               <p>In August 2020, Xupreme was created by Johnny Bui as a passion project to recreate the Supreme's website by maintaining the overall essence and authenticity of the website's theme. At its core is a React front-end with a Python based, Flask back-end.</p>
               <p>Xupreme is a full stack eCommerce website that emphasizes a user-friendly UI/UX, which allows you to browse the shop with ease and style.</p>
               <p>Along with an extensive flask backend with SQL seeding, Xupreme has over 120 products that are rendered on the site.</p>
               <p>Over the last year, I have sharpened my skills in many stacks such as React, Javascript, Python, NodeJS and more. With that knowledge, I am proud to present to you, Xupreme. If you are interested in learning more about me, or view my other projects please visit my bio page.</p>
               <NavLink className='about__bio' to='/bio'>bio</NavLink>
            </div>
            <NavMain />
        </>
    )

}

export default About;
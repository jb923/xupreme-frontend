import React from 'react';
import Header from './Header';
import NavMain from './NavMain';


const About = () => {

    return (
        <>
            <Header />
            <div className="about__container">
               <p>In April 1994, Supreme opened its doors on Lafeyette Steet in downtown Manhattan and became the home of New York City skate culture. At its core was a group of neighborhood kids, New York skaters, and local artists who became the store's staff, crew, and customers.</p>
               <p>Supreme grew to embody downtown culture, and play an integral part in its constatn regeneration. Skaters, punks, hip-hop heads -- the young counter culture at large -- all gravitated towards Supreme.</p>
               <p>While it developed into a downtown institution, Supreme established itself as a brand known for its quality, style, and authenticity.</p>
               <p>Over 25 years, Supreme has expanded from its New York City origins into a global community; working with generations of artists, photographers, designers, musicians, filmmakers, and writers who defied conventions and contributed to its unique identity and attitude.</p>
            </div>
            <NavMain />
        </>
    )

}

export default About;
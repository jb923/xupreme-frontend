import React from "react";
import Header from "./Header";
import NavLower from "./NavLower";
import GitHubIcon from '@material-ui/icons/GitHub';
import { NavLink } from "react-router-dom";


const Bio = (props) => {

    return (
        <>
            <Header/>
            <div className="privacy__main">
                <div className="privacy__main-container">
                    <p className="privacy__heading">Bio</p>
                    <p>Welcome To Xupreme.</p>
                    <p className="privacy__heading">Who I Am</p>
                    <p>Hi, I'm Johnny Bui the creator of Xupreme, a website created in Long Beach in 2020. Xupreme is a website clone of the famous high-end streetwear brand 'Supreme'.
                        I am an self-motivated Full Stack software developer with a passion in web development. Xupreme is a reimagined passion project that keeps the essence and intgerity of the original Supreme website in mind. 
                        I hope you enjoy it as much as I do. </p>
                    <p className="privacy__heading">Other Projects:</p>
                    <p>If you are interested in more, there are a few other projects that I have worked on below.</p>
                    <p className="privacy__heading">Flash</p>
                    <p>Flash is an eCommerce platform focused on photography and inspired by sites such as Adorama, B&H Photos and Amazon. You can view Flash at the link below.</p>
                    <br />
                    <a className='heroku__link' href='https://aa-flash-app.herokuapp.com/'>https://aa-flash-app.herokuapp.com/ <img className='app-img' src={require('../assets/flash-app.png')} alt="" /> </a>
                    <p className="privacy__heading">Flexagram</p>
                    <p>Flexagram is a full-stack social media app where you can share, comment and like images with your friends. It is a React front-end app with a Flask back-end that is modeled after Instagram. You can view Flexagram at the link below.</p>
                    <br />
                    <a className='heroku__link' href='https://flexagram.herokuapp.com/'>https://flexagram.herokuapp.com/ <img className='app-img' src={require('../assets/flexagram-app.jpg')} alt="" /></a>
                    <p className="privacy__heading">TappdIn</p>
                    <p>Tappdin is a beer tracking app modeled on Untappd. It allows users to create accounts, post and delete checkins of beers, view the checkins of other users, and discover new beers.
                        You can view Tappdin at the link below.
                    </p>
                    <br />
                    <a className='heroku__link' href='http://tappdin.herokuapp.com/log-in'>http://tappdin.herokuapp.com/log-in <img className='app-img' src={require('../assets/tappdin-app.png')} alt="" /></a>
                    <p className="privacy__heading">Want to learn more?</p>
                    <p>If you want to learn more you can checkout my portfolio or you can contact me at the links below.</p>
                        <div className='contact__links'>
                            <a className='bio__contact' href='https://jbui923.github.io/'>Portfolio</a>
                            <a className='bio__contact' href='https://www.linkedin.com/in/johnny-bui-1051b872/'>Linkedin</a>
                            <NavLink className='bio__contact' to='/contact'>Contact Me</NavLink>
                            <a className='bio__contact' href="https://github.com/JBui923">Github <GitHubIcon className="bio__github--img" /></a>
                        </div>
                </div>
            </div>
            <NavLower />
        </>
    );
};

export default Bio;
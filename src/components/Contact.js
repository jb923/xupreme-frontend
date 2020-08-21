import React from "react";
import Header from "./Header";
import NavLower from "./NavLower";
import GitHubIcon from '@material-ui/icons/GitHub';


const Contact = (props) => {

    return (
        <>
            <Header/>
            <div className="faq__main">
                <div className="faq__main-container">
                    <p className="faq__heading">Contact Me</p>
                    <p className="faq__heading">If you have any questions, feel free to contact me via Email</p>
                    <p>Name: Johnny Bui</p>
                    <p>Email: JBUI923@GMAIL.COM</p>
                    <p className="faq__heading">Portfolio?</p>
                    <p>You can view all of my previous works and learn more about me on my portfolio:</p>
                    <a className='contact__link--contact' href='https://jbui923.github.io/'>Portfolio <img className='app-img' src={require('../assets/portfolio2.jpg')} alt="" /></a>
                    <p className="faq__heading">Linkedin?</p>
                    <a className='contact__link--contact' href='https://www.linkedin.com/in/johnny-bui-1051b872/'>Linkedin: https://www.linkedin.com/in/johnny-bui-1051b872/</a>
                    <p className="faq__heading">Github?</p>
                    <a className='contact__link--github' href="https://github.com/JBui923">Github <GitHubIcon className="contact__github--img" /></a>
                </div>
            </div>
            <NavLower />
        </>
    );
};

export default Contact;
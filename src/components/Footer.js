import React from "react";
import GitHubIcon from '@material-ui/icons/GitHub';

const Footer = () => {
    return (
        <div className="footer__container">
            <a href="https://github.com/JBui923" className="footer__github" >Johnny Bui <GitHubIcon className="footer__logo" /></a>
        </div>
    );
}

export default Footer;
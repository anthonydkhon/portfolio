import React from 'react';
import { IconContext } from 'react-icons';
import { AiFillLinkedin, 
        AiFillGithub
} from 'react-icons/ai';
import { SiCodewars } from 'react-icons/si';
import '../../App.css';
import devKhonLogo from '../Images/devKhonLogo.png';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div>
            <div className="footer">
                <img className="footer-img" src={devKhonLogo} 
                alt="logo" />
            </div>
            <div className="footer-icons">
            <IconContext.Provider
                value={{ color: 'rgb(157, 45, 231)', size: '30px' }}>
                <Link to="https://www.linkedin.com/in/anthony-khon-987892208/">
                <AiFillLinkedin className="icons"/>    
                </Link> 
                <Link to="https://github.com/anthonydkhon">
                <AiFillGithub className="icons" />    
                </Link> 
                <Link to="https://www.codewars.com/users/Anthony%20Khon">
                <SiCodewars className="icons" />    
                </Link> 
            </IconContext.Provider>
            </div>
        </div>
    )
}

export default Footer;
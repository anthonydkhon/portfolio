import React from 'react';
import { IconContext } from 'react-icons';
import { AiFillLinkedin, 
        AiFillGithub
} from 'react-icons/ai';
import { SiCodewars } from 'react-icons/si';
import '../../App.css';
import devKhonLogo from '../Images/devKhonLogo.png';
import { NavLink } from 'reactstrap'

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
                <a href="https://www.linkedin.com/in/anthony-khon-987892208/" target="_blank">
                <AiFillLinkedin className="icons"/>   
                </a> 
                <a href="https://github.com/anthonydkhon" target="_blank">
                <AiFillGithub className="icons" />   
                </a> 
                <a href="https://www.codewars.com/users/Anthony%20Khon" target="_blank">
                <SiCodewars className="icons" />   
                </a> 
            </IconContext.Provider>
            </div>
        </div>
    )
}

export default Footer;
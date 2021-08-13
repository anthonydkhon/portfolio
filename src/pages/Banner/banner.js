import React from 'react';
import '../../App.css';
import profilephoto from '../Images/resizeBannerPhoto.jpg';
import { Button, Row, Col } from 'reactstrap';
import devKhonanimated from '../video/devKhon.mp4'


const Banner = () => {
    return (
        <Row>
        <Col>
        <div className="logo-vid">
            <video autoPlay loop muted>
                <source src={devKhonanimated} type="video/mp4" />
            </video>
            </div>
            <div className="banner">
            <div className="greeting">
                <h3><nobr>Welcome to my portfolio!</nobr></h3>
                <h1><nobr>My Name is Anthony Khon</nobr></h1>
                <p>I am a Front End Developer specializing in JavaScript and the React.js framework.</p>
            <Button className="about-btn" style={{ borderRadius: 20 }}
            color="primary">About Me</Button>
            </div>
            <div classname="bannerimg">
                <img src={ profilephoto } alt="profilephoto" 
                className="profilephoto" />
            </div>
        </div>
        </Col>
        </Row>
    )
}

export default Banner;
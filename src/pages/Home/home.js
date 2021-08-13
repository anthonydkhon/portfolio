import React from 'react';
import Skills from '../Skills/skills.js';
import Projects from '../Projects/projects.js';
import ContactMe from '../Contact/contact.js';
import { Row, Button } from 'reactstrap';
import profilephoto from '../Images/resizeBannerPhoto.jpg';
import { Link } from 'react-router-dom';


const Home = () => {
    return (
        <>
            <Row>
                <div className="home" id="home-id">
                    <div className="greeting">
                        <h3><nobr>Welcome to my portfolio!</nobr></h3>
                        <h1><nobr>My Name is Anthony Khon</nobr></h1>
                        <p>I am a Front End Developer specializing in JavaScript and the React.js framework.</p>
                        <Link to="/about">
                        <Button className="about-btn" style={{ borderRadius: 20 }}
                        color="primary">About Me</Button>
                        </Link>
                    </div>
                    <div classname="home-img">
                        <img src={ profilephoto } alt="profilephoto" 
                        className="profilephoto" />
                    </div>
                </div>
            </Row>
            <Row>
                <Skills />
            </Row>
            <Row>
                <Projects />
            </Row>
            <Row>
                <ContactMe />
            </Row>
        </>
    );
}
  
  export default Home;


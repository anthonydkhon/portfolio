import React from 'react';
import '../../App.css'
import aboutmephoto from '../Images/aboutmephoto.jpg';
import { Container, Col, Button } from 'reactstrap';
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <Container className="about-container" fluid={true}>
            <Col className="text" sm="12" md="6" lg="6">
            <div className="about-me-content">
                <h2>About Me</h2>
                    <p>Hello my name is Anthony Khon and I am a 
                        recent Full Stack Web Developer graduate 
                        from TrueCoders. I have a strong interest 
                        in the front end side mainly with a strong 
                        focus on JavaScript and the React.js 
                        framework. Things that I am currently working
                        on are, Back-end work with node.js and express.js,
                        current unfinished projects, and User Authentication.
                        Learning is my forte and I strive to 
                        eventually take a Full-Stack developer role 
                        with goals of learning Angular, 
                        TypeScipt, and MongoDB in the future.
                    </p>
                    <p>I come from a long extensive military 
                        background with an active Secret Security 
                        Clearance. With 8 years of experience
                        through the Army, I've gained exceptional
                        leadership skills, time-management skills,
                        and the ability to positively work with 
                        different personalities in highly stressful
                        environments. For fun I love working on and 
                        building cars, hanging out and playing 
                        sports with my kids, diving into the world of
                        comics, anime, and video games, and building 
                        projects that connect people together or just make
                        our lives easier. If you would like to connect
                        with me or even have any opportunities, I 
                        would love to hear from you!
                    </p>
            </div>
            <div className="about-page-btn">
                <a href="https://drive.google.com/drive/folders/1hOIuZGw0d5vBN_W3wxyIdh7YslkEeRbh?usp=sharing" target="_blank">
                    <Button className="resume-btn" 
                            style={{ borderRadius: 20,
                            backgroundColor: `rgb(${157}, ${45}, ${231})` }}>
                                My Resume
                    </Button>
                </a>
                <a href="https://app.digit.ink/view-credential/92363288-b289-49b7-9f89-8cf6c6211404" target="_blank">
                    <Button className="certificate-btn" 
                            style={{ borderRadius: 20,
                            backgroundColor: `rgb(${157}, ${45}, ${231})` }}>
                                My Certificate
                    </Button>
                </a>
            </div>
            </Col>
            <Col sm="12" md="6" lg="6">
            <div className="about-me-photo">
                <img src={aboutmephoto} 
                className="aboutme" alt="aboutmephoto" />
            </div>
            </Col>
        </Container>
    )
}

export default About;
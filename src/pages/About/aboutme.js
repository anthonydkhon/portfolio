import React from 'react';
import '../../App.css'
import aboutmephoto from '../Images/aboutmephoto.jpg';
import { Container, Col, Button } from 'reactstrap';

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
                        framework. I'm currently refreshing my self
                        on Back-End server work with node.js and 
                        express.js. Back-end work is a weak point
                        for me as of currently but I am reviewing
                        documentation and lectures to polish my
                        current skills. Learning is my forte and I
                        strive to eventually become a Full-Stack
                        developer with goals of learning Angular, 
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
                        sports with my kids and building projects 
                        that connect people together or just make
                        our lives easier. If would like to connect
                        with me or even have any opportunities, I 
                        would love to hear from you!
                    </p>
            </div>
            <div className="about-page-btn">
            <Button className="resume-btn" 
            style={{ borderRadius: 20,
                backgroundColor: `rgb(${157}, ${45}, ${231})` }}
            >My Resume</Button>
            <Button className="certificate-btn" 
            style={{ borderRadius: 20,
                backgroundColor: `rgb(${157}, ${45}, ${231})` }}
            >My Certificate</Button>
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
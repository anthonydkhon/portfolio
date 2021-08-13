import React from 'react';
import Banner from '../Banner/banner.js';
import Skills from '../Skills/skills.js';
import Projects from '../Projects/projects.js';
import Navigation from '../components/navbar/navbar.js';
import ContactMe from '../Contact/contact.js';
import Footer from '../Footer/footer.js';
import { Row } from 'reactstrap';


const Home = () => {
    return (
        <>
            <Navigation />
            <Banner />
                    <Row>
                        <Skills />
                    </Row>
                    <Row>
                        <Projects />
                    </Row>
                    <Row>
                        <ContactMe />
                    </Row>
                    <Row>
                        <Footer />
                    </Row>
        </>
    );
}
  
  export default Home;


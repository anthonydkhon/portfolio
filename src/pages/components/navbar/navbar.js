import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { 
    Navbar,
    Nav,
    NavLink,
    NavItem,
} from 'reactstrap';
import '../../../App.css'
import Home from '../../Home/home';
import About from '../../About/aboutme';
import ProjectPage from '../../Projects/projectPage';
import ContactPage from '../../Contact/contactPage';

const Navigation = () => {
    return (
        <div className="nav">
            <Navbar>
                <Nav className="mr auto navbar">
                    <NavItem>
                        <NavLink href="/">
                            Home
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/about">
                            About
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/projects">
                            Projects
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/contact">
                            Contact
                        </NavLink>
                    </NavItem>
                </Nav>
            </Navbar>
            <Switch>
                <Route path="/" component={Home} exact={true} />
                <Route path="/about" component={About} />
                <Route path="/projects" component={ProjectPage} />
                <Route path="/contact" component={ContactPage} />
            </Switch>
        </div>
    )
}

export default Navigation;
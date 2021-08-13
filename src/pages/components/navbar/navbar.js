import React from 'react';
import { 
    Navbar,
    Nav,
    NavItem,
    Row
} from 'reactstrap';
import { Link } from 'react-router-dom'
import '../../../App.css'

const Navigation = () => {
    return (
        <Row className="nav-row">
        <div className="nav">   
            <Navbar>
                <Nav className="mr auto navbar">
                    <NavItem>
                        <Link class="nav-link" to="/">
                            Home
                        </Link>
                    </NavItem>
                    <NavItem>
                        <Link class="nav-link" to="/about">
                            About
                        </Link>
                    </NavItem>
                    <NavItem>
                        <Link class="nav-link" to="/projects">
                            Projects
                        </Link>
                    </NavItem>
                    <NavItem>
                        <Link class="nav-link" to="/contact">
                            Contact
                        </Link>
                    </NavItem>
                </Nav>
            </Navbar>
        </div>
        </Row>
    )
}

export default Navigation;
import React from 'react';
import { 
    Navbar,
    Nav,
    NavLink,
    NavItem,
    Row
} from 'reactstrap';
import '../../../App.css'

const Navigation = () => {
    return (
        <Row className="nav-row">
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
        </div>
        </Row>
    )
}

export default Navigation;
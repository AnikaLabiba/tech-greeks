import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import logo from '../../Images/logo.png'
import './Header.css'

const Header = () => {
    return (
        <div>
            <Navbar className='navbar' collapseOnSelect expand="lg" variant="light">
                <Container >
                    <Navbar.Brand className='logo' href="#home"><img src={logo} alt="" /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">

                        <Nav className='nav-item'>
                            <NavLink
                                className={({ isActive }) => (isActive ? "active-link" : "link")}
                                to='/'
                            >
                                Home
                            </NavLink>
                            <NavLink
                                className={({ isActive }) => (isActive ? "active-link" : "link")}
                                to='/videos'
                            >
                                Videos
                            </NavLink>
                            <NavLink
                                className={({ isActive }) => (isActive ? "active-link" : "link")}
                                to='/login'
                            >
                                Login
                            </NavLink>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;
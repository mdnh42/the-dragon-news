import React from 'react';
import logo from '../../../assets/logo.png';
import moment from 'moment';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import Marquee from "react-fast-marquee";


const Header = () => {
    return (
        <Container>
            <div className="text-center">
                <img src={logo} alt="" />
                <p className='text-secondary'><small>Journalism Without Fear or Favour</small></p>
                <p>{moment().format("dddd, MMMM Do, YYYY")}</p>
            </div>
            <div className='d-flex'>
                <Button variant="danger">Latest</Button>
                <Marquee className='text-danger' speed={50}>
                    <p>The Faker library in Python is commonly used to generate fake data.</p>
                    <p>Most programming languages have built-in functions for generating random numbers, strings, and dates.</p>
                </Marquee>
            </div>
            <Navbar expand="lg" collapseOnSelect bg="light" variant='light'>
                <Container>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="m-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#link">About</Nav.Link>
                            <Nav.Link href="#link">Career</Nav.Link>
                        </Nav>

                        <div className='d-flex align-items-center'><p>Profile</p><Button className='btn btn-dark'>Login</Button></div>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Container>
    );
};

export default Header;
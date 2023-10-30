import React from 'react'
import './Header.css'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <div>
            <Navbar className="nav-bar">
                <Container>
                    <Link to="/" style={{textDecoration :'none'}}>
                    <Navbar.Brand>
                        <img
                            alt=""
                            src="https://i.postimg.cc/zX6VHqv9/logo.png"
                            className="d-inline-block align-top logo"
                        />
                        <b className='logo-text'>
                            <span className='red-text'>V</span>
                            <span className='white-text'>ideo</span>
                            <span className='red-text'> U</span>
                            <span className='white-text'>ploader</span>
                        </b>
                    </Navbar.Brand>
                    </Link>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Navbar.Text>
                            {/* Signed in as: <a href="#login">Mark Otto</a> */}
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default Header
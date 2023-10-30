import React from 'react'
import './Footer.css'
import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
function Footer() {
    return (
        <div className='footer p-4 ms-2'>
            <hr></hr>
            <Row className='mt-4'>
                <Col lg={6} className='text-sm-left'>
                    <img
                        alt=""
                        src="https://i.postimg.cc/zX6VHqv9/logo.png"
                        className="d-inline-block align-top footer-logo"
                    />
                    <h5 className='footer-logo-text header-font'>
                        <span className='red-text'>V</span>
                        <span className='white-text'>ideo</span>
                        <span className='red-text'> U</span>
                        <span className='white-text'>ploader</span>
                    </h5><br>
                    </br>
                    <p className='mt-2 white-text content-font'>Upload any number of videos up to 500MB in size to the Simplified app to use and reuse in your designs. Add them to your assets and to shared folders so colleagues can use them too, and replace or delete them anytime.</p>
                    <i class="fa-brands fa-facebook me-2 brand-icons"></i>
                    <i class="fa-brands fa-x-twitter me-2 brand-icons"></i>
                    <i class="fa-brands fa-instagram me-2 brand-icons"></i>
                </Col>
                <Col lg={2} className='footer-col-2 mobile-space' >
                    <h5 className='header-font'><b><span className='red-text'>L</span><span className='white-text'>inks</span></b></h5>
                    <Link to="/" style={{ textDecoration: 'none' }}><a className='footer-link white-text content-font' href=''>Landing</a></Link><br></br>
                    <Link to="/home" style={{ textDecoration: 'none' }}><a className='footer-link white-text content-font' href=''>Home</a></Link><br></br>
                    <Link to="/history" style={{ textDecoration: 'none' }}><a className='footer-link white-text content-font' href=''>Watch history</a></Link>
                </Col>
                <Col lg={4} className='mobile-space'>
                    <h5 className='header-font mt-2'>
                        <span className='red-text'>C</span>
                        <span className='white-text'>ontact</span>
                        <span className='red-text'> U</span>
                        <span className='white-text'>s</span></h5>

                    <input type="text" className='form-control w-75' placeholder='Enter email'></input>
                    <button className='btn w-75 mt-3 red-button'>Send</button>
                </Col>

            </Row>
            <Row>
                <Col lg={12} className='text-center footer-col-3 content-font'>
                    <p className='white-text'>© 2023, All Rights Reserved, Made with <i class="fa-solid fa-heart red-text"></i> in India </p>
                </Col>
            </Row>
        </div >
    )
}

export default Footer
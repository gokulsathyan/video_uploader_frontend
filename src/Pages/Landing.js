import React from 'react'
import './Landing.css'
import { Container, Row, Col } from 'react-bootstrap'
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom'

function Landing() {
    const navigate = useNavigate();
    function redirectToHome() {
        navigate('/home');
    }
    return (
        <div>
            <Container className='main-container'>
                <Row className='mb-5'>
                    <Col lg={6}>
                        <h3 className='header-font'>
                            <span className='red-text'>V</span>
                            <span className='white-text'>ideo</span>
                            <span className='red-text'> U</span>
                            <span className='white-text'>ploader</span>
                        </h3>
                        <p className='content-font white-text main-content p-4'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi nisi voluptatibus similique, repellendus deserunt earum molestiae et ipsa deleniti ad, nulla voluptate corporis cupiditate incidunt, veniam molestias! Placeat, ab earum.</p>
                        <br>
                        </br>
                        <div className='text-center py-5'>
                            <button className=' main-button' onClick={redirectToHome}><b>Get started</b>
                                <i class="fa-solid fa-play fa-beat-fade ms-2" style={{ color: '#E50914' }}></i>
                            </button>
                        </div>
                    </Col>
                    <Col lg={6}>
                        <img src='https://i.postimg.cc/G2rGwQG3/video.gif' className='main-img'></img>
                    </Col>
                </Row>
                <hr></hr>
                <Row className='mt-3 mb-5 py-5'>
                    <h4 className='text-center mb-5 header-font'><b>
                        <span className='red-text'>F</span>
                        <span className='white-text'>eatures</span>
                    </b></h4>
                    <Col>
                        <Card style={{ width: '100%', marginRight: '10px' }} className='mb-sm-2'>
                            <Card.Img variant="top" src="https://i.postimg.cc/pdXyk0FK/manage.gif" />
                            <Card.Body className='p-5'>
                                <Card.Title className='header-font white-text'>Managing videos</Card.Title>
                                <Card.Text className='content-font white-text'>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{ width: '100%', marginRight: '10px' }}>
                            <Card.Img variant="top" src="https://i.postimg.cc/rFMTSDWr/categorise.gif" />
                            <Card.Body className='p-5'>
                                <Card.Title className='header-font white-text'>Categorise videos</Card.Title>
                                <Card.Text className='content-font white-text'>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{ width: '100%', marginRight: '10px' }}>
                            <Card.Img variant="top" src="https://i.postimg.cc/mrNhyvkL/history.gif" />
                            <Card.Body className='p-5'>
                                <Card.Title className='header-font white-text'>Watch history</Card.Title>
                                <Card.Text className='content-font white-text'>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Landing
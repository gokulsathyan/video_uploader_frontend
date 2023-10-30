import React, { useState } from 'react'
import './Home.css'
import { Row, Col } from 'react-bootstrap'
import Add from '../Components/Add'
import View from '../Components/View'
import Category from '../Components/Category'
import { Link } from 'react-router-dom';

function Home() {
  //create state for state lifting
  const [addUpdate, setAddUpdate] = useState({});
  return (
    <div className='mt-5'>
      <Row>
        <Col lg={6}>
          <h3 className='ms-5 ps-5 mb-4 header-font'>
            <span className='red-text'>S</span>
            <span className='white-text'>tart</span>
            <span className='red-text'> U</span>
            <span className='white-text'>ploading</span>
            <span className='red-text'> V</span>
            <span className='white-text'>ideos</span>
            <span className='red-text'> F</span>
            <span className='white-text'>or</span>
            <span className='red-text'> F</span>
            <span className='white-text'>ree</span>
          </h3>
          <div className='ms-5 ps-5 mb-5'>
            <Link to="/history" style={{ textDecoration: 'none' }}><a href="" className='history-link content-font'><i class="fa-solid fa-clock fa-spin me-2"></i>View watch history</a></Link>
          </div>
          <p className='ms-5 ps-5 mb-4 content-font whiote-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem nulla architecto maiores voluptate illo beatae magni adipisci repellendus dolor! Vel quibusdam repellendus veniam illum, hic quae quidem voluptates accusantium minima. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis ex voluptatum laborum atque, odit rerum a, sunt odio cupiditate doloribus nobis, facere distinctio. Placeat architecto quasi libero fugit fugiat ut?</p>
        </Col>
        <Col lg={6}>
          <div className='text-center'> <img src='https://i.postimg.cc/4yQvyV8J/upload-animation.gif' className='show-img'></img></div>
        </Col>
      </Row>
      <Row className='mt-5 ms-2'>
        <Col lg={1}>
          <Add update={setAddUpdate}></Add>
        </Col>
        <Col lg={7}>
          <View updatedState={addUpdate}></View>
        </Col>
        <Col lg={4}>
          <Category></Category>
        </Col>
      </Row>
    </div>
  )
}

export default Home
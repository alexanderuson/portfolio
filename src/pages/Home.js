import React from 'react';
import SocialLinks from '../components/SocialLinks';
import { Button, Image, Row, Col} from 'react-bootstrap';
import { Link } from "react-router-dom";


const Home = () => {
  return (
    <div className='d-flex justify-content-center align-items-center' >
      <Row className='hero'>
        <Col className='d-flex justify-content-center align-items-center'>
          <Image src='/alex.png' style={{minWidth:250}} fluid/>
        </Col>
        <Col>
          <h1 className='display-1 fw-bold'>Alexander Uson</h1>
          <h3 className='display-5 fw-semibold'>Aspiring Web Developer</h3>
          <hr />
          <p>
          To work for my dreams which provides me with ample opportunities to improve my skill to learn and growth along with organization goals.
          </p>
          <div className='d-flex align-items-center gap-2'>
            <Link to='/work'>
              <Button className='btn-lg' variant='dark'>View Work</Button>
            </Link>
            <SocialLinks />
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Home;

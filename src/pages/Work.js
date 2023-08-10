import React from 'react';
import { Carousel, Image, Container,  Row, Col } from 'react-bootstrap';


const Work = () => {
  return (
    <Container>
      <Row>
      <Col>
        <h2 className='display-1 fw-bold'>
           My Work
        </h2>
        <p>Here are some of the projects I've worked on:</p>
        <ul>
          <li>
            <h4>ECPR Mobile</h4>
            <p>Tech Stack:Androide, Java, Firebase</p>
          </li>
          <li>
            <h4>Student Helpdesk ticketing System</h4>
            <p>Tech Stack: MongoDB, ExpressJS, ReactJS, NodeJs</p>
          </li>
          <li>
            <h4>Lyric coding Picture</h4>
            <p>Tech Stack: HTML, CSS, JS</p>
          </li>
        </ul>
      </Col>
      <Col>
      <div style={{minWidth:280}}>
      <Carousel>
        <Carousel.Item>
           <div style={{maxHeight:300}}>
            <Image src="/alexx.jpg" className="w-100 h-100 object-cover"/>
           </div>
          <Carousel.Caption>
            <h3>EPCR</h3>  
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <div style={{maxHeight:300}}>
            <Image src="/alexxx.png" className="w-100 h-100 object-cover"/>
           </div>
          <Carousel.Caption>
            <h3>Student Helpdesk ticketing System</h3>  
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          
          <div style={{maxHeight:300}}>
            <Image src="/lexi.jpg" className="w-100 h-100 object-cover"/>
           </div>
          <Carousel.Caption>
            <h3>Lyric coding Picture</h3>
           
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      </div>
      </Col>
    </Row>
    </Container>
  );
};

export default Work;

import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Carousel, Container, Form, FormControl, Nav, Navbar } from 'react-bootstrap';
import logo from '../logo/images.png';
import firstImg from '../../src/Background/Captureee.PNG'
import secondImg from '../../src/Background/Captureeeee.png';
import thirdImg from '../../src/Background/little-girl-sitting-table-using-modern-tablett.jpg';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <Navbar bg="white" expand="lg">
  <Container fluid>
    <img style={{width:'20%'}} src={logo} alt="" />
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
        <Link className='fw-bold mx-3' to="/home">Home</Link>
        <Link className='fw-bold mx-3' to="/services">Services</Link>
        <Link className='fw-bold mx-3' to="/contact">Contact</Link>
        <Link className='fw-bold mx-3' to="/about">About Us</Link>
      </Nav>
      <Form className="d-flex mx-5">
        <FormControl
          style={{borderRadius:'50px'}}
          type="search"
          placeholder="Search Courses"
          className="me-2"
          aria-label="Search"
        />
        <Button style={{borderRadius:'50px',background:'#824aff',padding:'5px',border:'1px solid #824aff',color:'whitesmoke'}} variant="outline-success" className='fs-6'>Search</Button>
      </Form>
    </Navbar.Collapse>
  </Container>
            </Navbar>
            <Carousel>
  <Carousel.Item interval={1000}>
     <img
      style={{width:'100%',height:'600px'}}
      className="d-block w-100"
      src={firstImg}
      alt="First slide"
    />
    <Carousel.Caption className='text-dark fs-1 fw-bold'>
     <h1>This Is The Best Courses You Can Get</h1>
    <h2>Not Just Traditional Learning!!</h2>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={500}>
     <img
      style={{width:'100%',height:'600px'}}
      className="d-block w-100"
      src={secondImg}
      alt="Second slide"
    />
    <Carousel.Caption className='text-dark fs-1 fw-bold'>
    <h1>This Is The Best Courses You Can Get.</h1>
    <h2>Not Just Traditional Learning!!</h2>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
     <img
      style={{width:'100%',height:'600px'}}
      className="d-block w-100"
      src={thirdImg}
      alt="Third slide"
    />
    <Carousel.Caption className='text-black fs-1 fw-bold'>
    <h1>This Is The Best Courses You Can Get!!</h1>
    <h2>Not Just Traditional Learning</h2>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
        </div>
    );
};

export default Header;
import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Carousel, Container, Form, FormControl, Nav, Navbar } from 'react-bootstrap';
import logo from '../logo/images.png';
import firstImg from '../../src/Background/istockphoto-1141405912-612x612.jpg'
import secondImg from '../../src/Background/unnamed.jpg';
import thirdImg from '../../src/Background/website_seoul_cover_4.jpg';

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
        <Nav.Link className='fw-bold' to="/home">Home</Nav.Link>
        <Nav.Link className='fw-bold' href="/services">Services</Nav.Link>
        <Nav.Link className='fw-bold' href="/contact">Contact</Nav.Link>
        <Nav.Link className='fw-bold' href="/about">About Us</Nav.Link>
      </Nav>
      <Form className="d-flex mx-5">
        <FormControl
          style={{borderRadius:'50px'}}
          type="search"
          placeholder="Search Courses"
          className="me-2"
          aria-label="Search"
        />
        <Button style={{borderRadius:'50px',background:'pink',padding:'5px',border:'1px solid pink'}} variant="outline-success" className='fs-6'>Search</Button>
      </Form>
    </Navbar.Collapse>
  </Container>
            </Navbar>
            <Carousel>
  <Carousel.Item interval={1000}>
     <img
      style={{width:'100%',height:'500px'}}
      className="d-block w-100"
      src={firstImg}
      alt="First slide"
    />
    <Carousel.Caption className='text-light fs-1 fw-bold'>
     <h1>This Is The Best Courses You Can Get</h1>
    <h2>Not Just Traditional Learning!!</h2>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={500}>
     <img
      style={{width:'100%',height:'500px'}}
      className="d-block w-100"
      src={secondImg}
      alt="Second slide"
    />
    <Carousel.Caption className='text-light fs-1 fw-bold'>
    <h1>This Is The Best Courses You Can Get.</h1>
    <h2>Not Just Traditional Learning!!</h2>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
     <img
      style={{width:'100%',height:'500px'}}
      className="d-block w-100"
      src={thirdImg}
      alt="Third slide"
    />
    <Carousel.Caption className='text-light fs-1 fw-bold'>
    <h1>This Is The Best Courses You Can Get!!</h1>
    <h2>Not Just Traditional Learning</h2>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
        </div>
    );
};

export default Header;
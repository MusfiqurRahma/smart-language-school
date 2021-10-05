import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Col, Container, Form, Row } from 'react-bootstrap';
import subscribeImg from '../../Background/refer-a-friend.png';
import iconImg from '../../Background/72-729756_how-to-add-a-new-user-to-your.png';

const FindCourse = () => {
   // finding course
    return (
        <>
            <Container className='bg-light'>
                <div>
                <p className='text-danger fw-bold mt-4'>CONTACT US</p>
             <h2 style={{ fontWeight: '900' }}>Find Your Course</h2>
                </div>
           <Row>
             <Col lg={4} md={6} sm={12} className='text-center mt-5'>
                <img style={{width:'30%',marginBottom:'5px'}} src={iconImg} alt="" />
                <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
             <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>
       <Form.Group className="mb-3" controlId="formBasicPassword">
         <Form.Control type="password" placeholder="Password" />
           </Form.Group>
              <Form.Group className="mb-3"     controlId="formBasicCheckbox">
             </Form.Group>
          <Button style={{backgroundColor:'#824aff'}} className='w-100 border border-2 p-2 text-light' variant="primary" type="submit">
        Start Now
     </Button>
    </Form>
       </Col>
         <Col lg={8} md={6} sm={12}>
           <img src={subscribeImg} alt="" />
            </Col>
            </Row>
        </Container>
     </>
    );
};

export default FindCourse;
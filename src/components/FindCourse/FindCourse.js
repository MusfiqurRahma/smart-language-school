import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Col, Form, Row } from 'react-bootstrap';
import subscribeImg from '../../Background/refer-a-friend.png';

const FindCourse = () => {
    return (
        <div className='row row-cols-1 row-cols-md-1 mt-5' style={{ background: '#37beef' }}>
            <p style={{textAlign:'left'}} className='text-danger fw-bold'>CONTACT US</p>
            <h2 style={{ textAlign: 'left', color: 'whitesmoke', fontWeight: '900' }}>Find Your Course</h2>
            <p style={{textAlign:'left'}}>Find out our next available admission <br /> programs and new members.</p>
            <Form >
           <Form>
           <Row>
          <Col>
          <Form.Control className='w-25 mb-2' placeholder="First name" />
          <Form.Control className='w-25 mb-2' placeholder="Last name" />
          </Col>
      </Row>
     </Form>
    <Form.Group className="mb-2 w-25" controlId="formGroupEmail">
    <Form.Control type="email" placeholder="Enter your email" />
    </Form.Group>
    <Form.Group className="mb-2 w-25" controlId="formGroupPassword">
    <Form.Control type="password" placeholder="Password" />
    </Form.Group>
   <Button style={{marginRight:'75%',backgroundColor:'#ffc0cb',border:'1px solid #ffc0cb',padding:'8px',fontSize:'18px'}} variant="primary" type="submit">
    Send Message
                </Button>
                <img src={subscribeImg} alt="" />
 </Form>
</div>
    );
};

export default FindCourse;
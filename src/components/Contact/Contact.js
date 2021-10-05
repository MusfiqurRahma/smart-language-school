import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarked, faPhone, faStopwatch} from '@fortawesome/free-solid-svg-icons'
import { Col, Container, Form, Row } from 'react-bootstrap';
import Button from '@restart/ui/esm/Button';
import subscribeImg from '../../Background/refer-a-friend.png';
import iconImg from '../../Background/72-729756_how-to-add-a-new-user-to-your.png';
// contact item started 
const Contact = () => {
    const marker = <FontAwesomeIcon style={{fontSize:'18px',color:'red'}} icon={faMapMarked} />
    const telePhone = <FontAwesomeIcon style={{fontSize:'18px',color:'red'}} icon={faPhone} />
    const alarm = <FontAwesomeIcon style={{fontSize:'18px',color:'red'}} icon={faStopwatch} />
    return (
        <div style={{marginTop:'20px' ,backgroundColor:'skyblue',padding:'30px'}}>
            <Col>
                    <h3 className='fw-bold'>Contact Us</h3>
                    <hr />
                    <small>{marker} Kazi Nazrul Avenue,Dhaka</small>
                    <br />
                    <small>{telePhone} +88 23 98 262</small>
                    <br />
                    <small>{alarm} Sunday - Thursday: 8 AM - 5 PM</small> <br />
                    <small><i style={{fontSize:'18px',color:'red',marginRight:'5px'}} class="fas fa-envelope-square"></i>Email: email@smartlanguage.com</small>
                    <div style={{marginLeft:'45%',fontSize:'20px'}} className='d-flex'>
                    <p style={{color:'#1c9cea'}} className='mx-2'><i class="fab fa-twitter"></i></p>
                    <p style={{color:'#4064ac'}} className='mx-2'><i class="fab fa-facebook"></i></p>
                    <p style={{color:'#ec504d'}} className='mx-2'><i class="fab fa-instagram-square"></i></p>
                    <p style={{color:'#00aae8'}} className='mx-2'><i class="fab fa-skype"></i></p>
                    </div>
            </Col>
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
        </div>
    );
};

export default Contact;
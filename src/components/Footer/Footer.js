import React from 'react';
import { Col, FormControl, InputGroup, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarked, faPhone, faStopwatch} from '@fortawesome/free-solid-svg-icons'
import Button from '@restart/ui/esm/Button';

const Footer = () => {
    const marker = <FontAwesomeIcon style={{fontSize:'18px',color:'red'}} icon={faMapMarked} />
    const telePhone = <FontAwesomeIcon style={{fontSize:'18px',color:'red'}} icon={faPhone} />
    const alarm = <FontAwesomeIcon style={{fontSize:'18px',color:'red'}} icon={faStopwatch} />
    return (
        <div style={{ backgroundColor: '#012345', color: 'white', marginTop: '30px', height: '350px', padding:'15px'}}>
            <Row className='d-flex justify-content-center'>
                <Col>
                    <h3 className='fw-bold'>Contact Us</h3>
                    <hr />
                    <small>{marker} Kazi Nazrul Avenue,Dhaka</small>
                    <br />
                    <small>{telePhone} +88 23 98 262</small>
                    <br />
                    <small>{alarm} Sunday - Thursday: 8 AM - 5 PM</small> <br />
                    <small><i style={{fontSize:'18px',color:'red',marginRight:'5px'}} class="fas fa-envelope-square"></i>Email: email@smartlanguage.com</small>
                    <div style={{marginLeft:'100px',fontSize:'20px'}} className='d-flex'>
                    <p style={{color:'#1c9cea'}} className='mx-2'><i class="fab fa-twitter"></i></p>
                    <p style={{color:'#4064ac'}} className='mx-2'><i class="fab fa-facebook"></i></p>
                    <p style={{color:'#ec504d'}} className='mx-2'><i class="fab fa-instagram-square"></i></p>
                    <p style={{color:'#00aae8'}} className='mx-2'><i class="fab fa-skype"></i></p>
                    </div>
                </Col>
                <Col>
                    <h3 className='fw-bold'>Our Services</h3>
                    <hr />
                    <ul>
                        <li>Bengali Language</li>
                        <li>French Language</li>
                        <li>Spanish Language</li>
                        <li>Weekend Courses</li>
                        <li>Children Courses</li>
                        <li>Intermediate</li>
                        <li>German Language</li>
                        <li>Russian Language</li>
                    </ul>
                </Col>
                <Col>
                    <h3 className='fw-bold'>Information</h3>
                    <hr />
                    <p>About us</p>
                    <p>Blog</p>
                    <p>Special offers</p>
                    <p>Privacy policy</p>
                    <p>Terms of us</p>
                </Col>
                <Col>
                    <h3 className='fw-bold'>News Letter</h3>
                    <hr />
                    <InputGroup className="mb-3">
                        <FormControl
                            style={{width:'100%',fontSize:'18px',borderRadius:'15px',color:'black',marginRight:'50px'}}
            placeholder="Your Email"
           aria-label="Recipient's username"
          aria-describedby="basic-addon2"
          />
        </InputGroup>
         <Button style={{width:'80%',border:'1px solid #824aff',backgroundColor:'#824aff',fontSize:'18px',borderRadius:'15px',color:'white',marginRight:'50px'}} variant="outline-secondary"id="button-addon2">
        Subscribe
      </Button>
   </Col>
  </Row>
<hr />
<p>2021&copy;All Rights Reserved -'Musfiqur Rahman'</p>            
</div>
);
};

export default Footer;
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarked, faPhone, faStopwatch} from '@fortawesome/free-solid-svg-icons'
import { Col } from 'react-bootstrap';

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
        </div>
    );
};

export default Contact;
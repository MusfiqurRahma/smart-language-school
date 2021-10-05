import React from 'react';
import { Col, Row } from 'react-bootstrap';
import aboutImg from '../../Background/class.PNG';

const About = () => {
    return (
        // about started here
        <div style={{backgroundColor:'pink',padding:'50px',marginTop:'30px'}}>
            <Row>
                <Col sm={1} md={6} lg={6}>
                    <img style={{width:'100%'}} src={aboutImg} alt="" />
                </Col>
                <Col sm={1} md={8} lg={6}>
                    <h1 style={{ color: '#29293a', fontWeight: '800' }}>A FEW WORDS ABOUT US</h1>
                    <p><span style={{ color: 'red', fontSize: '20px', fontStyle: 'italic' }}>Smart Language School</span> is a global translation services and language courses academy founded in 1999. We aim to deliver quality translation and educational services for everyone.With a core group of more than 700 professional linguists and tutors operating from six continents, we serve the needs of our clients worldwide. Whatever your language needs are, we are here to help.</p>
                    <button style={{ backgroundColor: '#824aff', border: '1px solid #824aff', padding: '5px 15px', borderRadius: '10px', color: 'white', fontSize: '18px' }}>Read More</button>
                    {/* about ended */}
                </Col>
            </Row>
        </div>
    );
};

export default About;
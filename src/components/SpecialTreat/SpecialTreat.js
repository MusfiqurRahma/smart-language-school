import React from 'react';
import { Card } from 'react-bootstrap';
import './SpecialTreat.css';
import titleImg from '../../Background/title_separate.png';

const SpecialTreat = () => {
    return (
    <div className='mt-5'>
    <h3 className='text-secondary'>WHAT SPECIAL IN SMART LANGUAGE SCHOOL</h3>
    <img src={titleImg} alt="" />
    <p className='text-secondary fw-bold'>We provide the best services for your Learning skill.</p>
     <div className='row row-cols-1 row-cols-md-2' style={{margin:'auto'}}>
     <Card className='cardList' style={{ width: '18rem',marginLeft:'80px'}}>
     <Card.Body>
     <Card.Title className='fw-bold'>METHODOLOGY</Card.Title>
     <Card.Text>
     Apart from regular academic activities Department of Statistics has been conducting different training programs such as SPSS and STATA among professionals and students.
     </Card.Text>
     <Card.Link href="/viewmore">View More</Card.Link>
     </Card.Body>
     </Card>
            <Card className='cardList' style={{ width: '18rem' }}>
     <Card.Body>
     <Card.Title className='fw-bold'>FACILITY</Card.Title>
     <Card.Text>
     Whether you want to become a facility manager, start your own facility, or make your current facility more effective; you have to know the basics of Facility Management.
     </Card.Text>
     <Card.Link href="#">View More</Card.Link>
     </Card.Body>
     </Card>
    <Card className='cardList' style={{ width: '18rem' }}>
     <Card.Body>
     <Card.Title className='fw-bold'>BEST SERVICE</Card.Title>
     <Card.Text>
     The course description orients students by outlining the rationale for the course subject or theme, framing a brief overview of the key content.
     </Card.Text>
     <br />
     <Card.Link href="#">View More</Card.Link>
     </Card.Body>
     </Card>
    <Card className='cardList' style={{ width: '18rem' }}>
     <Card.Body>
     <Card.Title className='fw-bold'>COURSES</Card.Title>
     <Card.Text>
     Very soon we are going to start some classes on language learning. It will start from January. Stay tuned to seize the opportunities.
    </Card.Text> <br />                   
     <Card.Link href="#">View More</Card.Link>
     </Card.Body>
     </Card>
    </div>
    </div>
    );
};

export default SpecialTreat;
import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Trainers.css'

const Trainer = (props) => {
    // distructuring
    const { name, img, title } = props.trainer;
    return (
        <div>
      <Col>
      <Card className='mx-auto trainers'>
        <Card.Img style={{width:'100%',height:'300px'}} variant="top" src={img} />
       <Card.Body>
        <p>{title}</p>
        <Card.Title>{name}</Card.Title>
            </Card.Body>
            <Link to='/'>
            <button style={{backgroundColor:'#824aff'}} className='w-50 mx-auto border border-2 text-light mb-2' >See More →</button>
            </Link>
      </Card>
    </Col>
        </div>
    );
};

export default Trainer;
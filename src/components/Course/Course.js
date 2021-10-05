import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Course.css';
const Course = (props) => {
  const { title, desc, img, name,id } = props.course;
  const url = `services/${id}`;
    return (
    <div>
       <Col>
      <Card>
        <Card.Img className='service-img' style={{width:'100%',height:'300px'}} variant="top" src={img} />
       <Card.Body>
        <p>{title}</p>
        <Card.Title>{name}</Card.Title>
          <Card.Text>
            {desc}
          </Card.Text>
            </Card.Body>
            <Link to='/services'>
            <button onClick={{url}} style={{backgroundColor:'#824aff'}} className='w-50 mx-auto border border-2 text-light mb-2' >See More →</button>
            </Link>
      </Card>
    </Col>
       </div>
    );
};
export default Course;
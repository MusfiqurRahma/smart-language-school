import React from 'react';
import { Card, Col } from 'react-bootstrap';

const Course = (props) => {
    const { title, desc,img,name } = props.course;
    console.log(props);
    return (
    <div>
       <Col>
      <Card>
        <Card.Img style={{width:'100%',height:'300px'}} variant="top" src={img} />
       <Card.Body>
        <p>{title}</p>
        <Card.Title>{name}</Card.Title>
          <Card.Text>
            {desc}
          </Card.Text>
            </Card.Body>
            <button style={{backgroundColor:'#824aff'}} className='w-50 mx-auto border border-2 text-light mb-2'>See More</button>
      </Card>
    </Col>
       </div>
    );
};

export default Course;
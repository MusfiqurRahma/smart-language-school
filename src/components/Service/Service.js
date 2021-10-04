import React from 'react';
import { Card, Col } from 'react-bootstrap';

const Service = (props) => {
    const { name, title, desc, img } = props.service;
    return (
        <div>
         <Col>
      <Card style={{width:'80%'}}>
         <Card.Img style={{width:'100%',height:'300px'}} variant="top"src={img}/>
            <Card.Body>
            <p>{title}</p>
            <Card.Title>{name}</Card.Title>
          <Card.Text>
          {desc}
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
        </div>
    );
};

export default Service;
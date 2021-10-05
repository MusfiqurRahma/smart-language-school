import React, { useEffect, useState } from 'react';
import {Row } from 'react-bootstrap';
import Service from '../Service/Service';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('./services.JSON')
            .then(res => res.json())
            .then(data=>setServices(data))
    },[])
    return (
        <div  style={{marginTop:"20px"}}>
            <Row xs={1} md={3} className="g-4">
            {
                    services.map(service => <Service
                        service={service}
                        key={service.id}>
                        </Service>)
            }
           </Row>
          
        </div>
    );
};
export default Services;

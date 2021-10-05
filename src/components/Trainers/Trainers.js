import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Trainer from '../Trainer/Trainer';

const Trainers = () => {
    // usestate started
    const [trainers, setTrainers] = useState([]);
    // using useeffect
    useEffect(() => {
        fetch('./trainer.JSON')
            .then(res => res.json())
            .then(data => setTrainers(data))
    },[])
    return (
        // display all trainers
        <><h2 style={{fontWeight:'900',marginTop:'15px',color:'#29293a'}}>Meet With Our Honourable Teachers</h2> <br />
            
        <div>
            <Row xs={1} md={2} lg={3} className="g-4 row row-cols-1 row-cols-md-4">
            {
                        trainers.map(trainer => <Trainer
                            trainer={trainer}
                            key={trainer.id}>
                            </Trainer>)
            }
             </Row> 
          </div> </>
    );
};
export default Trainers;
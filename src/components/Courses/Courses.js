import React, { useEffect, useState } from 'react';
import {Row } from 'react-bootstrap';
import Course from '../Course/Course';
import titleImg from '../../Background/title_separate.png';
import Services from '../Services/Services';

const Courses = () => {
    // using usestate
    const [courses, setCourses] = useState([]);
    // using useeffect
    useEffect(() => {
        fetch('./services.JSON')
            .then(res => res.json())
            .then(data=>setCourses(data))
    },[])
    return (
        // course details
        <div>
            <div className='bg-light '>
                <h1 className='fw-bold p-5 mt-5'>The bird's eye view of <span className='text-info'>Our Services</span></h1>
                <img src={titleImg} alt="" />
                <p style={{color:'#6c757d',fontStyle:'italic',fontWeight:'600'}}>"You can never understand one language until you understand at least two."</p>
            </div>
            <Row xs={1} md={2} className="g-4 row row-cols-1 row-cols-md-4">
            {
                courses.slice(0,4).map(course => <Course
                 course={course}
                 key={course.id}><Services></Services></Course>)
            }
             </Row> 
          </div>
    );
};

export default Courses;

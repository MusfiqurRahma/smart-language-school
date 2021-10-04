import React, { useEffect, useState } from 'react';
import {Row } from 'react-bootstrap';
import Course from '../Course/Course';
import titleImg from '../../Background/title_separate.png';

const Courses = () => {
    const [courses, setCourses] = useState([]);
    useEffect(() => {
        fetch('./services.JSON')
            .then(res => res.json())
            .then(data=>setCourses(data))
    },[])
    return (
        <div>
            <div>
                <h1 className='fw-bold bg-light p-5 mt-5'>The bird's eye view of <span className='text-info'>Our Services</span> <br />
                <img src={titleImg} alt="" /></h1>
                
            </div>
            <Row xs={1} md={2} className="g-4 row row-cols-1 row-cols-md-4">
            {
                courses.slice(0,4).map(course => <Course
                 course={course}
                 key={course.key}></Course>)
            }
             </Row> 
          </div>
    );
};

export default Courses;

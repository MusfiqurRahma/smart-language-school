import React, { useEffect, useState } from 'react';
import {Row } from 'react-bootstrap';

import Course from '../Course/Course';

const Courses = () => {
    const [courses, setCourses] = useState([]);
    useEffect(() => {
        fetch('./services.JSON')
            .then(res => res.json())
            .then(data=>setCourses(data))
    },[])
    return (
        <div>
            <h1>Our Services</h1>
          
            <Row xs={1} md={2} className="g-4 row row-cols-1 row-cols-md-3">
            {
                courses.map(course => <Course
                 course={course}
                 key={course.key}></Course>)
            }
             </Row> 
          </div>
    );
};

export default Courses;

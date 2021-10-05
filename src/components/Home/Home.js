import React from 'react';
import About from '../About/About';
import Courses from '../Courses/Courses';
import FindCourse from '../FindCourse/FindCourse';
import SpecialTreat from '../SpecialTreat/SpecialTreat';
import Trainers from '../Trainers/Trainers';

const Home = () => {
    return (
        <div>
            <SpecialTreat></SpecialTreat>
            <Courses></Courses>
            <About></About>
            <Trainers></Trainers>
            <FindCourse></FindCourse>
        </div>
    );
};

export default Home;
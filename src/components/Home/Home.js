import React from 'react';
import Courses from '../Courses/Courses';
import FindCourse from '../FindCourse/FindCourse';
import SpecialTreat from '../SpecialTreat/SpecialTreat';


const Home = () => {
    return (
        <div>
            <SpecialTreat></SpecialTreat>
            <Courses></Courses>
            <FindCourse></FindCourse>
        </div>
    );
};

export default Home;
import React from 'react';
import { Link } from 'react-router-dom';
import notFound from '../../fourOFour/164-1647170_404-page-04-404-error-page-png-transparent.png';

const NotFound = () => {
    // showing 404 
    return (
        <div>
            <img src={notFound} alt="" /> <br />
            <Link to='/home'>
                <button style={{ backgroundColor: '#824aff', border: '1px solid #824aff', padding: '15px', borderRadius: '15px', fontWeight: '900', color: 'white' }}>Got To Home Page</button>
            </Link>
        </div>
    );
};

export default NotFound;
import React from 'react';
import { Link } from 'react-router-dom';
import notFound from '../../assets/images/404/notFound.png'

const NotFound = () => {
    return (
        <div className="w-full">
            <img className='w-2/4 mx-auto' src={notFound} alt="" />
            <p className='text-center my-8'><Link className='btn btn-primary' to="/">Home</Link></p>
        </div>
    );
};

export default NotFound;
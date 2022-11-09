import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import ServiceCard from '../../Services/ServiceCard/ServiceCard';

const LimitServices = () => {
    const limitService = useLoaderData();
    return (
        <div className=" my-16">
            <h1 className='text-5xl text-center font-bold'>My Services</h1>
            <div className='grid lg:grid-cols-3 gap-7 my-8'>
                {
                    limitService.map(service => <ServiceCard key={service._id} service={service}></ServiceCard>)
                }
            </div>
            <p className='text-center'><Link to="/services" className='btn btn-warning pl-6'>View all service</Link></p>

        </div>
    );
};

export default LimitServices;
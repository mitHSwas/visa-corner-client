import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import ServiceCard from '../../Services/ServiceCard/ServiceCard';

const LimitServices = () => {
    const limitService = useLoaderData();
    return (
        <div className=" my-16">
            <h1 className='lg:text-5xl md:text-4xl text-3xl text-center font-bold'>My Services</h1>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-7 my-8'>
                {
                    limitService.map(service => <ServiceCard key={service._id} service={service}></ServiceCard>)
                }
            </div>
            <p className='text-center'><Link to="/services" className='btn btn-warning pl-6'>View all service</Link></p>

        </div>
    );
};

export default LimitServices;
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ServiceCard from '../ServiceCard/ServiceCard';

const Services = () => {
    const services = useLoaderData();
    return (
        <div className=''>
            <h1 className='text-center text-4xl font-bold my-8'>Choose your need what you are looking for!</h1>
            <div className='grid lg:grid-cols-3 gap-7 my-16'>
                {
                    services.map(service => <ServiceCard
                        key={service._id}
                        service={service}
                    ></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Services;
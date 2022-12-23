import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ServiceCard from '../ServiceCard/ServiceCard';
import { Helmet } from 'react-helmet';

const Services = () => {
    const services = useLoaderData();
    return (
        <div className='container mx-auto'>
            <Helmet>
                <title>Viva-visa - services</title>
            </Helmet>
            <h1 className='text-center lg:w-full md:w-4/5 w-4/5 mx-auto lg:text-4xl md:text-3xl text-2xl font-bold my-8'>Choose your need what you are looking for!</h1>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-7 lg:my-16 md:my-14 my-10'>
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
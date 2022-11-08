import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ServiceDetails = () => {
    const { _id, name, picture, price, rating, description } = useLoaderData();
    return (
        <div>
            <div className="card lg:card-side bg-base-100 shadow-xl my-8">
                <figure><img src={picture} alt="Album" /></figure>
                <div className="card-body mr-6">
                    <h2 className="card-title">{name}</h2>
                    <p>{description}</p>
                    <div className="flex justify-between">
                        <span>Price: ${price}</span>
                        <span>Rating: {rating}/5</span>
                    </div>
                </div>
            </div>
            <div>
                <h2 className='text-2xl font-semibold'>Reviews:</h2>
            </div>
        </div>
    );
};

export default ServiceDetails;
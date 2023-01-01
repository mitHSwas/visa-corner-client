import React from 'react';
import { Link } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';

const ServiceCard = ({ service }) => {
    const { _id, name, picture, price, rating, description } = service;
    return (
        <div className="card card-compact mx-auto w-72 md:w-80 lg:w-96 bg-base-100 shadow-xl">
            <PhotoProvider>
                <PhotoView src={picture}>
                    <figure><img src={picture} alt="Shoes" /></figure>
                </PhotoView>
            </PhotoProvider>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{description.slice(0, 100)}...</p>
                <div className="card-actions justify-between">
                    <div>
                        <p className='text-base'>Rating: {rating}/5</p>
                        <p className='text-base'>Price: ${price}</p>
                    </div>
                    <Link className="btn btn-primary" to={`/service/${_id}`}>View Details</Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;
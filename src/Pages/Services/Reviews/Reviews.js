import React from 'react';

const Reviews = ({ rev }) => {
    const { img, name, ratings, review, } = rev;
    return (
        <div className="overflow-x-auto w-full my-8 border">
            <div className='flex' >
                <div className='w-1/6'>
                    <div className="flex items-center space-x-3">
                        <div className="avatar">
                            <div className="mask w-20 h-20">
                                <img src={img} alt="Avatar Tailwind CSS Component" />
                            </div>
                        </div>
                        <div>
                            <div className="font-bold">{name}</div>
                        </div>
                    </div>
                </div>
                <div className='w-4/6 border-x-2 p-2'>{review}</div>
                <div className='w-1/6 p-2'>Ratings: {ratings}/5</div>
            </div>
        </div>
    );
};

export default Reviews;
import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { Link, useLoaderData, useLocation } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';
import Reviews from '../Reviews/Reviews';

const ServiceDetails = () => {
    const { user } = useContext(AuthContext);
    const { _id, name, picture, price, rating, description } = useLoaderData();
    const [reviews, setReviews] = useState([]);
    const current = useLocation()

    const handleReview = event => {
        event.preventDefault();
        const form = event.target;
        const review = form.review.value;
        const ratings = form.ratings.value;
        if (review.length < 15) {
            return toast.error("Your review minimum 15 character length.")
        }
        if (ratings > 5 && ratings < 0) {
            return toast.error("Your rating should be more than 0 and less than or equals to 5.")
        }
        const reviewInfo = {
            serviceId: _id,
            serviceName: name,
            review: review,
            ratings: ratings,
            userName: user?.displayName || "Someone",
            email: user?.email,
            img: user?.photoURL || "https://i.ibb.co/GV7WmGT/download.jpg",
        }
        fetch(`https://viva-visa-server-mithswas.vercel.app/review/${_id}`, {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(reviewInfo),
        })
            .then(res => res.json())
            .then(result => {
                if (result.acknowledged) {
                    form.reset();
                    toast.success('Your Review Added Successfully!')
                }
            })
    }

    const handleAddReview = (id) => {
        fetch(`https://viva-visa-server-mithswas.vercel.app/review/${id}`)
            .then(res => res.json())
            .then(data => setReviews(data))
    }
    return (
        <div className='container mx-auto px-5'>
            <div className="card lg:card-side bg-base-100 shadow-xl my-8">
                <figure><img src={picture} alt="Album" /></figure>
                <div className="card-body">
                    <h2 className="card-title lg:text-4xl md:text-3xl text-2xl">{name}</h2>
                    <p>{description}</p>
                    <div className="flex justify-between">
                        <span>Price: ${price}</span>
                        <span>Rating: {rating}/5</span>
                    </div>
                </div>
            </div>
            <div>
                <h2 className='lg:text-4xl md:text-3xl text-2xl font-semibold'>Reviews:</h2>
                {
                    user?.email ?
                        <div className='my-8'>
                            <p className='text-lg'>Add Your Review:</p>
                            <form onSubmit={handleReview} className="card-body">
                                <div className="form-control lg:w-2/3 w-full">
                                    <label className="label">
                                        <span className="label-text">Review</span>
                                    </label>
                                    <textarea name="review" className="textarea textarea-bordered" placeholder="Write here..." required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Ratings(Out of 5)</span>
                                    </label>
                                    <input type="number" name="ratings" placeholder="ratings" className="input input-bordered w-3/5 lg:w-1/5" required />
                                </div>
                                <input onClick={() => handleAddReview(_id)} className="btn btn-primary mt-6 w-2/5 lg:w-1/5" type="submit" value="Add Review" />
                            </form>
                        </div>
                        :
                        <p className='text-xl my-5'>Please <Link className='text-orange-600 font-bold' state={{ currentLocation: current }} to="/login">LOGIN</Link> first to add your review.</p>
                }
                <div className='container mx-auto'>
                    <div>
                        <tr className='flex w-full'>
                            <th className='w-1/6'>Profile</th>
                            <th className='w-4/6'>Reviews</th>
                            <th className='w-1/6'>Ratings</th>
                        </tr>
                    </div>
                    {
                        reviews.length < 1 ?
                            <h2 className='lg:text-4xl md:text-3xl text-2xl text-center text-orange-400 my-7'>No review added still now.</h2>
                            :
                            <div >
                                {
                                    reviews?.map(review => <Reviews
                                        key={review._id}
                                        rev={review}
                                    ></Reviews>)
                                }
                            </div>
                    }

                </div>
            </div>
        </div>
    );
};

export default ServiceDetails;
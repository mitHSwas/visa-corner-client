import React, { useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';
import ReviewTable from '../ReviewTable/ReviewTable';
import { Helmet } from 'react-helmet';

const MyReview = () => {
    const { user } = useContext(AuthContext)
    const [myReviews, setMyReviews] = useState([]);
    const [update, setUpdate] = useState(null)
    useEffect(() => {
        const url = `https://viva-visa-server-mithswas.vercel.app/reviews?email=${user?.email}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setMyReviews(data));
    }, [user?.email])

    const handleDelete = (_id) => {
        const agree = window.confirm("Are your sure you want to delete this review?");
        if (agree) {
            fetch(`https://viva-visa-server-mithswas.vercel.app/review/${_id}`, {
                method: "DELETE",
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        toast.success("This review deleted successfully!");
                        const remaining = myReviews.filter(review => review._id !== _id);
                        setMyReviews(remaining);
                    }
                })
        }
    }

    const handleReviewUpdate = event => {
        event.preventDefault();
        const form = event.target;
        const review = form.review.value;
        const ratings = form.ratings.value;
        if (review.length < 15) {
            return toast.error("Your review minimum 15 character length.")
        }
        if (!/^[0-5](\.[0-5][0-5]?)?$/.test(ratings)) {
            return toast.error("Your service review rating should be 0 to 5.")
        }
        const updatedReview = {
            review,
            ratings
        };
        fetch(`https://viva-visa-server-mithswas.vercel.app/review/${update._id}`, {
            method: "PATCH",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(updatedReview)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    setUpdate(null);
                    toast.success("Review Updated Successfully.")
                    const url = `https://viva-visa-server-mithswas.vercel.app/reviews?email=${user?.email}`;
                    fetch(url)
                        .then(res => res.json())
                        .then(data => setMyReviews(data));
                }
            })
    }

    return (
        <div className='container mx-auto my-10'>
            <Helmet>
                <title>Viva-visa - myReview</title>
            </Helmet>
            <tr className="table w-full">
                <th className='w-1/6'>Service Name</th>
                <th className='w-4/6 text-center'>My Reviews</th>
                <th className='w-1/6'>Action</th>
            </tr>
            {
                myReviews.length < 1 ?
                    <h2 className='text-4xl text-center text-orange-400 my-7'>No review added still now.</h2>
                    :
                    <div className='container'>
                        {
                            myReviews?.map(myReview => <ReviewTable
                                key={myReview._id}
                                myReview={myReview}
                                handleDelete={handleDelete}
                                setUpdate={setUpdate}
                            ></ReviewTable>)
                        }
                    </div>
            }
            {update && <div>
                <input type="checkbox" id="review-modal" className="modal-toggle" />
                <div className="modal">
                    <div className="modal-box relative">
                        <label htmlFor="review-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                        <form onSubmit={handleReviewUpdate} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Review</span>
                                </label>
                                <textarea name="review" defaultValue={update.review} className="textarea textarea-bordered h-28"></textarea>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Ratings</span>
                                </label>
                                <input type="number" defaultValue={update.ratings} name="ratings" className="input input-bordered" />
                            </div>
                            <div className="form-control mt-6">
                                <input className="btn btn-primary" type="submit" value="Update" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>}
        </div>
    );
};

export default MyReview;
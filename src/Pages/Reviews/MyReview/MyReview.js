import React, { useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';
import ReviewTable from '../ReviewTable/ReviewTable';
import { Helmet } from 'react-helmet';

const MyReview = () => {
    const { user } = useContext(AuthContext)
    const [myReviews, setMyReviews] = useState([]);

    useEffect(() => {
        const url = `https://viva-visa-server-mithswas.vercel.app/reviews?email=${user?.email}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setMyReviews(data));
    }, [user?.email])

    const handleUpdate = (_id) => {

    }

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
                                handleUpdate={handleUpdate}
                            ></ReviewTable>)
                        }
                    </div>
            }

        </div>
    );
};

export default MyReview;
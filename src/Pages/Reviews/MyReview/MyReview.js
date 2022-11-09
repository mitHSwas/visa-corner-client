import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';
import ReviewTable from '../ReviewTable/ReviewTable';

const MyReview = () => {
    const { user } = useContext(AuthContext)
    const [myReviews, setMyReviews] = useState([]);

    useEffect(() => {
        const url = `http://localhost:5000/reviews?email=${user.email}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setMyReviews(data));
    }, [user.email])
    return (
        <div className='my-10'>
            <thead className="table w-full">
                <tr>
                    <th className='w-1/6'>Service Name</th>
                    <th className='w-4/6 text-center'>My Reviews</th>
                    <th className='w-1/6'>Update</th>
                </tr>
            </thead>
            {
                myReviews.length < 1 ?
                    <h2 className='text-4xl text-center text-orange-400 my-7'>No review added still now.</h2>
                    :
                    <div className='container'>
                        {
                            myReviews.map(myReview => <ReviewTable
                                key={myReview._id}
                                myReview={myReview}
                            ></ReviewTable>)
                        }
                    </div>
            }

        </div>
    );
};

export default MyReview;
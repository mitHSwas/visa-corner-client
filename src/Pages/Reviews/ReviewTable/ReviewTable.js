import React from 'react';

const ReviewTable = ({ myReview, handleDelete, handleUpdate }) => {
    const { serviceName, review, _id, ratings } = myReview;

    return (
        <div className="overflow-x-auto my-8">
            <table className="table w-full">
                <tbody>
                    <tr className="hover">
                        <td className='w-1/6'>{serviceName} ( rating: {ratings} )</td>
                        <td className='w-4/6  border-x-2'>{review}</td>
                        <td className='w-1/6'>
                            <button onClick={() => handleUpdate(_id)} className="btn btn-outline btn-warning mr-3">Update</button>
                            <button onClick={() => handleDelete(_id)} className="btn btn-outline btn-error">Delete</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default ReviewTable;
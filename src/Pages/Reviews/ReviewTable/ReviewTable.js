import React from 'react';

const ReviewTable = ({ myReview, handleDelete, handleUpdate }) => {
    const { serviceName, review, _id, ratings } = myReview;

    return (
        <div className="overflow-x-auto my-8">
            <table className="table w-full">
                <tbody>
                    <tr className='border-y-2 flex flex-col md:flex-row lg:flex-row'>
                        <td style={{ whiteSpace: "normal" }} className='w-full text-center lg:w-1/6 md:w-1/6'>{serviceName}(rating: {ratings})</td>
                        <td style={{ whiteSpace: "normal" }} className='w-full lg:w-4/6 md:w-4/6  border-x-2'>{review}</td>
                        <td className='flex gap-2 w-full lg:w-1/6 md:w-1/6 lg:flex-row md:flex-col'>
                            <button onClick={() => handleUpdate(_id)} className="btn btn-outline btn-warning mb-2">Update</button>
                            <button onClick={() => handleDelete(_id)} className="btn btn-outline btn-error">Delete</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default ReviewTable;
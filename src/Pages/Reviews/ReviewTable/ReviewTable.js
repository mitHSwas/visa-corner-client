import React from 'react';

const ReviewTable = ({ myReview }) => {
    const { serviceName, review, _id } = myReview
    return (
        <div className="overflow-x-auto my-8">
            <table className="table w-full">
                <tbody>
                    <tr className="hover">
                        <td className='w-1/6'>{serviceName}</td>
                        <td className='w-4/6  border-x-2'>{review}</td>
                        <td className='w-1/6'>Purple</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default ReviewTable;
import React from 'react';

const ReviewRow = ({review, handleDelete}) => {
    const {_id, serviceName, reviewer, message} = review;
    return (
        <tr class="bg-white border border-grey-500 md:border-none block md:table-row">
            <td class="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span class="inline-block w-1/3 md:hidden font-bold">Services</span>{serviceName}</td>
            <td class="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span class="inline-block w-1/3 md:hidden font-bold">User Name</span>{reviewer}</td>
            <td class="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span class="inline-block w-1/3 md:hidden font-bold">Review</span>{message}</td>
            <td class="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                <span class="inline-block w-1/3 md:hidden font-bold">Actions</span>
                <button class="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-1 px-2 border-blue-500 rounded mr-2">Edit</button>
                <button onClick={ () => handleDelete(_id) } class="bg-red-500 hover:bg-red-600 text-white font-semibold py-1 px-2 border-red-500 rounded">Delete</button>
            </td>
        </tr>
    );
};

export default ReviewRow;
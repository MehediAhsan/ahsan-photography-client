import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/AuthProvider';
import ReviewRow from './ReviewRow';
import Swal from 'sweetalert2';

const MyReviews = () => {
    const {user} = useContext(AuthContext);
    const [reviews, setReviews] = useState([]);

    useEffect( () => {
        fetch(`http://localhost:5000/reviews?email=${user?.email}`)
        .then(res => res.json())
        .then(data => setReviews(data))
    }, [user?.email])

    const handleDelete = id => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/reviews/${id}`, {
                    method: 'DELETE',
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your review has been deleted.',
                                'success'
                            );
                            const remaining = reviews.filter(rvw => rvw._id !== id);
                            setReviews(remaining);
                        }
                    });
            }
        });
    }

    return (
        <div className='container mx-auto'>
            {
                reviews.length !== 0 ?
                <>
                <h1 className='text-3xl font-semibold text-center my-10'>You have {reviews.length} reviews</h1>
                <table class="min-w-full border-collapse block md:table">
                    <thead class="block md:table-header-group">
                        <tr class="border border-grey-500 md:border-none block md:table-row absolute -top-full md:top-auto -left-full md:left-auto  md:relative ">
                            <th class="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">Service Name</th>
                            <th class="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">User Name</th>
                            <th class="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">Review</th>
                            <th class="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">Actions</th>
                        </tr>
                    </thead>
                    <tbody class="block md:table-row-group">
                        {
                            reviews.map(review => <ReviewRow
                            key={review._id} 
                            review={review}
                            handleDelete={handleDelete}
                            ></ReviewRow>)
                        }		
                    </tbody>
                </table>
                </> 
                :
                <div>
                    <h1 className='text-3xl font-semibold text-center my-20'><h1 className='text-3xl font-semibold text-center my-10'>No reviews were added</h1></h1>
                </div>
            }
        </div>
    );
};

export default MyReviews;
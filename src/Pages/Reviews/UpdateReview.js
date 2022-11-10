import React from 'react';
import Swal from 'sweetalert2';
import { useLoaderData, useNavigate } from 'react-router-dom';
import useTitle from '../../hooks/useTitle';

const UpdateReview = () => {
    const storedReview = useLoaderData();
    const navigate = useNavigate();
    useTitle('Update Review');
    
    const handleUpdateReview = event => {
        event.preventDefault();
        const form = event.target;
        const message = form.message.value;

        const review = {
            message
        }

        fetch(`https://ahsan-photography-server.vercel.app/reviews/${storedReview._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(review)
        })
        .then( res => res.json())
        .then( data => {
            if(data.modifiedCount > 0){
                Swal.fire({
                    icon: 'success',
                    title: 'Your review has been updated',
                    showConfirmButton: false,
                    timer: 2000
                  })
                navigate('/reviews');
            }
        })
        .catch( error => console.error(error))

    }

    return (
        <div className='my-20'>
           <div className="p-6 dark:text-gray-100">
                <form onSubmit={handleUpdateReview} noValidate="" className="container w-full max-w-lg p-8 mx-auto space-y-6 rounded-md shadow ng-untouched ng-pristine ng-valid text-gray-700 border-2 border-orange-200">
                    <h2 className="w-full text-2xl font-semibold leading-tight">Update your review</h2>
                    <div>
                        <label htmlFor="message" className="block mb-1 ml-1">Review</label>
                        <textarea id="message" type="text" name='message' defaultValue={storedReview.message} placeholder="Review..." rows="3" className="block w-full p-4 rounded autoexpand focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-rose-400 border-2 border-gray-400"></textarea>
                    </div>
                    <div>
                        <button type="submit" className="w-full px-4 py-2 font-semibold focus:outline-none transition duration-200 rounded shadow-md ocus:shadow-outline tracking-wide dark:bg-rose-400 hover:bg-rose-500 text-white">Add Review</button>
                    </div>
                </form>
            </div>  
        </div>
    );
};

export default UpdateReview;
import React, { useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
import ReviewCard from './ReviewCard';

const Reviews = ({service}) => {
    const {user} = useContext(AuthContext);
    const {_id, name} = service;
    const [reviews, setReviews] = useState([]);

    const handleAddReview = event => {
        event.preventDefault();
        const form = event.target;
        const userName = user?.displayName;
        const email = user?.email || 'unregistered';
        const image = user?.photoURL;
        const message = form.message.value;

        const review = {
            service: _id,
            serviceName: name,
            reviewer: userName,
            email,
            image,
            message
        }

        fetch('http://localhost:5000/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(review)
        })
        .then( res => res.json())
        .then( data => {
            if(data.acknowledged){
                toast.success('Review added successfully');
                form.reset();
            }
        })
        .catch( error => console.error(error))

    }

    useEffect( () => {
        fetch(`http://localhost:5000/reviews/${_id}`)
        .then(res => res.json())
        .then(data => setReviews(data))
    }, [_id, reviews])

    return (
        <div className='border border-orange-200 lg:w-9/12 mx-auto shadow-lg p-6 mb-10'>
            
            <div className='flex flex-col gap-6'>
                {
                    reviews.map(review => <ReviewCard key={review._id} review={review}></ReviewCard>)
                }
            </div>

            {
                user?.email ?
                <div className="p-6 dark:text-gray-100">
                    <form onSubmit={handleAddReview} noValidate="" className="container w-full max-w-lg p-8 mx-auto space-y-6 rounded-md shadow ng-untouched ng-pristine ng-valid text-gray-700 border-2 border-orange-200">
                        <h2 className="w-full text-2xl font-semibold leading-tight">Add your review "{name}"</h2>
                        <div>
                            <label htmlFor="message" className="block mb-1 ml-1">Review</label>
                            <textarea id="message" type="text" name='message' placeholder="Review..." rows="3" className="block w-full p-4 rounded autoexpand focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-rose-400 border-2 border-gray-400"></textarea>
                        </div>
                        <div>
                            <button type="submit" className="w-full px-4 py-2 font-semibold focus:outline-none transition duration-200 rounded shadow-md ocus:shadow-outline tracking-wide dark:bg-rose-400 hover:bg-rose-500 text-white">Add Review</button>
                        </div>
                    </form>
                </div> 
                :
                <div className='text-center underline text-blue-500 font-semibold text-xl mt-10'>
                    <Link to='/login'>
                        Please login to add a review
                    </Link>
                </div>
            }
            
        </div>
    );
};

export default Reviews;
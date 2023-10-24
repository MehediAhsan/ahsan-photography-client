import React, { useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { Link, useLocation } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
import Loader from '../Loader/Loader';
import ReviewCard from './ReviewCard';

const Reviews = ({service}) => {
    const {user} = useContext(AuthContext);
    const {_id, name} = service;
    const [reviews, setReviews] = useState([]);
    const location = useLocation();
    const [loader, setLoader] = useState(true);

    const handleAddReview = event => {
        event.preventDefault();
        const form = event.target;
        const userName = user?.displayName;
        const email = user?.email || 'unregistered';
        const image = user?.photoURL;
        const message = form.message.value;
        const rate = form.rate.value;

        const review = {
            service: _id,
            serviceName: name,
            reviewer: userName,
            email,
            image,
            rate,
            message
        }

        fetch('https://ahsan-photography-server.vercel.app/reviews', {
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
        fetch(`https://ahsan-photography-server.vercel.app/reviews/${_id}`)
        .then(res => res.json())
        .then(data => {
            setReviews(data)
            setLoader(false)
        })
    }, [_id, reviews])

    return (
        <div className='border border-orange-200 md:w-8/12 mx-auto shadow-lg p-6 mb-10'>
            {
                loader && <Loader></Loader>
            }
            <h1 className='text-2xl md:text-3xl font-semibold text-center my-5 text-gray-700'>
                {
                    reviews.length > 0 ?
                    <span>Service Reviews</span>
                    :
                    <span>No Reviews</span>
                }
            </h1>
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
                            <textarea id="message" type="text" name='message' placeholder="Review..." rows="3" className="block w-full p-4 rounded autoexpand focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-rose-400 border-2 border-gray-400" required></textarea>
                        </div>
                        <div>
                            <label htmlFor="rate">Rating (between 1 and 5):</label>
                            <input className='border-2 ml-2 border-gray-400 rounded' placeholder='Rating...' type="number" id="rate" name="rate" min="1" max="5" required/>
                        </div>
                        <div>
                            <button type="submit" className="w-full px-4 py-2 font-semibold focus:outline-none transition duration-200 rounded shadow-md ocus:shadow-outline tracking-wide dark:bg-rose-400 hover:bg-rose-500 text-white">Add Review</button>
                        </div>
                    </form>
                </div> 
                :
                <div className='text-center underline text-blue-500 font-semibold text-xl mt-10'>
                    <Link to='/login' state={{from:location}} replace>
                        <span className='text-black no-underline mr-5'>Do you want to add a review?</span>
                        Please login to add a review
                    </Link>
                </div>
            }
            
        </div>
    );
};

export default Reviews;
import React from 'react';

const ReviewCard = ({review}) => {
    const {reviewer, image, message} = review;
    return (
        <div>
        <div className="flex flex-col w-full p-3 mx-auto divide-y rounded-md divide-rose-100  dark:text-gray-700">
            <div className="flex justify-between p-4">
                <div className="flex space-x-4 items-center">
                    <div>
                        <img src={image} alt="" className="object-cover w-12 h-12 rounded-full dark:bg-gray-500" />
                    </div>
                    <div>
                        <h4 className="font-bold">{reviewer}</h4>
                    </div>
                </div>
            </div>
            <div className="p-4 space-y-2 text-base pl-16 dark:text-gray-600">
                <p>{message}</p>
            </div>
        </div>
        <div className='bg-gray-300 h-[1px]'></div>
        </div>
    );
};

export default ReviewCard;
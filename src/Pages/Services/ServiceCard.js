import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

const ServiceCard = ({service}) => {
    const {name, img, description, price, rating} = service;
    return (
        <div className="p-6 bg-white rounded-xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all transform duration-500">
            <PhotoProvider>
                <PhotoView src={img}>
                    <img className="object-cover rounded-t-md" src={img} alt="" />
                </PhotoView>
            </PhotoProvider>
            <div className="mt-4">
            <h1 className="text-2xl font-bold text-gray-700">{name}</h1>
            <p className="text-sm mt-2 text-gray-700">
                {
                    description?.length > 100 ?
                    description.slice(0 , 100) + '...':
                    description
                }
            </p>
            <div className="mt-4 mb-2 flex justify-between pl-4 pr-2">
                <button className="block text-xl font-semibold text-gray-700 cursor-auto">${price}</button>
                <button className="text-base block font-semibold py-1 px-3 text-green-100 hover:text-white bg-gray-600 rounded-lg shadow hover:shadow-md transition duration-300">View Details</button>
            </div>
            </div>
        </div>
    );
};

export default ServiceCard;
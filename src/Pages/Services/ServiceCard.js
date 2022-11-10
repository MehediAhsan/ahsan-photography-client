import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import { Link } from 'react-router-dom';
import { FaArrowRight } from "react-icons/fa";

const ServiceCard = ({service}) => {
    const {_id, name, img, description, price} = service;
    return (
        <div className="p-6 bg-white rounded-xl shadow-xl hover:shadow-2xl transition-all transform duration-500">
            <PhotoProvider>
                <PhotoView src={img}>
                    <img className="w-full h-52 rounded-t-md" src={img} alt="" />
                </PhotoView>
            </PhotoProvider>
            <div className="mt-4">
            <h1 className="text-2xl font-semibold text-gray-700">{name}</h1>
            <p className="text-sm mt-2 text-gray-700">
                {
                    description?.length > 100 ?
                    description.slice(0 , 100) + '...':
                    description
                }
            </p>
            <div className="mt-4 mb-2 flex justify-between pl-4 pr-2">
                <button className="block text-xl font-semibold text-gray-700 cursor-auto">${price}</button>
                <Link to={`/services/${_id}`}>
                    <button className="flex justify-center items-center text-base font-semibold py-1 px-3 text-orange-500 border-2 rounded-lg shadow hover:shadow-md transition duration-300">
                        <span>View Details</span>
                        <FaArrowRight className='h-4 w-4 text-orange-500 ml-1'></FaArrowRight>
                    </button>
                </Link>
            </div>
            </div>
        </div>
    );
};

export default ServiceCard;
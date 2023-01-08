import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import { Link } from 'react-router-dom';
import { FaArrowRight } from "react-icons/fa";

const ServiceCard = ({service}) => {
    const {_id, name, img, description, price} = service;
    return (
        <div className="p-4 bg-white rounded-xl shadow-xl hover:shadow-2xl transition-all transform duration-500">
            <PhotoProvider>
                <PhotoView src={img}>
                    <img className="w-full h-60 rounded-t-md" src={img} alt="" />
                </PhotoView>
            </PhotoProvider>
            <div className="mt-4">
            <h1 className="text-xl md:text-xl font-semibold text-gray-700">{name}</h1>
            <p className="text-sm mt-2 text-gray-700">
                {
                    description?.length > 100 ?
                    description.slice(0 , 100) + '...':
                    description
                }
            </p>
            <div className="mt-4 mb-2 flex justify-between ">
                <button className="block text-lg font-semibold text-gray-700 cursor-auto">${price}</button>
                <Link to={`/services/${_id}`}>
                    <button className="flex justify-center items-center text-base font-semibold py-1 px-3 text-orange-500 border rounded-lg shadow hover:shadow-md transition duration-300">
                        <span>Details</span>
                        <FaArrowRight className='h-4 w-4 text-orange-500 ml-1'></FaArrowRight>
                    </button>
                </Link>
            </div>
            </div>
        </div>
    );
};

export default ServiceCard;
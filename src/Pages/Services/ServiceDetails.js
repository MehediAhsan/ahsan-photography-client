import React from 'react';
import { useLoaderData } from 'react-router-dom';
import useTitle from '../../hooks/useTitle';
import Reviews from '../Reviews/Reviews';
import { FaStar } from "react-icons/fa";

const ServiceDetails = () => {
    const service = useLoaderData();
    const {name, img, description, rating, price} = service;
    useTitle(`Service/${name}`);

    return (
        <div className='container mx-auto'>
            <div className='p-10 my-10 shadow-lg flex flex-col md:flex-row gap-6 border-2 border-orange-200 mx-auto'>
                <img src={img} alt="" className='w-1/2' />
                <div className='flex flex-col gap-5'>
                <h1 className='text-3xl md:text-4xl font-semibold text-center text-gray-700'>{name}</h1>
                <p className='text-gray-700'>{description}</p>
                <div className='flex justify-between'>
                    <div className='flex justify-center items-center gap-2'>
                        <FaStar className='text-xl text-orange-500'></FaStar>
                        <span className='text-xl'>{rating}</span>
                    </div>
                    <div className='text-gray-700 text-xl'>
                        ${price}
                    </div>
                </div>
                </div>
            </div>
            <Reviews service={service}></Reviews>
        </div>
    );
};

export default ServiceDetails;
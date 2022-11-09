import React from 'react';
import { useLoaderData } from 'react-router-dom';
import useTitle from '../../hooks/useTitle';
import Reviews from '../Reviews/Reviews';

const ServiceDetails = () => {
    const service = useLoaderData();
    const {name, img, description} = service;
    useTitle(`Service/${name}`);

    return (
        <div className='container mx-auto'>
            <div className='p-6 my-10 shadow-lg flex flex-col gap-6 border-2 border-orange-200 lg:w-9/12 mx-auto'>
                <h1 className='text-4xl font-semibold text-center text-gray-700'>{name}</h1>
                <img src={img} alt="" />
                <p className='text-gray-700'>{description}</p>
            </div>
            <Reviews service={service}></Reviews>
        </div>
    );
};

export default ServiceDetails;
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useTitle from '../../hooks/useTitle';
import ServiceCard from '../Services/ServiceCard';
import Banner from './Banner/Banner';

const Home = () => {
    const [services, setServices] = useState([]);
    useTitle('Home');
    
    useEffect( () => {
        fetch('http://localhost:5000/services?size=3')
        .then( res => res.json())
        .then( data => setServices(data))
    }, [])

    return (
        <div className='container mx-auto'>
            <Banner></Banner>
            <div className='mb-20'>
                <div className='w-7/12 mx-auto flex flex-col gap-5 text-center'>
                    <p className='text-2xl font-bold text-orange-600'>Service</p>
                    <h1 className='text-4xl text-gray-700 font-bold'>My Services</h1>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-10 px-10'>
                    {
                        services.map( service => <ServiceCard key={service._id} service={service}></ServiceCard>)
                    }
                </div>
                <div className='flex justify-center'>
                    <Link to='/services'>
                        <button className='h-10 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-orange-500 hover:bg-orange-600 focus:shadow-outline focus:outline-none mr-5'>See All</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Home;
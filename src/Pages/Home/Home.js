import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useTitle from '../../hooks/useTitle';
import ServiceCard from '../Services/ServiceCard';
import Banner from './Banner/Banner';
import Gallery from './Gallery/Gallery';
import Testimonial from './Testimonial/Testimonial';
import { FaArrowRight } from "react-icons/fa";
import Loader from '../Loader/Loader';

const Home = () => {
    const [services, setServices] = useState([]);
    const [loader, setLoader] = useState(true);
    useTitle('Home');
    
    useEffect( () => {
        fetch('https://ahsan-photography-server.vercel.app/services?size=3')
        .then( res => res.json())
        .then( data => {
            setServices(data)
            setLoader(false)
        })
    }, [])

    return (
        <div className='container mx-auto'>
            <Banner></Banner>
            <div className='mb-20 mt-10'>
                <div className='w-7/12 mx-auto flex flex-col gap-5 text-center'>
                    <h1 className='text-2xl md:text-4xl text-gray-700 font-bold'>My <span className='text-orange-500'>Services</span></h1>
                </div>
                {
                    loader && <Loader></Loader>
                }
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-10 px-6 md:px-10'>
                    {
                        services.map( service => <ServiceCard key={service._id} service={service}></ServiceCard>)
                    }
                </div>
                <div className='flex justify-center'>
                    <Link to='/services'>
                        <button className='flex items-center justify-center h-10 px-3 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-orange-500 hover:bg-orange-600 focus:shadow-outline focus:outline-none mr-5'>
                        <span className="mr-1">See All</span>
                        <FaArrowRight className='h-4 w-4 text-white'></FaArrowRight>
                        </button>
                    </Link>
                </div>
            </div>
            <Gallery></Gallery>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;
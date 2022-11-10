import React, { useEffect, useState } from 'react';
import useTitle from '../../hooks/useTitle';
import Loader from '../Loader/Loader';
import ServiceCard from './ServiceCard';

const Services = () => {
    const [services, setServices] = useState([]);
    const [loader, setLoader] = useState(true);
    useTitle('Services');
    
    useEffect( () => {
        fetch('https://ahsan-photography-server.vercel.app/services')
        .then( res => res.json())
        .then( data => {
            setServices(data)
            setLoader(false)
        })
    }, [])

    return (
        <div className='my-10 container mx-auto'>  
            <div>
                <h1 className='text-2xl md:text-4xl font-bold text-center text-gray-700'>All <span className='text-orange-500'>Services</span></h1>
            </div>
            {
                loader && <Loader></Loader>
            }
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-10 px-6 md:px-10'>
                {
                    services.map( service => <ServiceCard key={service._id} service={service}></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Services;
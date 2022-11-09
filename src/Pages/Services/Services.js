import React, { useEffect, useState } from 'react';
import useTitle from '../../hooks/useTitle';
import ServiceCard from './ServiceCard';

const Services = () => {
    const [services, setServices] = useState([]);
    useTitle('Services');
    
    useEffect( () => {
        fetch('http://localhost:5000/services')
        .then( res => res.json())
        .then( data => setServices(data))
    }, [])

    return (
        <div className='my-10 container mx-auto'>
            <div>
                <h1 className='text-4xl font-bold text-center text-gray-700'>All Services</h1>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-10 px-10'>
                {
                    services.map( service => <ServiceCard key={service._id} service={service}></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Services;
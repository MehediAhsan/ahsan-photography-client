import React from 'react';
import './Banner.css'

const Banner = () => {
    return (
        <div className="relative w-full my-10">
            <div className='carousel-img'>
                <img src="https://images.unsplash.com/photo-1464855499786-2839659d9e5d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80" alt="" className="w-full rounded-xl" />
            </div>
            <div className="absolute flex justify-end transform -translate-y-1/2 left-20 top-1/2 flex-col gap-8">
                <h1 className='text-6xl font-bold text-white'>
                    Ahsan <br />
                    Photgraphy <br />
                    Services
                </h1>
                <p className='text-xl text-white w-7/12'>
                I specialize in wedding, sports, portrait, event photography.
                </p>
                <div>
                    <button className='h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-orange-500 hover:bg-orange-600 focus:shadow-outline focus:outline-none mr-5'>Explore More</button>
                </div>
            </div>
        </div> 
    );
};

export default Banner;
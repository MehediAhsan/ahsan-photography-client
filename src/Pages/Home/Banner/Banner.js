import React from 'react';
import './Banner.css';
import { FaArrowRight } from "react-icons/fa";

const Banner = () => {
    return (
        <div className="relative w-full my-10">
            <div className='px-5 md:px-0'>
                <img src="https://images.unsplash.com/photo-1464855499786-2839659d9e5d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80" alt="" className="w-full rounded-xl" />
            </div>
            <div className="absolute flex justify-end transform -translate-y-1/2 left-20 top-1/2 flex-col gap-2 md:gap-6 lg:gap-8">
                <h1 className='text-2xl md:text-4xl lg:text-6xl font-bold text-white'>
                    Ahsan <br className='hidden md:block' />
                    Photgraphy <br />
                    Services
                </h1>
                <p className='text-xs md:text-lg lg:text-xl text-white w-7/12'>
                I specialize in wedding, sports, portrait, event photography.
                </p>
                <div className='hidden sm:block'>
                    <button className='h-7 md:h-8 lg:h-10 px-2 md:px-3 lg:px-4 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-orange-500 hover:bg-orange-600 focus:shadow-outline focus:outline-none mr-5 flex justify-center items-center'>
                        <span>Explore More</span>
                        <FaArrowRight className='h-4 w-4 text-white ml-1'></FaArrowRight>
                    </button>      
                </div>
            </div>
        </div> 
    );
};

export default Banner;
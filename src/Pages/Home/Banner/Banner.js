import React from 'react';
import './Banner.css';
import { FaArrowRight } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="flex flex-col items-center justify-between lg:flex-row">
        <div className="mb-10 lg:max-w-lg lg:pr-5 lg:mb-0">
          <div className="max-w-xl mb-6">
            <h2 className="mb-6 font-sans text-3xl font-bold text-gray-700 sm:text-4xl">
                Welcome, <br /> Ahsan Photography <br/>Services
            </h2>
            <p className="text-base text-gray-700 md:text-lg">
                I specialize in wedding, sports, portrait, event photography.
            </p>
          </div>
          <div className="">
            <Link
              to="/services"
              className="inline-flex items-center justify-center h-11 px-3 mb-3 font-medium tracking-wide text-white transition duration-200 rounded shadow-md md:w-auto md:mr-4 md:mb-0 bg-orange-500 hover:bg-orange-600 focus:shadow-outline focus:outline-none"
            >
              <span className="mr-1">Explore More</span>
              <FaArrowRight className='h-4 w-4 text-white'></FaArrowRight>
            </Link>
          </div>
        </div>
        <div className="relative lg:w-1/2">
          <img
            className="object-cover w-full h-56 rounded shadow-lg sm:h-96"
            src="https://images.unsplash.com/photo-1534455700361-eca9c3dbc981?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            alt=""
          />
          <Link
            to="/"
            aria-label="Play Video"
            className="absolute inset-0 flex items-center justify-center w-full h-full transition-colors duration-300 bg-gray-900 bg-opacity-50 group"
          >
            <div className="flex items-center justify-center w-16 h-16 transition duration-300 transform rounded-full shadow-2xl group-hover:scale-110">
              
            </div>
          </Link>
        </div>
      </div>
    </div>
    );
};

export default Banner;
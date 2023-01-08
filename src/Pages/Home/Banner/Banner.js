import React from 'react';
import './Banner.css';
import { FaArrowRight } from "react-icons/fa";
import { Link } from 'react-router-dom';
import bg from '../../../assets/bg.jpg';

const Banner = () => {
    return (
        <div className="flex items-center h-screen w-full bg-cover bg-no-repeat px-4 mx-auto md:px-10 lg:px-2" style={{backgroundImage: `url(${bg})`, width:'100%'}}>
      <div className="flex flex-col items-center justify-between lg:flex-row">
        <div className=" mb-10 lg:max-w-lg ml-6 md:ml-16 lg:mb-0">
          <div className="max-w-xl mb-6">
            <h2 className="mb-6 font-sans text-2xl font-bold text-white sm:text-3xl">
                Welcome, <br /> Ahsan Photography <br/>Services
            </h2>
            <p className="text-base text-white md:text-base max-w-sm">
                I specialize in wedding, sports, portrait, event photography.
            </p>
          </div>
          <div className="">
            <Link
              to="/services"
              className="inline-flex items-center justify-center h-9 px-2 mb-3 font-medium text-white transition duration-200 rounded shadow-md md:w-auto md:mr-4 md:mb-0 bg-orange-500 hover:bg-orange-600 focus:shadow-outline focus:outline-none"
            >
              <span className="mr-1">Explore</span>
              <FaArrowRight className='h-4 w-3 text-white'></FaArrowRight>
            </Link>
          </div>
        </div>
      </div>
    </div>
    );
};

export default Banner;
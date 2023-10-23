import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import './Banner.css';
import { Link } from 'react-router-dom';

const Banner = () => {
  const slideshowData = [
    {
      "imageSrc": "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80",
      "title": "Capture Unforgettable Moments",
      "description": "Let us freeze your precious moments in time with our professional photography services. Whether it's a wedding, a special event, or a portrait session, we've got you covered.",
      "buttonText": "Learn More"
    },
    {
      "imageSrc": "https://images.unsplash.com/photo-1473991138396-3a0af1248d8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      "title": "Explore Our Portrait Photography",
      "description": "Discover the artistry and creativity in our portrait photography work. Our photographers specialize in capturing your unique personality.",
      "buttonText": "Explore"
    },
    {
      "imageSrc": "https://images.unsplash.com/photo-1510382684496-dda106e3f86a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      "title": "Book Your Wedding Photography",
      "description": "Ready to tie the knot? We'll be there to capture every magical moment of your wedding day. Contact us now to reserve your wedding photography session!",
      "buttonText": "Get Started"
    }
  ];

  return (
    <Carousel
      showArrows={false}
      showThumbs={true}
      autoPlay={true}
      infiniteLoop={true}
      interval={5000}
      stopOnHover={false}
      transitionTime={1000}
      className="w-full md:h-screen"
    >
      {slideshowData.map((slide, index) => (
        <div className="relative md:w-12/12" key={index}>
          <div className="bg-black absolute inset-0 opacity-70"></div> {/* Black shadow */}
          <img src={slide.imageSrc} alt={`Slide ${index + 1}`} className="w-full h-auto md:h-full object-cover" loading="lazy" />
          <div className="absolute inset-0 flex items-center justify-center text-white bg-opacity-80">
            <div className="text-center mx-4">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-4">{slide.title}</h1>
              <p className="text-lg md:text-xl lg:text-2xl mb-6 md:w-8/12 md:mx-auto hidden md:block">{slide.description}</p>
              <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-2 rounded-full transition duration-300 ease-in-out">
                <Link to='/services'>
                  {slide.buttonText}
                </Link>
              </button>
            </div>
          </div>
        </div>
      ))}
    </Carousel>
  );
};

export default Banner;

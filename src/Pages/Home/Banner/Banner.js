import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import './Banner.css';

const Banner = () => {
  const slideshowData = [
    {
      "imageSrc": "https://source.unsplash.com/800x600/?photography",
      "title": "Capture Unforgettable Moments",
      "description": "Let us freeze your precious moments in time with our professional photography services. Whether it's a wedding, a special event, or a portrait session, we've got you covered.",
      "buttonText": "Learn More"
    },
    {
      "imageSrc": "https://source.unsplash.com/800x600/?portrait",
      "title": "Explore Our Portrait Photography",
      "description": "Discover the artistry and creativity in our portrait photography work. Our photographers specialize in capturing your unique personality.",
      "buttonText": "Explore"
    },
    {
      "imageSrc": "https://source.unsplash.com/800x600/?wedding",
      "title": "Book Your Wedding Photography",
      "description": "Ready to tie the knot? We'll be there to capture every magical moment of your wedding day. Contact us now to reserve your wedding photography session!",
      "buttonText": "Get Started"
    }
  ];

  return (
    <Carousel
      showArrows={false}
      showThumbs={false}
      autoPlay={true}
      infiniteLoop={true}
      interval={5000}
      stopOnHover={false}
      transitionTime={1000}
      className="w-full md:h-screen"
    >
      {slideshowData.map((slide, index) => (
        <div className="relative md:w-10/12" key={index}>
          <div className="bg-black absolute inset-0 opacity-80"></div> {/* Black shadow */}
          <img src={slide.imageSrc} alt={`Slide ${index + 1}`} className="w-full h-auto md:h-full object-cover" loading="lazy" />
          <div className="absolute inset-0 flex items-center justify-center text-white bg-opacity-80">
            <div className="text-center mx-4">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-4">{slide.title}</h1>
              <p className="text-lg md:text-xl lg:text-2xl mb-6 md:w-8/12 md:mx-auto">{slide.description}</p>
              <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-2 rounded-full transition duration-300 ease-in-out">
                {slide.buttonText}
              </button>
            </div>
          </div>
        </div>
      ))}
    </Carousel>
  );
};

export default Banner;

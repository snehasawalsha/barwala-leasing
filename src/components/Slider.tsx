"use client";
import React, { useEffect } from 'react';
import SlickSlider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { carouselImages } from '../data'; 
import Image from 'next/image';

const Slider: React.FC = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const fadeInStyle = {
    animation: 'fade-in 4s ease-in forwards',
  };

  useEffect(() => {
    const fadeInKeyframes = `
      @keyframes fade-in {
        0% { opacity: 0; }
        100% { opacity: 1; }
      }
    `;

    const styleSheet = document.styleSheets[0];
    if (styleSheet) {
      styleSheet.insertRule(fadeInKeyframes, styleSheet.cssRules.length);
    }
  }, []);

  return (
    <div className="w-full slick-carousel">
      <SlickSlider {...sliderSettings}>
        {carouselImages?.map((image) => (
          <div key={image.id} className="slick-slide relative">
            <div className="md:h-80 lg:h-[500px] w-full">
              <Image
                src={image.src}
                alt={`Slide ${image.id}`}
                layout="fill" 
                objectFit="cover" 
                className="transition-transform duration-500 ease-in-out transform hover:scale-105"
              />
            </div>
            <div className='absolute top-0 left-0 h-full flex items-center w-full bg-black bg-opacity-50'>
              <h1 style={fadeInStyle} className='text-white text-xl md:text-2xl lg:text-3xl ml-4 md:ml-16 font-lalezar'>
                Brutal Simplicity of Thought. <br />
                Borrow up to
                <span className='text-[#FF5733]'> 200000</span>
              </h1>
            </div>
          </div>
        ))}
      </SlickSlider>
    </div>
  );
};

export default Slider;
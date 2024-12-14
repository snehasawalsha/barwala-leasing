import React from 'react';
import { data } from '../../data';
import Image from 'next/image';

interface DataItem {
  imageUrl: string;
  title: string;
  description: string;
}

const WhatWeDo: React.FC = () => {
  return (
    <div className="flex flex-col items-center pt-16 bg-gray-50">
      <h1 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-custom transition-all duration-500 ease-in-out">
        What We Do?
      </h1>
      <div className="flex items-center mb-8">
        <div className="w-2 h-2 bg-black rounded-full" aria-hidden="true"></div>
        <div className="w-64 h-0.5 bg-black" aria-hidden="true"></div>
        <div className="w-2 h-2 border-2 border-black bg-black transform rotate-45" aria-hidden="true"></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full max-w-[800px] h-auto mt-8">
        {data.map((item: DataItem, index: number) => (
          <div key={index} className="flex flex-col items-center relative">
            <div className="bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:-translate-y-2 hover:bg-[#FFB07A] hover:shadow-2xl duration-300 ease-in-out flex items-center">
              <Image
                src={item.imageUrl}
                alt={`${item.description} illustration`}
                width={150}
                height={150}
                className="mr-4 rounded-full border border-gray-300 transition-transform duration-300 ease-in-out"
              />
              <div>
                <p className="text-2xl font-bold text-gray-800 transition-colors duration-300 ease-in-out">{item.title}</p>
                <p className="font-serif text-lg font-normal text-gray-600 underline decoration-transparent transition-colors duration-300 ease-in-out">
                  {item.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhatWeDo;
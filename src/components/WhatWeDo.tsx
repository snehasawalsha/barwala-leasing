import React from 'react';
import { data } from '../data';
import Image from 'next/image';

const WhatWeDo: React.FC = () => {
  return (
    <div className="flex flex-col items-center pt-16">
      <h1 className="text-4xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-custom">
        What we do?
      </h1>
      <div className="flex items-center ">
                        <div className="w-2 h-2 bg-black rounded-full"></div>
                        <div className="w-64 h-0.5 bg-black"></div>
                        <div className="w-2 h-2 border-2 border-black bg-black transform rotate-45"></div>
                    </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-20 w-full max-w-[700px] h-auto mt-8">
        {data.map((item, index) => (
          <div key={index} className="flex flex-col items-center relative">
            <div className="bg-zinc-300 p-6 rounded-lg shadow-md flex items-center">
              <Image
                src={item.imageUrl}
                alt={`${item.description} illustration`}
                width={150}
                height={150}
                className="mr-4"
              />
              <div>
                <p className="text-2xl font-bold">{item.title}</p>
                <p className="font-serif text-[20px] font-normal text-left underline decoration-transparent">
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
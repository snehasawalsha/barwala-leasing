import React from "react";
import { aboutData } from "../../data";
import Image from 'next/image';

interface AboutData {
  aboutheader: {
    content: string;
  };
  vision: {
    title: string;
    content: string;
    image: string;
  };
  mission: {
    title: string;
    content: string;
    image: string;
  };
}

const About: React.FC = () => {
  const data: AboutData = aboutData;

  return (
    <div className="container mx-auto md:flex-row p-4">
      <div className="md:w-1/2  p-4 mb-4 md:mb-0 flex flex-row gap-8 m-auto">
        <p className="text-left bg-gray-600 shadow-md p-6">{data.aboutheader.content}</p>
        <p className="text-right bg-gray-500 shadow-md p-6">{data.aboutheader.content}</p>
      </div>
      <div className="flex flex-col items-center pt-16">
        <h1 className="text-4xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-custom">{data.vision.title}</h1>
        <div className="flex items-center ">
          <div className="w-2 h-2 bg-black rounded-full"></div>
          <div className="w-64 h-0.5 bg-black"></div>
          <div className="w-2 h-2 border-2 border-black bg-black transform rotate-45"></div>
        </div>
        <div className="flex flex-col lg:flex-row items-center justify-between py-8">
        <div className="lg:w-1/2 mt-6 lg:mt-0">
          <Image
            src={data.vision.image}
            alt={data.vision.title}
            className="w-full max-w-sm mx-auto"
            width={500}
            height={500}
          />
        </div>
      </div>
        <p className="text-gray-600 mt-4">{data.vision.content}</p>
      </div>
      

      <div className="flex flex-col items-center pt-16">        
          <h2 className="text-4xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-custom">{data.mission.title}</h2>
          <div className="flex items-center ">
            <div className="w-2 h-2 bg-black rounded-full"></div>
            <div className="w-64 h-0.5 bg-black"></div>
            <div className="w-2 h-2 border-2 border-black bg-black transform rotate-45"></div>
          </div>
          <div className="lg:w-1/2 mt-6 lg:mt-0">
        <Image
          src={data.mission.image}
          alt={data.mission.title}
          className="w-full max-w-sm mx-auto"
          width={500}
            height={500}
        />
      </div>
        
        <p className="text-gray-600 mt-4">{data.mission.content}</p>
      </div>
      
    </div>
  );
};

export default About;

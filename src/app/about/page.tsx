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
    <div className="container mx-auto p-6 md:p-12">
      <div className="md:flex md:space-x-8 mb-12">
        <div className="md:w-1/2 p-4 mb-4 md:mb-0 flex flex-col gap-4">
          <p className="text-left text-black">{data.aboutheader.content}</p>
          <p className="text-right text-black">{data.aboutheader.content}</p>
        </div>
      </div>

      
      <div className="flex flex-row md:flex-row items-center justify-between pt-16">
        <div className="md:w-1/2 p-6">
          <div className="bg-white shadow-lg p-6 rounded-lg transition-transform transform hover:scale-105">
            <p className="text-black">{data.vision.content}</p>
          </div>
        </div>
        <div className="md:w-1/2 p-6">
          <div className="bg-white shadow-lg p-6 rounded-lg transition-transform transform hover:scale-105">
            <Image
              src={data.vision.image}
              alt={data.vision.title}
              className="w-full h-64 object-cover rounded-lg"
              width={0}
              height={0}
            />
          </div>
        </div>
      </div>

      
      <div className="flex flex-row md:flex-row items-center justify-between pt-16">
        <div className="md:w-1/2 p-6">
          <div className="bg-white shadow-lg p-6 rounded-lg transition-transform transform hover:scale-105">
            <p className="text-black">{data.mission.content}</p>
          </div>
        </div>
        <div className="md:w-1/2 p-6">
          <div className="bg-white shadow-lg p-6 rounded-lg transition-transform transform hover:scale-105">
            <Image
              src={data.mission.image}
              alt={data.mission.title}
              className="w-full h-64 object-cover rounded-lg"
              width={0}
              height={0}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
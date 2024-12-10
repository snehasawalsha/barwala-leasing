import React from 'react';
import Image from 'next/image';
import { loanData } from '../data';

interface Loan {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
}

const isValidUrl = (url: string) => {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
};

const WhyChooseUs: React.FC = () => {
  return (
    <div className="flex flex-col items-center pt-16">
      <h1 className="text-4xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-custom">
        Why Choose Us?
      </h1>
      <div className="flex items-center ">
                        <div className="w-2 h-2 bg-black rounded-full"></div>
                        <div className="w-64 h-0.5 bg-black"></div>
                        <div className="w-2 h-2 border-2 border-black bg-black transform rotate-45"></div>
                    </div>
      
      <div className="flex flex-wrap justify-center gap-16 mt-10">
        {loanData && loanData.length > 0 && loanData.map((loan: Loan) => (
          <div key={loan.id} className="bg-gray-300 shadow-lg rounded-3xl overflow-hidden w-60 ">
            <div className="p-6">
              <Image
                src={loan.imageUrl}
                alt={`${loan.title} Icon`}
                width={150}
                height={200}
                className="mx-auto mb-4"
              />
              </div>
              <div className ="bg-orange-400 text-white text-center py-4">
                <h2 className="font-lalezar mb-2 text-[30px] font-normal leading-[48.58px] text-centre">{loan.title}</h2>
                <p className='font-libre mx-5 mb-6'>{loan.description}</p>
              </div>
            
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyChooseUs;
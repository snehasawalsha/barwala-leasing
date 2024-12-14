"use client";

import React from 'react';
import Image from 'next/image';
import { product } from '../../data';

interface Product {
  id: number;
  imageUrl: string;
  alt: string;
  content: string;
  gradientFrom: string;
  gradientTo: string;
}

const OurProducts: React.FC = () => {
  return (
    <div className="container mx-auto px-4">
      <div className="flex flex-col items-center pt-16">
        <h1 className="text-4xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-custom">
          Our Products
        </h1>
        <div className="flex items-center mb-4">
          <div className="w-2 h-2 bg-black rounded-full"></div>
          <div className="w-64 h-0.5 bg-black"></div>
          <div className="w-2 h-2 border-2 border-black bg-black transform rotate-45"></div>
        </div>
      </div>
      <div className="flex flex-wrap items-center justify-center gap-8 mt-10 mb-16">
        {product.map((product: Product, index: number) => (
          <div
            key={product.id}
            className={`w-48 h-48 shadow-lg flex flex-col justify-center items-center transition-transform transform hover:scale-110 hover:shadow-xl animate-float rounded-3xl ${
              index % 2 === 0 ? 'animate-rollIn' : 'animate-rollInRight'
            }`}
            role="button"
            tabIndex={0}
            aria-label={`Product: ${product.content}`}
          >
            <Image
              src={product.imageUrl}
              alt={product.alt}
              className="w-16 h-16 mb-2 z-10"
              width={64}
              height={64}
              onError={(e) => {
                e.currentTarget.src = '/path/to/default-image.jpg';
              }}
            />
            <p className="text-black text-center text-xl font-medium z-10 transition-colors duration-300 hover:text-[#FF681E]">{product.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurProducts;
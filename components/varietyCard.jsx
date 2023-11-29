import React from 'react';
import Link from 'next/link';
const VarietyCard = ({ imageUrl, heading, price, description, productUrl }) => {
  return (
    
    <div className="relative flex flex-col text-gray-700 bg-white shadow-md lg:w-1/4 md:w-1/4 sm:w-1/2 w-full mb-8 lg:mb-0">
      <Link href={productUrl}>
      <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white h-96 rounded-xl bg-clip-border">
        <img
          src={imageUrl}
          className="object-cover w-full h-full"
          alt="Product"
        />
      </div>
      <div className="p-6">
        <div className="flex items-center justify-between mb-2">
          <p className="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">
            {heading}
          </p>
          <p className="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">
            {price}
          </p>
        </div>
        <p className="block font-sans text-sm antialiased font-normal leading-normal text-gray-700 opacity-75">
          {description}
        </p>
      </div>
    </Link>
    </div>
  );
};

export default VarietyCard;

// components/ImageWithLabel.jsx

import React from 'react';

const ImageWithLabel = ({ imageUrl, label }) => {
  return (
    <div className="flex justify-center items-center py-5">
      {/* Desktop View */}
      <div className="flex items-center">
        <img
          className="w-12 h-12 lg:w-20 lg:h-20 md:max-h-96 md:object-cover md:object-center rounded-full mr-4"
          src={imageUrl}
          alt="Image"
        />
        <h2 className="sm:text-4xl text-xl font-bold">{label}</h2>
      </div>
    </div>
  );
};

export default ImageWithLabel;

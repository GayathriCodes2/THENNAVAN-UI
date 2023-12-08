"use client"
import React, { useState, useEffect } from 'react';

// ProductCard component
const ProductCard = ({ imageUrl, heading, description, price, buyNowLink, weightOptions }) => {
  const [selectedWeight, setSelectedWeight] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    // Set selectedWeight to the first available option when weightOptions is not empty
    if (weightOptions && weightOptions.length > 0) {
      setSelectedWeight(weightOptions[0].value);
    }
  }, [weightOptions]);

  const handleWeightChange = (event) => {
    setSelectedWeight(event.target.value);
  };

  const handlePreBookClick = () => {
    const linkWithWeight = `${buyNowLink}%20${heading}%20weight%20${selectedWeight}`;
    console.log('Pre Book clicked for', heading, 'with weight', selectedWeight);
    window.location.href = linkWithWeight;
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    // Reset any other modal-related state if needed
  };

  return (
    <div className="flex border p-2">
      <div>
        <img
          src={imageUrl}
          alt={heading}
          height={44}
          width={44}
          className="lg:w-32 rounded-xl w-28 lg:h-32 h-32 object-cover cursor-pointer"
          onClick={openModal}
        />
        {isModalOpen && (
          <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-4 rounded-lg">
              <img src={imageUrl} alt={heading} className="max-w-full max-h-full" />
              <button className="mt-4 px-2 py-1 bg-gray-500 text-white rounded-md" onClick={closeModal}>
                Close
              </button>
            </div>
          </div>
        )}
      </div>
      <div className="flex-grow lg:mx-4 mx-1">
        <h4 className="lg:text-lg text-xs">{heading}</h4>
        <p className="text-gray-600 sm:text-sm text-xs ml-1">{description}</p>
        <label htmlFor="weight" className="mt-2 text-sm text-gray-500">Select Kg:</label>
        <select
          id="weight"
          name="weight"
          className="mt-1 p-2 w-auto sm:p-1 ml-2 border rounded-md"
          value={selectedWeight}
          onChange={handleWeightChange}
        >
          {weightOptions && weightOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
      <div className="flex flex-col items-end">
        <p className="sm:text-lg text-sm">Rs.{price[selectedWeight]}</p>
        <button
          className="w-full px-1 my-3 lg:px-2 py-2 bg-white border-green-500 text-green-500 rounded-md focus:outline-none border hover:bg-green-500 hover:text-white transition duration-300 ease-in-out text-sm sm:text-xs"
          onClick={handlePreBookClick}
        >
          Pre Book
        </button>
      </div>
    </div>
  );
};

export default ProductCard;

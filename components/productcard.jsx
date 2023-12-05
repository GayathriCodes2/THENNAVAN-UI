// components/ProductCard.js
"use client";
import { useState } from 'react';
import Link from 'next/link';

const ProductCard = ({ imageUrl, heading, description, price, buyNowLink }) => {
  // State to track selected weight
  const [selectedWeight, setSelectedWeight] = useState('1kg');

  // Handler function to update selected weight
  const handleWeightChange = (event) => {
    setSelectedWeight(event.target.value);
  };

  // Function to handle "Pre Book" button click
  const handlePreBookClick = () => {
    // Include the selectedWeight in the link
    const linkWithWeight = `${buyNowLink}%20weight%20${selectedWeight}`;
    // Perform any additional actions here
    console.log('Pre Book clicked for', heading, 'with weight', selectedWeight);
    // Redirect or open a new window with the updated link
    window.location.href = linkWithWeight;
  };

  return (
    <div className="flex border p-2">
      {/* Left side: Image */}
      <div>
      <img src={imageUrl} alt={heading} height={44} width={44} className="lg:w-64 w-28 lg:h-64 h-32 object-cover" />
      </div>

      {/* Middle part: Heading, Description, and Dropdown */}
      <div className="flex-grow lg:mx-4 mx-1">
        <h4 className="lg:text-xl text-xs font-semibold">{heading}</h4>
        <p className="text-gray-600 text-sm lg:text-xl">{description}</p>

        {/* Dropdown for weight options */}
        <label htmlFor="weight" className="block mt-2 text-sm text-gray-500">Select Kg:</label>
        <select
          id="weight"
          name="weight"
          className="mt-1 p-2 w-24 border rounded-md"
          value={selectedWeight}
          onChange={handleWeightChange}
        >
          <option value="1kg">1 kg</option>
          <option value="2kg">2 kg</option>
          <option value="4kg">4 kg</option>
        </select>
      </div>

      {/* Right side: Price and Buy Now button */}
      <div className="flex flex-col items-end">
        <p className="sm:text-lg text-sm font-semibold">Rs.{price}</p>
        <button
          className="w-full lg:px-1 my-3 px-2 py-1 bg-white border-green-500 text-green-500 rounded-md focus:outline-none border hover:bg-green-500 hover:text-white transition duration-300 ease-in-out sm:text-sm text-xs"
          onClick={handlePreBookClick}
        >
          Pre Book
        </button>
      </div>
    </div>
  );
};

export default ProductCard;

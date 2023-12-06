"use client"
import { useState } from 'react';

const ProductCard = ({ imageUrl, heading, description, price, buyNowLink, weightOptions }) => {
  const [selectedWeight, setSelectedWeight] = useState(weightOptions[0]?.value);

  const handleWeightChange = (event) => {
    setSelectedWeight(event.target.value);
  };

  const handlePreBookClick = () => {
    const linkWithWeight = `${buyNowLink}%20${heading}%20weight%20${selectedWeight}`;
    console.log('Pre Book clicked for', heading, 'with weight', selectedWeight);
    window.location.href = linkWithWeight;
  };

  return (
    <div className="flex border p-2">
      <div>
        <img src={imageUrl} alt={heading} height={44} width={44} className="lg:w-64 w-28 lg:h-64 h-32 object-cover" />
      </div>
      <div className="flex-grow lg:mx-4 mx-1">
        <h4 className="lg:text-xl text-xs font-semibold">{heading}</h4>
        <p className="text-gray-600 text-sm lg:text-xl">{description}</p>
        <label htmlFor="weight" className="block mt-2 text-sm text-gray-500">Select Kg:</label>
        <select
          id="weight"
          name="weight"
          className="mt-1 p-2 w-24 border rounded-md"
          value={selectedWeight}
          onChange={handleWeightChange}
        >
          {weightOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
      <div className="flex flex-col items-end">
        <p className="sm:text-lg text-sm font-semibold">Rs.{price[selectedWeight]}</p>
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

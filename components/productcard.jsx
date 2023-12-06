// components/ProductCard.js
"use client"
import { useState, useEffect } from 'react';

const ProductCard = ({ imageUrl, heading, description, buyNowLink, weightOptions, price }) => {
  const [selectedWeight, setSelectedWeight] = useState(weightOptions[0]?.value);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    // Fetch initial price based on the selected weight
    fetchPrice(selectedWeight);
  }, [selectedWeight]);

  const fetchPrice = (selectedWeight) => {
    // Add logic to fetch prices dynamically based on the selected weight
    // Replace the following line with your actual price fetching logic
    const newPrice = price[selectedWeight] || 0;
    setTotalPrice(newPrice);
  };

  const handleWeightChange = (event) => {
    const selectedWeight = event.target.value;
    setSelectedWeight(selectedWeight);
  };

  const handlePreBookClick = () => {
    const linkWithWeight = `${buyNowLink}%20${heading}%20with%20weight%20${selectedWeight}`;
    console.log('Pre Book clicked for', heading, 'with weight', selectedWeight);
    window.location.href = linkWithWeight;
  };

  return (
    <div className="flex border p-2">
      <div>
        <img src={imageUrl} alt={heading} height={44} width={44} className="lg:w-52 w-28 lg:h-52 h-32 object-cover" />
      </div>

      <div className="flex-grow lg:mx-4 mx-1">
        <h4 className="lg:text-xl text-xs font-semibold">{heading}</h4>
        <p className="text-gray-600 text-sm ml-2 lg:ml-4 my-1">{description}</p>

        <label htmlFor="weight" className="mt-2 text-sm text-gray-500">
          Select Kg:
        </label>
        <select
          id="weight"
          name="weight"
          className="mt-1 mx-2 p-1 w-16 text-sm border rounded-md"
          value={selectedWeight}
          onChange={(e) => {
            handleWeightChange(e);
            fetchPrice(e.target.value);
          }}
        >
          {weightOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>

        
      </div>

      <div className="flex flex-col items-end">
      <p className="text-lg font-semibold mt-2">Rs.{totalPrice.toFixed(2)}</p>
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

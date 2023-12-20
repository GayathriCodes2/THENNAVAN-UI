// Import necessary libraries
import React, { useState } from 'react';

// ProductCard component
const ProductCard = ({ productImage, productName, description, price1, price2, price3, quantity1, quantity2, quantity3, quantity1Unit, quantity2Unit, quantity3Unit, isAvailableOn, isOrganic }) => {
  const [selectedWeight, setSelectedWeight] = useState(`${quantity1}${quantity1Unit}`);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleWeightChange = (event) => {
    setSelectedWeight(event.target.value);
  };

  const handlePreBookClick = () => {
    const linkWithWeight = `https://wa.me/9677927081?text=I%20Need%20to%20buy%20${productName}%20(${selectedWeight})`;
    console.log('Pre Book clicked for', productName, 'with weight', selectedWeight);
    window.location.href = linkWithWeight;
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    // Reset any other modal-related state if needed
  };

  let selectedPrice;
  if (selectedWeight === `${quantity1}${quantity1Unit}`) {
    selectedPrice = price1;
  } else if (selectedWeight === `${quantity2}${quantity2Unit}`) {
    selectedPrice = price2;
  } else if (selectedWeight === `${quantity3}${quantity3Unit}`) {
    selectedPrice = price3;
  } else {
    selectedPrice = price1;
  }

  return (
    <div className="flex border p-2">
      <div className='relative'>
        
        <img
          src={productImage}
          alt={productName}
          height={44}
          width={44}
          className="lg:w-32 rounded-xl w-28 lg:h-32 h-32 object-cover cursor-pointer relative"
          onClick={openModal}
        />
        {isOrganic && (
          <span className="absolute top-1 text-xs right-1 bg-green-400 border border-green-500 text-white p-1 rounded-md z-10">
            Organic
          </span>
        )}
        {isModalOpen && (
          <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 transition-opacity duration-700 ">
            <div className="relative bg-white p-4 rounded-lg">
              <img src={productImage} alt={productName} className="max-w-full max-h-full" />
              <button
                className="absolute top-2 right-2 px-2 py-1 bg-red-500 hover:bg-red-600 transition duration-300 text-white rounded-md"
                onClick={closeModal}
              >
                X
              </button>
            </div>
          </div>
        )}
      </div>
      <div className="flex-grow lg:mx-4 mx-1">
        <h4 className="lg:text-lg text-xs">{productName}</h4>
        <p className="text-gray-600 sm:text-sm text-xs ml-1">{description}</p>
        {!isAvailableOn && (
          <p className='text-red-400 border border-red-400 my-1 bg-red-50 w-20 p-1 text-xs'>Out of Stock</p>
        )}
        <label htmlFor="weight" className="mt-2 text-sm text-gray-500">
          Select Weight:
        </label>
        <select
          id="weight"
          name="weight"
          className="mt-1 p-2 w-auto sm:p-1 ml-2 border rounded-md"
          value={selectedWeight}
          onChange={handleWeightChange}
        >
          <option key={`${quantity1}${quantity1Unit}`} value={`${quantity1}${quantity1Unit}`}>
            {`${quantity1} ${quantity1Unit}`}
          </option>
          <option key={`${quantity2}${quantity2Unit}`} value={`${quantity2}${quantity2Unit}`}>
            {`${quantity2} ${quantity2Unit}`}
          </option>
          <option key={`${quantity3}${quantity3Unit}`} value={`${quantity3}${quantity3Unit}`}>
            {`${quantity3} ${quantity3Unit}`}
          </option>
        </select>
      </div>
      <div className="flex flex-col items-end">
        {selectedPrice && <p className="sm:text-lg text-sm">Rs.{selectedPrice}</p>}
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

// components/ProductCard.js
"use client";
import Link from 'next/link';

const ProductCard = ({ imageUrl, heading, description, price, buyNowLink }) => {
  return (
    <div className="flex border p-2">
      {/* Left side: Image */}
      <div className="flex-shrink">
        <img src={imageUrl} alt={heading} height={44} width={44} className="lg:w-64 w-32 lg:h-64 h-36 object-cover" />
      </div>

      {/* Middle part: Heading and Description */}
      <div className="flex-grow lg:mx-4 mx-1">
        <h2 className="lg:text-xl text-lg font-semibold">{heading}</h2>
        <p className="text-gray-600 text-xs lg:text-xl">{description}</p>
      </div>

      {/* Right side: Price and Buy Now button */}
      <div className="flex flex-col items-end">
        <p className="text-lg font-semibold">Rs.{price}</p>
        <Link href={buyNowLink} className='self-end lg:mt-4 mt-2'>
          <button className="w-full px-1 lg:px-2 py-2 bg-white border-green-500 text-green-500 rounded-md focus:outline-none border hover:bg-green-500 hover:text-white transition duration-300 ease-in-out text-sm sm:text-xs">
            Pre Book
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;

// components/ProductCard.js

import Link from 'next/link';

const ProductCard = ({ imageUrl, heading, description, price, buyNowLink }) => {
  return (
    <div className="flex border p-2">
      {/* Left side: Image */}
      <div className="flex-shrink-0">
        <img src={imageUrl} alt={heading} className="lg:w-64 w-44 lg:h-64 h-44 object-cover" />
      </div>

      {/* Middle part: Heading and Description */}
      <div className="flex-grow mx-4">
        <h2 className="text-xl font-semibold">{heading}</h2>
        <p className="text-gray-600">{description}</p>
      </div>

      {/* Right side: Price and Buy Now button */}
      <div className="flex-shrink-0 flex flex-col items-end">
        <p className="text-lg font-semibold py-5">Rs.{price}</p>
        <Link href={buyNowLink} className='py-5'>
          <span className="bg-blue-500 text-white px-4 py-2 rounded mt-2">Buy Now</span>
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;

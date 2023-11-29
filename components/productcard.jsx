// components/ProductCard.js
"use client"
import Link from 'next/link';

const ProductCard = ({ imageUrl, heading, description, price, buyNowLink }) => {
  return (
    <div className="flex border p-2">
      {/* Left side: Image */}
      <div className="flex-shrink">
        <img src={imageUrl} alt={heading} className="lg:w-64 w-44 lg:h-64 h-44 object-cover" />
      </div>

      {/* Middle part: Heading and Description */}
      <div className="flex-grow mx-4">
        <h2 className="text-xl font-semibold">{heading}</h2>
        <p className="text-gray-600">{description}</p>
      </div>

      {/* Right side: Price and Buy Now button */}
      <div className="flex flex-col items-end">
  <p className="text-lg font-semibold">Rs.{price}</p>
  <Link href={buyNowLink} className='lg:py-5'>
    <span className="border-green-500 text-green-500 border text-sm md:text-xs px-2 py-1 lg:px-3 lg:py-1 rounded mt-2">
      Buy Now
    </span>
  </Link>
</div>
</div>
  );
};

export default ProductCard;
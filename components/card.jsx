// components/Card.js
import Image from 'next/image';

const Card = ({ imageUrl, title, description, price }) => {
  return (
    <div className="bg-white shadow-lg rounded-md overflow-hidden mb-8">
      <div className="relative h-48">
        <Image
          src={imageUrl}
          alt={title}
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="flex items-center justify-between">
          <p className="text-lg font-bold text-green-500">${price}</p>
          <button className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-700">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;

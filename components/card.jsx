// components/Card.js
import Image from 'next/image';

const Card = ({ imageUrl, title, description, price, onClick }) => {
  return (
    <div className="bg-white shadow-lg rounded-md overflow-hidden">
      <div className="relative h-48 md:h-64">
        <Image
          src={imageUrl}
          alt={title}
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="lg:p-4 p-2">
        <h3 className="text-lg md:text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 text-sm md:text-base mb-4">{description}</p>
        <div className="flex items-center justify-between">
          <p className="text-base md:text-lg font-bold text-green-500">${price}</p>
          <button onClick={onClick} className="bg-green-500 text-white px-3 py-1 rounded-md hover:bg-green-700 text-sm md:text-base">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;

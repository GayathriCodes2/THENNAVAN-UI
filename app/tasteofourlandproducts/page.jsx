// pages/index.js

import ProductCard from "@components/productcard";

const products = [
  {
    id: 1,
    imageUrl: '/Tirunelveli-Halwa.jpg',
    heading: 'Tirunelveli - Halwa',
    description: 'Description for Product 1',
    price: 19.99,
    buyNowLink: "https://wa.me/9092993545?text=Need%20Tirunelveli%20Halwa%20with",
  }, {
    id: 2,
    imageUrl: '/Thoothukudi-Macaroons.jpg',
    heading: 'Thoothukudi - Macaroons',
    description: 'Description for Product 1',
    price: 19.99,
    buyNowLink: "https://wa.me/9092993545?text=Need%20Thoothukudi%20Macaroons%20with",
  }, {
    id: 3,
    imageUrl: '/Peanut-candy.jpg',
    heading: 'Kovilpatti - Kadalai mittai',
    description: 'Description for Product 1',
    price: 19.99,
    buyNowLink: "https://wa.me/9092993545?text=Need%20Peanut%20Candy%20with",
  }, {
    id: 4,
    imageUrl: '/Banana-chips.jpg',
    heading: 'Nagercoil - Chips',
    description: 'Description for Product 1',
    price: 19.99,
    buyNowLink: "https://wa.me/9092993545?text=Need%20Banana%20Chips%20with",
  }
];

const Page = () => {
  return (
    <div>
      <h1 className="text-2xl font-semibold my-4">Taste of our land</h1>
      {products.map((product) => (
        <ProductCard key={product.id} {...product} />
      ))}
    </div>
  );
};

export default Page;

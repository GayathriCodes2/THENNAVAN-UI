// pages/index.js

import ProductCard from "@components/productcard";

const products = [
  {
    id: 1,
    imageUrl: '/Tirunelveli-Halwa.jpg',
    heading: 'Tirunelveli - Halwa',
    description: 'Description for Product 1',
    price: { '1kg': 19.99, '2kg': 29.99, '4kg': 39.99, '6kg': 49.99 },
    buyNowLink: "https://wa.me/9092993545?text=Need",
    weightOptions: [
      { label: '1 kg', value: '1kg' },
      { label: '2 kg', value: '2kg' },
      { label: '4 kg', value: '4kg' },
      { label: '6 kg', value: '6kg' },
    ],
  }, {
    id: 2,
    imageUrl: '/Thoothukudi-Macaroons.jpg',
    heading: 'Thoothukudi - Macaroons',
    description: 'Description for Product 1',
    price: { '1kg': 19.99, '2kg': 29.99, '4kg': 39.99, '6kg': 49.99 },
    buyNowLink: "https://wa.me/9092993545?text=Need",
    weightOptions: [
      { label: '1 kg', value: '1kg' },
      { label: '2 kg', value: '2kg' },
      { label: '4 kg', value: '4kg' },
      { label: '6 kg', value: '6kg' },
    ],
  }, {
    id: 3,
    imageUrl: '/Peanut-candy.jpg',
    heading: 'Kovilpatti - Kadalai mittai',
    description: 'Description for Product 1',
    price: { '1kg': 19.99, '2kg': 29.99, '4kg': 39.99, '6kg': 49.99 },
    buyNowLink: "https://wa.me/9092993545?text=Need",
    weightOptions: [
      { label: '1 kg', value: '1kg' },
      { label: '2 kg', value: '2kg' },
      { label: '4 kg', value: '4kg' },
      { label: '6 kg', value: '6kg' },
    ],
  }, {
    id: 4,
    imageUrl: '/Banana-chips.jpg',
    heading: 'Nagercoil - Chips',
    description: 'Description for Product 1',
    price: { '1kg': 19.99, '2kg': 29.99, '4kg': 39.99, '6kg': 49.99 },
    buyNowLink: "https://wa.me/9092993545?text=Need",
    weightOptions: [
      { label: '1 kg', value: '1kg' },
      { label: '2 kg', value: '2kg' },
      { label: '4 kg', value: '4kg' },
      { label: '6 kg', value: '6kg' },
    ],
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

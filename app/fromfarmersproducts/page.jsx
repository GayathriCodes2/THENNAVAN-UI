// pages/index.js

import ProductCard from "@components/productcard";

const products = [
  {
    id: 1,
    imageUrl: '/8.jpg',
    heading: 'Product 1',
    description: 'Description for Product 1',
    price: 19.99,
    buyNowLink: "https://wa.me/9092993545?text=I'm%20interested%20in%20your%20product%20for%20sale",
  },{
    id: 1,
    imageUrl: '/8.jpg',
    heading: 'Product 1',
    description: 'Description for Product 1',
    price: 19.99,
    buyNowLink: 'https://example.com/buy/product1',
  },{
    id: 1,
    imageUrl: '/8.jpg',
    heading: 'Product 1',
    description: 'Description for Product 1',
    price: 19.99,
    buyNowLink: 'https://example.com/buy/product1',
  },{
    id: 1,
    imageUrl: '/8.jpg',
    heading: 'Product 1',
    description: 'Description for Product 1',
    price: 19.99,
    buyNowLink: 'https://example.com/buy/product1',
  },{
    id: 1,
    imageUrl: '/8.jpg',
    heading: 'Product 1',
    description: 'Description for Product 1',
    price: 19.99,
    buyNowLink: 'https://example.com/buy/product1',
  },{
    id: 1,
    imageUrl: '/8.jpg',
    heading: 'Product 1',
    description: 'Description for Product 1',
    price: 19.99,
    buyNowLink: 'https://example.com/buy/product1',
  },

];

const Page = () => {
  return (
    <div>
      <h1 className="text-2xl font-semibold my-4">Featured Products</h1>
      {products.map((product) => (
        <ProductCard key={product.id} {...product} />
      ))}
    </div>
  );
};

export default Page;

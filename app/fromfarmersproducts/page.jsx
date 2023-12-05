// pages/index.js

import ProductCard from "@components/productcard";

const products = [
  {
    id: 1,
    imageUrl: '/Ponni-Rice.jpg',
    heading: 'Product 1',
    description: 'Description for Product 1',
    price: 19.99,
    buyNowLink: "https://wa.me/9092993545?text=I'm%20interested%20in%20your%20product%20for%20sale",
  },{
    id: 1,
    imageUrl: '/Black-gram.jpg',
    heading: 'Product 1',
    description: 'Description for Product 1',
    price: 19.99,
    buyNowLink: 'https://example.com/buy/product1',
  },{
    id: 1,
    imageUrl: '/Henna-Powder.jpg',
    heading: 'Product 1',
    description: 'Description for Product 1',
    price: 19.99,
    buyNowLink: 'https://example.com/buy/product1',
  },{
    id: 1,
    imageUrl: '/Neem-Powder.jpg',
    heading: 'Product 1',
    description: 'Description for Product 1',
    price: 19.99,
    buyNowLink: 'https://example.com/buy/product1',
  },{
    id: 1,
    imageUrl: '/Curry-Leaves-Powder.jpg',
    heading: 'Product 1',
    description: 'Description for Product 1',
    price: 19.99,
    buyNowLink: 'https://example.com/buy/product1',
  },{
    id: 1,
    imageUrl: '/Moringa-Powder.jpg',
    heading: 'Product 1',
    description: 'Description for Product 1',
    price: 19.99,
    buyNowLink: 'https://example.com/buy/product1',
  },

];

const Page = () => {
  return (
    <div>
      <h1 className="text-2xl font-semibold my-4">From Farmers</h1>
      <img src='/From-Farmers-All-Product-page-image.png' alt="Leelavathi" className="h-96 w-96 mx-auto" />
      {products.map((product) => (
        <ProductCard key={product.id} {...product} />
      ))}
    </div>
  );
};

export default Page;

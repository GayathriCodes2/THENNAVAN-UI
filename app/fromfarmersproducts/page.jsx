// pages/index.js

import ProductCard from "@components/productcard";

const products = [
  {
    id: 1,
    imageUrl: '/Ponni-Rice.jpg',
    heading: 'Ponni Rice',
    description: 'Description for Product 1',
    price: 19.99,
    buyNowLink: "https://wa.me/9092993545?text=Need%20Ponni%20Rice%20with",
  },{
    id: 2,
    imageUrl: '/Black-gram.jpg',
    heading: 'Black Gram',
    description: 'Description for Product 1',
    price: 19.99,
    buyNowLink: "https://wa.me/9092993545?text=Need%20Black%20Gram%20with",
  },{
    id: 3,
    imageUrl: '/Henna-Powder.jpg',
    heading: 'Henna Powder',
    description: 'Description for Product 1',
    price: 19.99,
    buyNowLink: "https://wa.me/9092993545?text=Need%20Henna%20Powder%20with",
  },{
    id: 4,
    imageUrl: '/Neem-Powder.jpg',
    heading: 'Neem Powder',
    description: 'Description for Product 1',
    price: 19.99,
    buyNowLink: "https://wa.me/9092993545?text=Need%20Neem%20Powder%20with",
  },{
    id: 5,
    imageUrl: '/Curry-Leaves-Powder.jpg',
    heading: 'Curry Leaves Powder',
    description: 'Description for Product 1',
    price: 19.99,
    buyNowLink: "https://wa.me/9092993545?text=Need%20Curry%20Leaves%20Powder%20with",
  },{
    id: 6,
    imageUrl: '/Moringa-Powder.jpg',
    heading: 'Moringa Powder',
    description: 'Description for Product 1',
    price: 19.99,
    buyNowLink: "https://wa.me/9092993545?text=Need%20Moringa%20Powder%20with",  },

];

const Page = () => {
  return (
    <div>
      <h1 className="text-2xl font-semibold my-4">From Farmers</h1>
      <img src='/From-Farmers-All-Product-page-image.png' alt="Leelavathi" className="h-96 w-96 lg:hidden mx-auto" />
      {products.map((product) => (
        <ProductCard key={product.id} {...product} />
      ))}
    </div>
  );
};

export default Page;

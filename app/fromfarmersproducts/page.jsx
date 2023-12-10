// pages/index.js
import ProductCard from "@components/productcard";

const products = [
  {
    id: 1,
    imageUrl: '/Ponni-Rice.jpg',
    heading: 'Ponni Rice',
    description: 'Description for Product 1',
    price: { '1kg': 19.99, '2kg': 29.99, '4kg': 39.99, '6kg': 49.99 }, 
    weightOptions: [
      { label: '1 kg', value: '1kg' },
      { label: '2 kg', value: '2kg' },
      { label: '4 kg', value: '4kg' },
      { label: '6 kg', value: '6kg' },
    ],
  },
  {
    id: 2,
    imageUrl: '/Black-gram.jpg',
    heading: 'Black Gram',
    description: 'Description for Black Gram',
    price: { '1kg': 19.99, '2kg': 29.99, '4kg': 39.99 }, 
    weightOptions: [
      { label: '1 kg', value: '1kg' },
      { label: '2 kg', value: '2kg' },
      { label: '4 kg', value: '4kg' },
    ],
  },
  {
    id: 3,
    imageUrl: '/Henna-Powder.jpg',
    heading: 'Henna Powder',
    description: 'Description for Henna Powder',
    price: { '1kg': 19.99, '2kg': 29.99, '4kg': 39.99 }, 
    weightOptions: [
      { label: '1 kg', value: '1kg' },
      { label: '2 kg', value: '2kg' },
      { label: '4 kg', value: '4kg' },
    ],
  }, 
  {
    id: 4,
    imageUrl: '/Honey.png',
    heading: 'Organic Honey',
    description: 'Description forOrganic Honey',
    price: { '500ml': 19.99, '1liter': 29.99, '2liter': 39.99 }, 
    weightOptions: [
      { label: '500 ml', value: '500ml' },
      { label: '1 liter', value: '1liter' },
      { label: '2 liter', value: '2liter' },
    ],
  },
  {
    id: 5,
    imageUrl: '/Neem-Powder.jpg',
    heading: 'Neem Powder',
    description: 'Description for Neem Powder',
    price: { '1kg': 19.99, '2kg': 29.99, '4kg': 39.99 }, 
    weightOptions: [
      { label: '1 kg', value: '1kg' },
      { label: '2 kg', value: '2kg' },
      { label: '4 kg', value: '4kg' },
    ],
  },
  {
    id: 6,
    imageUrl: '/Curry-Leaves-Powder.jpg',
    heading: 'Curry Leaves Powder',
    description: 'Description for Curry Leaves Powder',
    price: { '1kg': 19.99, '2kg': 29.99, '4kg': 39.99 },
    weightOptions: [
      { label: '1 kg', value: '1kg' },
      { label: '2 kg', value: '2kg' },
      { label: '4 kg', value: '4kg' },
    ],
  },
  {
    id: 7,
    imageUrl: '/Moringa-Powder.jpg',
    heading: 'Moringa Powder',
    description: 'Description for Moringa Powder',
    price: { '1kg': 19.99, '2kg': 29.99, '4kg': 39.99 },
    weightOptions: [
      { label: '1 kg', value: '1kg' },
      { label: '2 kg', value: '2kg' },
      { label: '4 kg', value: '4kg' },
    ],
  },
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

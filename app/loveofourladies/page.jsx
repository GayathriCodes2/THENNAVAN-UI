// pages/index.js
import ProductCard from "@components/productcard";

const products = [
  {
    id: 1,
    imageUrl: '/BananaFibrePlate.png',
    heading: 'Banana Fibre Plate',
    description: 'Description for Product 1',
    price: { '1kg': 19.99, '2kg': 29.99, '4kg': 39.99, '6kg': 49.99 },
    buyNowLink: "https://wa.me/9092993545?text=Need",
    weightOptions: [
      { label: '1 kg', value: '1kg' },
      { label: '2 kg', value: '2kg' },
      { label: '4 kg', value: '4kg' },
      { label: '6 kg', value: '6kg' },
    ],
  },
  {
    id: 2,
    imageUrl: '/BasketWithLid.png',
    heading: 'Black Gram',
    description: 'Description for Black Gram',
    price: { '1kg': 19.99, '2kg': 29.99, '4kg': 39.99 },
    buyNowLink: "https://wa.me/9092993545?text=Need",
    weightOptions: [
      { label: '1 kg', value: '1kg' },
      { label: '2 kg', value: '2kg' },
      { label: '4 kg', value: '4kg' },
    ],
  },
  {
    id: 3,
    imageUrl: '/CircularDecorativeBasket.jpeg',
    heading: 'Henna Powder',
    description: 'Description for Henna Powder',
    price: { '1kg': 19.99, '2kg': 29.99, '4kg': 39.99 },
    buyNowLink: "https://wa.me/9092993545?text=Need",
    weightOptions: [
      { label: '1 kg', value: '1kg' },
      { label: '2 kg', value: '2kg' },
      { label: '4 kg', value: '4kg' },
    ],
  },
  {
    id: 4,
    imageUrl: '/CircularDeepMultipurpose.png',
    heading: 'Neem Powder',
    description: 'Description for Neem Powder',
    price: { '1kg': 19.99, '2kg': 29.99, '4kg': 39.99 },
    buyNowLink: "https://wa.me/9092993545?text=Need",
    weightOptions: [
      { label: '1 kg', value: '1kg' },
      { label: '2 kg', value: '2kg' },
      { label: '4 kg', value: '4kg' },
    ],
  },
  {
    id: 5,
    imageUrl: '/CircularFiberHamper.jpeg',
    heading: 'Curry Leaves Powder',
    description: 'Description for Curry Leaves Powder',
    price: { '1kg': 19.99, '2kg': 29.99, '4kg': 39.99 },
    buyNowLink: "https://wa.me/9092993545?text=Need",
    weightOptions: [
      { label: '1 kg', value: '1kg' },
      { label: '2 kg', value: '2kg' },
      { label: '4 kg', value: '4kg' },
    ],
  },
  {
    id: 6,
    imageUrl: '/DecorativeDeepBananaFabricBasket.png',
    heading: 'Moringa Powder',
    description: 'Description for Moringa Powder',
    price: { '1kg': 19.99, '2kg': 29.99, '4kg': 39.99 },
    buyNowLink: "https://wa.me/9092993545?text=Need",
    weightOptions: [
      { label: '1 kg', value: '1kg' },
      { label: '2 kg', value: '2kg' },
      { label: '4 kg', value: '4kg' },
    ],
  },
  {
    id: 7,
    imageUrl: '/FruitandVegBasket.jpeg',
    heading: 'Ponni Rice',
    description: 'Description for Product 1',
    price: { '1kg': 19.99, '2kg': 29.99, '4kg': 39.99, '6kg': 49.99 },
    buyNowLink: "https://wa.me/9092993545?text=Need",
    weightOptions: [
      { label: '1 kg', value: '1kg' },
      { label: '2 kg', value: '2kg' },
      { label: '4 kg', value: '4kg' },
      { label: '6 kg', value: '6kg' },
    ],
  },
  {
    id: 2,
    imageUrl: '/FruitAndVegBasketWithHandle.png',
    heading: 'Black Gram',
    description: 'Description for Black Gram',
    price: { '1kg': 19.99, '2kg': 29.99, '4kg': 39.99 },
    buyNowLink: "https://wa.me/9092993545?text=Need",
    weightOptions: [
      { label: '1 kg', value: '1kg' },
      { label: '2 kg', value: '2kg' },
      { label: '4 kg', value: '4kg' },
    ],
  },
  {
    id: 3,
    imageUrl: '/LampHolder.png',
    heading: 'Henna Powder',
    description: 'Description for Henna Powder',
    price: { '1kg': 19.99, '2kg': 29.99, '4kg': 39.99 },
    buyNowLink: "https://wa.me/9092993545?text=Need",
    weightOptions: [
      { label: '1 kg', value: '1kg' },
      { label: '2 kg', value: '2kg' },
      { label: '4 kg', value: '4kg' },
    ],
  },
  {
    id: 4,
    imageUrl: '/OvalFruitAndVegBasketWithHandle.png',
    heading: 'Neem Powder',
    description: 'Description for Neem Powder',
    price: { '1kg': 19.99, '2kg': 29.99, '4kg': 39.99 },
    buyNowLink: "https://wa.me/9092993545?text=Need",
    weightOptions: [
      { label: '1 kg', value: '1kg' },
      { label: '2 kg', value: '2kg' },
      { label: '4 kg', value: '4kg' },
    ],
  },
  
  {
    id: 3,
    imageUrl: '/SquareDeepMultipurpose.png',
    heading: 'Henna Powder',
    description: 'Description for Henna Powder',
    price: { '1kg': 19.99, '2kg': 29.99, '4kg': 39.99 },
    buyNowLink: "https://wa.me/9092993545?text=Need",
    weightOptions: [
      { label: '1 kg', value: '1kg' },
      { label: '2 kg', value: '2kg' },
      { label: '4 kg', value: '4kg' },
    ],
  },
  {
    id: 4,
    imageUrl: '/TallBlanketBasket.png',
    heading: 'Neem Powder',
    description: 'Description for Neem Powder',
    price: { '1kg': 19.99, '2kg': 29.99, '4kg': 39.99 },
    buyNowLink: "https://wa.me/9092993545?text=Need",
    weightOptions: [
      { label: '1 kg', value: '1kg' },
      { label: '2 kg', value: '2kg' },
      { label: '4 kg', value: '4kg' },
    ],
  },
  {
    id: 5,
    imageUrl: '/CircularFiberHamper.jpeg',
    heading: 'Curry Leaves Powder',
    description: 'Description for Curry Leaves Powder',
    price: { '1kg': 19.99, '2kg': 29.99, '4kg': 39.99 },
    buyNowLink: "https://wa.me/9092993545?text=Need",
    weightOptions: [
      { label: '1 kg', value: '1kg' },
      { label: '2 kg', value: '2kg' },
      { label: '4 kg', value: '4kg' },
    ],
  },
  {
    id: 6,
    imageUrl: '/DecorativeDeepBananaFabricBasket.png',
    heading: 'Moringa Powder',
    description: 'Description for Moringa Powder',
    price: { '1kg': 19.99, '2kg': 29.99, '4kg': 39.99 },
    buyNowLink: "https://wa.me/9092993545?text=Need",
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
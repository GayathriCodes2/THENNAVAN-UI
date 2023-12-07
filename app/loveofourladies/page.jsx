// pages/index.js
import ProductCard from "@components/productcard";

const products = [
  {
    id: 1,
    imageUrl: '/BananaFibrePlate.png',
    heading: 'Banana Fibre Plate',
    description: 'Customization Available',
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
    heading: 'Handmade Basket With Lid',
    description: 'Customization Available',
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
    heading: 'Handmade Circular Decorative Basket',
    description: 'Customization Available',
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
    heading: 'Handmade Circular Deep Multipurpose Basket',
    description: 'Customization Available',
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
    heading: 'Circular Banana Fiber Basket',
    description: 'Customization Available',
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
    heading: 'Decorative Deep Handmade Basket',
    description: 'Customization Available',
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
    heading: 'Fruit/Vegetable Holder Banana Fibre Basket',
    description: 'Customization Available',
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
    id: 8,
    imageUrl: '/FruitAndVegBasketWithHandle.png',
    heading: 'Fruit/Vegetable Holder Handmade Basket with Handle',
    description: 'Customization Available',
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
    heading: 'Handmade Lamp Holder',
    description: 'Customization Available',
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
    heading: 'Handmade Oval Fruit/VegBasket With Handle',
    description: 'Customization Available',
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
    heading: 'Handmade Square Deep Multipurpose',
    description: 'Customization Available',
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
    heading: 'Handmade Tall Blanket Basket',
    description: 'Customization Available',
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
    heading: 'Decorative Deep Banana Fabric Basket ',
    description: 'Customization Available',
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
      <h1 className="text-2xl font-semibold my-4">Love of Our Ladies</h1>
      <img src='/Basket_Weaving_Coloring_Page_Sketch_Coloring_Page-removebg-preview.png' alt="Temple Image" className="h-96 w-96 lg:hidden mx-auto" />
      {products.map((product) => (
        <ProductCard key={product.id} {...product} />
      ))}
    </div>
  );
};

export default Page;

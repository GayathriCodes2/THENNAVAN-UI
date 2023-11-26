// ./app/card/page.js
import Link from 'next/link';
import Card from '@components/card';

export default function Page() {
  const cardsData = [
    {
      imageUrl: '/1.jpg',
      title: 'Product 1',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      price: '19.99',
      link: '/product1',
    },
    {
      imageUrl: '/2.jpg',
      title: 'Product 2',
      description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      price: '29.99',
      link: '/product2',
    },
    {
      imageUrl: '/3.jpg',
      title: 'Product 3',
      description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
      price: '39.99',
      link: '/product3',
    },
    // ... rest of the data
  ];

  return (
    <div className="p-4 md:p-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-4">
        {cardsData.map((card, index) => (
          <div key={index} className="w-full p-2">
            <Link href={card.link}>
              <Card {...card} />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

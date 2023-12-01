import Carousel from '@components/banner';
import Card from '@components/imageWithLabel';
import VarietyCard from '@components/varietyCard';
import React from 'react';
function page() {

  const products = [{
    imageUrl: '/6.jpg',
    heading: 'Product Name',
    price: '99.99',
    description: 'This is a description of the product.',
    productUrl: '/product/product1',
  },{
    imageUrl: '/6.jpg',
    heading: 'Product Name',
    price: '99.99',
    description: 'This is a description of the product.',
    productUrl: '/product/product1',
  },{
    imageUrl: '/6.jpg',
    heading: 'Product Name',
    price: '99.99',
    description: 'This is a description of the product.',
    productUrl: '/product/product1',
  },{
    imageUrl: '/6.jpg',
    heading: 'Product Name',
    price: '99.99',
    description: 'This is a description of the product.',
    productUrl: '/product/product1',
  },
];

  return (
    <div>
    <Carousel/>
    <Card
        imageUrl="/9.png"
        label="Card Heading"
      />
      <div>
        {products.map((product, index) => (
          <VarietyCard
            key={index}
            imageUrl={product.imageUrl}
            heading={product.heading}
            price={product.price}
            description={product.description}
            productUrl={product.productUrl}
          />
        ))}
      </div>
    </div>
  )
}

export default page

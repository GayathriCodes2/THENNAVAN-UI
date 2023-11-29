import Carousel from '@components/banner';
import Card from '@components/imageWithLabel';
import VarietyCard from '@components/varietyCard';
import React from 'react';
function page() {

  const products = [{
    imageUrl: 'https://images.unsplash.com/photo-1629367494173-c78a56567877?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=927&amp;q=80',
    heading: 'Product Name',
    price: '$99.99',
    description: 'This is a description of the product.',
    productUrl: '/product/product1',
  },{
    imageUrl: 'https://images.unsplash.com/photo-1629367494173-c78a56567877?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=927&amp;q=80',
    heading: 'Product Name',
    price: '$99.99',
    description: 'This is a description of the product.',
    productUrl: '/product/product1',
  },{
    imageUrl: 'https://images.unsplash.com/photo-1629367494173-c78a56567877?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=927&amp;q=80',
    heading: 'Product Name',
    price: '$99.99',
    description: 'This is a description of the product.',
    productUrl: '/product/product1',
  },{
    imageUrl: 'https://images.unsplash.com/photo-1629367494173-c78a56567877?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=927&amp;q=80',
    heading: 'Product Name',
    price: '$99.99',
    description: 'This is a description of the product.',
    productUrl: '/product/product1',
  }
];

  return (
    <div>
    <Carousel/>
    <div className=' h-screen'>
    <Card
        imageUrl="/9.png"
        label="Card Heading"
      />
       <div className="flex flex-wrap mx-2">
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
    </div>
  )
}

export default page

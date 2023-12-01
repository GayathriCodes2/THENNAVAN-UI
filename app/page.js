import HomeProfileImage from '@components/homeProfileImage';
import HomepageCard from '@components/homePageCard';
import SeeMoreButton from '@components/button';
import Carousel from '@components/banner';
import React from 'react';

function page() {
  
  const products = [{
    imageUrl: '/6.jpg',
    heading: 'Product Name',
    price: '99.99',
    description: 'This is a description of the product.',
    productUrl: '/fromfarmersproducts',
  },{
    imageUrl: '/6.jpg',
    heading: 'Product Name',
    price: '99.99',
    description: 'This is a description of the product.',
    productUrl: '/fromfarmersproducts',
  },{
    imageUrl: '/6.jpg',
    heading: 'Product Name',
    price: '99.99',
    description: 'This is a description of the product.',
    productUrl: '/fromfarmersproducts',
  },{
    imageUrl: '/6.jpg',
    heading: 'Product Name',
    price: '99.99',
    description: 'This is a description of the product.',
    productUrl: '/fromfarmersproducts',
  },
];

  return (
    <div>
    <Carousel/>
    <HomeProfileImage
        imageUrl="/9.png"
        label="From Farmers"
      />
      <div>
        {products.map((product, index) => (
          <HomepageCard
            key={index}
            imageUrl={product.imageUrl}
            heading={product.heading}
            price={product.price}
            description={product.description}
            productUrl={product.productUrl}
          />
        ))}
          <SeeMoreButton to="/products"/>

      </div>
    </div>
  )
}

export default page

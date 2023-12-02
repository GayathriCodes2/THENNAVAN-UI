import HomeProfileImage from '@components/homeProfileImage';
import HomepageListCard from '@components/homePageListCard';
import Carousel from '@components/banner';
import React from 'react';

function page() {
  
  const products = [{
    imageUrl: '/22.jpg',
    heading: 'Product Name',
    price: '99.99',
    productUrl: '/fromfarmersproducts',
  },{
    imageUrl: '/22.jpg',
    heading: 'Product Name',
    price: '99.99',
    productUrl: '/fromfarmersproducts',
  },{
    imageUrl: '/22.jpg',
    heading: 'Product Name',
    price: '99.99',
    productUrl: '/fromfarmersproducts',
  },{
    imageUrl: '/22.jpg',
    heading: 'Product Name',
    price: '99.99',
    productUrl: '/fromfarmersproducts',
  },
];

  return (
    <div>
    <Carousel/>
    <HomeProfileImage
        text="From Farmers" path="/some-path" ButtonContent="Click me"/>
   
      <div className='grid lg:grid-cols-4 sm:grid-cols-2 justify-around'>
      {products.map((item, index) => (
        <HomepageListCard key={index} data={item} />
      ))}
      </div>
    </div>
  )
}

export default page

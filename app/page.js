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
      
      <hr className="w-96 h-2 mx-auto my-4 bg-gray-700 border-0 rounded md:my-10 "></hr>

      <HomeProfileImage
        text="From Farmers"
        path="/fromfarmersproducts"
        ButtonContent="See More"
        imageUrl="/9.png"
        altText="Farmer Logo"
      />
    
      <div className='grid lg:grid-cols-4 grid-cols-2 justify-around'>
        {products.map((item, index) => (
          // This code is for From Farmers Home page card section
          <HomepageListCard key={index} data={item} />
        ))}
      </div>
      
      <hr className="w-96 h-2 mx-auto my-4 bg-gray-700 border-0 rounded md:my-10 "></hr>
      
      <HomeProfileImage
        text="Taste of our land"
        path="/tasteofourlandproducts"
        ButtonContent="See More"
        imageUrl="/9.png"
        altText="Taste Logo"
      />

      <div className='grid lg:grid-cols-4 grid-cols-2 justify-around'>  
        {products.map((item, index) => (
          // This code is for Taste of our land Home page card section
          <HomepageListCard key={index} data={item} />
        ))}
      </div>
    </div>
  )
}

export default page;

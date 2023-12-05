import HomeProfileImage from '@components/homeProfileImage';
import HomepageListCard from '@components/homePageListCard';
import Carousel from '@components/banner';
import React from 'react';

function page() {
  
  const products = [{
    imageUrl: '/Ponni Rice.jpg',
    heading: 'Ponni-Rice.jpg',
    price: '99.99',
    productUrl: '/fromfarmersproducts',
  },{
    imageUrl: '/Black-gram.jpg',
    heading: 'Black gram',
    price: '99.99',
    productUrl: '/fromfarmersproducts',
  },{
    imageUrl: '/Henna-Powder.jpg',
    heading: 'Henna Powder',
    price: '99.99',
    productUrl: '/fromfarmersproducts',
  },{
    imageUrl: '/Neem-Powder.jpg',
    heading: 'Neem Powder',
    price: '99.99',
    productUrl: '/fromfarmersproducts',
  }
];

const tastyProducts = [{
  imageUrl: '/Tirunelveli-Halwa.jpg',
  heading: 'Tirunelveli - Halwa',
  productUrl: '/tasteofourlandproducts',
},{
  imageUrl: '/Thoothukudi-Macaroons.jpg',
  heading: 'Thoothukudi - Macaroons',
  productUrl: '/tasteofourlandproducts',
},{
  imageUrl: '/Peanut-candy.jpg',
  heading: 'Kovilpatti - Kadalai mittai',
  productUrl: '/tasteofourlandproducts',
},{
  imageUrl: '/Banana-chips.jpg',
  heading: 'Nagercoil - Chips',
  productUrl: '/tasteofourlandproducts',
},
]; 

  return (
    <div>
      <Carousel/>
      
      <hr className="lg:w-96 w-40 h-2 mx-auto my-4 bg-gray-700 border-0 rounded md:my-10 "></hr>

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
      
      <hr className="lg:w-96 w-40 h-2 mx-auto my-4 bg-gray-700 border-0 rounded md:my-10 "></hr>
      
      <HomeProfileImage
        text="Taste of our land"
        path="/tasteofourlandproducts"
        ButtonContent="See More"
        imageUrl="/9.png"
        altText="Taste Logo"
      />

      <div className='grid lg:grid-cols-4 grid-cols-2 justify-around'>  
        {tastyProducts.map((item, index) => (
          // This code is for Taste of our land Home page card section
          <HomepageListCard key={index} data={item} />
        ))}
      </div>
    </div>
  )
}

export default page;

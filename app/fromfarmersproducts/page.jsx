// pages/index.js
"use client"
import React, { useState, useEffect } from 'react';
import ProductCard from "@components/productcard";
import axios from 'axios';

const Page = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://thennavan.onrender.com/fromfarmers/fromfarmers');
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);
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

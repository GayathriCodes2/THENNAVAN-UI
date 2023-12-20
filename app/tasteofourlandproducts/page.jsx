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
        const response = await axios.get('http://localhost:3002/tasteofourlands');
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);
  return (
    <div>
      <h1 className="text-2xl font-semibold my-4">Taste of our land</h1>
      <img src='/download-removebg-preview.png' alt="Temple Image" className="h-96 w-96 lg:hidden mx-auto" />
      {products.map((product) => (
        <ProductCard key={product.id} {...product} />
      ))}
    </div>
  );
};

export default Page;

"use client"
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import axios from 'axios';

const AdminPage = () => {
  const [category, setCategory] = useState('');
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const authToken = localStorage.getItem('authToken');
    if (!authToken) {
      window.location.href = '/login';
    } else {
      // Fetch data when authenticated
      fetchData();
    }
  }, []);

  const fetchData = async () => {
    try {
      let apiUrl = '';

      // Set axios URL based on selected category
      switch (category) {
        case 'Farmers':
          apiUrl = 'http://localhost:3002/fromfarmers/fromfarmers';
          break;
        case 'TasteOfOurLand':
          apiUrl = 'http://localhost:3002/tasteofourland/tasteofourlands';
          break;
        case 'loveOfOurLadies':
          apiUrl = 'http://localhost:3002/loveofourladies/loveofourladiess';
          break;
        // Add more cases for additional categories if needed
        default:
          apiUrl = 'http://localhost:3002/fromfarmers/fromfarmers'; 
      }

      const response = await axios.get(apiUrl);
      console.log(apiUrl);
      setProducts(response.data);
      console.log(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleEditProduct = (index) => {
    console.log(`Edit Product clicked for index ${index}`);
  };


  const handleDeleteProduct = async ({productId}) => {
    try {
        
    //   let apiUrl = '';
    //   // Perform delete action using the product ID
    //   switch (category) {
    //     case 'Farmers':
    //       apiUrl = `http://localhost:3002/fromfarmers/${productId}`;
    //       break;
    //     case 'TasteOfOurLand':
    //       apiUrl = `http://localhost:3002/tasteofourland/${productId}`;
    //       break;
    //     case 'loveOfOurLadies':
    //       apiUrl = `http://localhost:3002/loveofourladies/${productId}`;
    //       break;
    //     // Add more cases for additional categories if needed
    //     default:
    //       apiUrl = 'http://localhost:3002/fromfarmers/fromfarmers'; 
    //   }
    //   await axios.delete(apiUrl);
      console.log("(*****************",productId)
      // Fetch data again after delete
      fetchData();
       } catch (error) {
      console.error('Error deleting product:', error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Fetch data based on selected category (if needed)
    fetchData();
  };

  const handleAddProduct = () => {
    console.log('Add Product clicked');
  };

  return (
    <div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">Category</label>
        <select
          className="w-56 p-2 border rounded"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          required
        >
          <option value="Farmers">From Farmers</option>
          <option value="TasteOfOurLand">Taste of Our Land</option>
          <option value="loveOfOurLadies">Love of our Ladies</option>

          {/* Add more options if needed */}
        </select>
        <button
          type="submit"
          onClick={handleSubmit}
          className="bg-black w-48 mr-4 text-white py-2 px-2 rounded-md hover:bg-white hover:text-black border border-black transition duration-300"
        >
          Submit
        </button>
      </div>
      <div className="flex justify-end">
        <Link href="/admin-form">
          <button className="bg-black text-white py-2 px-4 mb-4" onClick={handleAddProduct}>
            Add Product
          </button>
        </Link>
      </div>
      <div className="container mx-auto p-4 mt-8 overflow-x-auto">
                <table className="min-w-full bg-white border border-gray-300">
                    <thead>
                        <tr>
                            <th className="py-2 px-4 border-b lg:table-cell md:table-cell sm:table-cell"></th>
                            <th className="py-2 px-4 border-b lg:table-cell md:table-cell sm:table-cell">Product Name</th>
                            <th className="py-2 px-4 border-b lg:table-cell md:table-cell sm:table-cell">Description</th>
                            <th className="py-2 px-4 border-b lg:table-cell md:table-cell sm:table-cell" colSpan="3">Weight</th>
                            <th className="py-2 px-4 border-b lg:table-cell md:table-cell sm:table-cell" colSpan="3">Quantity</th>
                            <th className="py-2 px-4 border-b lg:table-cell md:table-cell sm:table-cell" colSpan="3">Price</th>
                            <th className="py-2 px-4 border-b lg:table-cell md:table-cell sm:table-cell">Is Organic</th>
                        </tr>
                        <tr>
                            <th className="py-2 px-4 border-b lg:table-cell md:table-cell sm:table-cell"></th>
                            <th className="py-2 px-4 border-b lg:table-cell md:table-cell sm:table-cell"></th>
                            <th className="py-2 px-4 border-b lg:table-cell md:table-cell sm:table-cell"></th>
                            <th className="py-2 px-4 border-b lg:table-cell md:table-cell sm:table-cell">1</th>
                            <th className="py-2 px-4 border-b lg:table-cell md:table-cell sm:table-cell">2</th>
                            <th className="py-2 px-4 border-b lg:table-cell md:table-cell sm:table-cell">3</th>
                            <th className="py-2 px-4 border-b lg:table-cell md:table-cell sm:table-cell">1</th>
                            <th className="py-2 px-4 border-b lg:table-cell md:table-cell sm:table-cell">2</th>
                            <th className="py-2 px-4 border-b lg:table-cell md:table-cell sm:table-cell">3</th>
                            <th className="py-2 px-4 border-b lg:table-cell md:table-cell sm:table-cell">1</th>
                            <th className="py-2 px-4 border-b lg:table-cell md:table-cell sm:table-cell">2</th>
                            <th className="py-2 px-4 border-b lg:table-cell md:table-cell sm:table-cell">3</th>
                            <th className="py-2 px-4 border-b lg:table-cell md:table-cell sm:table-cell"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((product, index) => (
                            <tr key={index}>
                                <td className="py-2 px-4 border-b lg:table-cell md:table-cell sm:table-cell"></td>
                                <td className="py-2 px-4 border-b lg:table-cell md:table-cell sm:table-cell">{product.productName}</td>
                                <td className="py-2 px-4 border-b lg:table-cell md:table-cell sm:table-cell">{product.description}</td>
                                <td className="py-2 px-4 border-b text-center lg:table-cell md:table-cell sm:table-cell">{product.quantityValue1}</td>
                                <td className="py-2 px-4 border-b text-center lg:table-cell md:table-cell sm:table-cell">{product.quantityValue2}</td>
                                <td className="py-2 px-4 border-b text-center lg:table-cell md:table-cell sm:table-cell">{product.quantityValue3}</td>
                                <td className="py-2 px-4 border-b text-center lg:table-cell md:table-cell sm:table-cell">{product.quantity1}</td>
                                <td className="py-2 px-4 border-b text-center lg:table-cell md:table-cell sm:table-cell">{product.quantity2}</td>
                                <td className="py-2 px-4 border-b text-center lg:table-cell md:table-cell sm:table-cell">{product.quantity3}</td>
                                <td className="py-2 px-4 border-b text-center lg:table-cell md:table-cell sm:table-cell">{product.price1}</td>
                                <td className="py-2 px-4 border-b text-center lg:table-cell md:table-cell sm:table-cell">{product.price2}</td>
                                <td className="py-2 px-4 border-b text-center lg:table-cell md:table-cell sm:table-cell">{product.price3}</td>
                                <td className="py-2 px-4 border-b text-center lg:table-cell md:table-cell sm:table-cell">{product.isOrganic ? 'Yes' : 'No'}</td>
                                <td className="py-2 px-4 border-b my-auto">
                                    <button className="bg-green-500 rounded-3xl text-white py-1 px-2 mr-2" onClick={() => handleEditProduct(index)}>
                                        Edit
                                    </button>
                                    <button className="bg-red-500 rounded-3xl text-white py-1 px-2 mr-2" onClick={() => handleDeleteProduct(product._id)}>
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default AdminPage;
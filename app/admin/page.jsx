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
          apiUrl = 'https://thennavan.onrender.com/fromfarmers';
          break;
        case 'TasteOfOurLand':
          apiUrl = 'https://thennavan.onrender.com/tasteofourlands';
          break;
        case 'loveOfOurLadies':
          apiUrl = 'https://thennavan.onrender.com/loveofourladiess';
          break;
        // Add more cases for additional categories if needed
        default:
          apiUrl = 'https://thennavan.onrender.com/fromfarmers';
      }

      const response = await axios.get(apiUrl);
      console.log(apiUrl);
      setProducts(response.data);
      console.log(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleEditProduct = (productId, category) => {
    const editFormUrl = `/edit-form?id=${productId}&category=${category}`;
    window.location.href = editFormUrl;  };

  const handleDeleteProduct = async (productId, category) => {
    try {
      console.log(productId);
      let apiUrl = '';

      // Set axios URL based on selected category
      switch (category) {
        case 'Farmers':
          apiUrl = 'https://thennavan.onrender.com/fromfarmers';
          break;
        case 'TasteOfOurLand':
          apiUrl = 'https://thennavan.onrender.com/tasteofourland';
          break;
        case 'loveOfOurLadies':
          apiUrl = 'https://thennavan.onrender.com/loveofourladies';
          break;
        default:
          alert(`${category}`)
      }
      const confirmDelete = window.confirm('Are you sure you want to delete this product?');
      if (confirmDelete) {
        await axios.delete(`${apiUrl}/${productId}`);
        console.log('Product deleted successfully');
        // Fetch data again after delete
        fetchData();
      }
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
            <option value="TasteOfOurLand">Taste of our land</option>
            <option value="loveOfOurLadies">Love of our ladies</option>

          {/* Add more options if needed */}
        </select>
        <button
          type="submit"
          onClick={handleSubmit}
          className="bg-black w-48 mr-4 text-white py-2 px-2 rounded-md hover:bg-white hover:text-black border border-black transition duration-50"
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
              <th className="py-2 px-4 border-b lg:table-cell md:table-cell sm:table-cell">Product Image</th>
              <th className="py-2 px-4 border-b lg:table-cell md:table-cell sm:table-cell">Product Name</th>
              <th className="py-2 px-4 border-b lg:table-cell md:table-cell sm:table-cell">Description</th>
              <th className="py-2 px-4 border-b lg:table-cell md:table-cell sm:table-cell" colSpan="3">Weight</th>
              <th className="py-2 px-4 border-b lg:table-cell md:table-cell sm:table-cell" colSpan="3">Quantity</th>
              <th className="py-2 px-4 border-b lg:table-cell md:table-cell sm:table-cell" colSpan="3">Price</th>
              <th className="py-2 px-4 border-b lg:table-cell md:table-cell sm:table-cell">Is Organic</th>
              <th className="py-2 px-4 border-b lg:table-cell md:table-cell sm:table-cell">Is Available</th>
              <th className="py-2 px-4 border-b lg:table-cell md:table-cell sm:table-cell"></th>
            </tr>
            <tr>
              <th className="py-2 px-4 border-b lg:table-cell md:table-cell sm:table-cell"></th>
              <th className="py-2 px-4 border-b lg:table-cell md:table-cell sm:table-cell"></th>
              <th className="py-2 px-4 border-b lg:table-cell md:table-cell sm:table-cell"></th>
              <th className="py-2 px-4 border-b lg:table-cell md:table-cell sm:table-cell"></th>
              <th className="py-2 px-4 border-b border-l-2 lg:table-cell md:table-cell sm:table-cell">1</th>
              <th className="py-2 px-4 border-b lg:table-cell md:table-cell sm:table-cell">2</th>
              <th className="py-2 px-4 border-b border-r-2 lg:table-cell md:table-cell sm:table-cell">3</th>
              <th className="py-2 px-4 border-b border-l-2 lg:table-cell md:table-cell sm:table-cell">1</th>
              <th className="py-2 px-4 border-b lg:table-cell md:table-cell sm:table-cell">2</th>
              <th className="py-2 px-4 border-b border-r-2 lg:table-cell md:table-cell sm:table-cell">3</th>
              <th className="py-2 px-4 border-b border-l-2 lg:table-cell md:table-cell sm:table-cell">1</th>
              <th className="py-2 px-4 border-b lg:table-cell md:table-cell sm:table-cell">2</th>
              <th className="py-2 px-4 border-b border-r-2 lg:table-cell md:table-cell sm:table-cell">3</th>
              <th className="py-2 px-4 border-b lg:table-cell md:table-cell sm:table-cell"></th>
              <th className="py-2 px-4 border-b lg:table-cell md:table-cell sm:table-cell"></th>
              <th className="py-2 px-4 border-b lg:table-cell md:table-cell sm:table-cell"></th>

            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <tr key={index}>
                <td className="py-2 px-4 border-b lg:table-cell md:table-cell sm:table-cell">{index}</td>
                <td className="py-2 px-4 border-b lg:table-cell md:table-cell sm:table-cell">
                  <img
                    src={product.productImage}
                    alt="Image Preview"
                    className="mt-2 w-32 h-32 border rounded"
                  />
                </td>
                <td className="py-2 px-4 border-b lg:table-cell md:table-cell sm:table-cell">{product.productName}</td>
                <td className="py-2 px-4 border-b lg:table-cell md:table-cell sm:table-cell">{product.description}</td>
                <td className="py-2 px-4 border-b border-l-2 text-center lg:table-cell md:table-cell sm:table-cell">{product.quantity1Unit}</td>
                <td className="py-2 px-4 border-b text-center lg:table-cell md:table-cell sm:table-cell">{product.quantity2Unit}</td>
                <td className="py-2 px-4 border-b border-r-2 text-center lg:table-cell md:table-cell sm:table-cell">{product.quantity3Unit}</td>
                <td className="py-2 px-4 border-b border-l-2 text-center lg:table-cell md:table-cell sm:table-cell">{product.quantity1}</td>
                <td className="py-2 px-4 border-b text-center lg:table-cell md:table-cell sm:table-cell">{product.quantity2}</td>
                <td className="py-2 px-4 border-b border-r-2 text-center lg:table-cell md:table-cell sm:table-cell">{product.quantity3}</td>
                <td className="py-2 px-4 border-b border-l-2 text-center lg:table-cell md:table-cell sm:table-cell">{product.price1}</td>
                <td className="py-2 px-4 border-b text-center lg:table-cell md:table-cell sm:table-cell">{product.price2}</td>
                <td className="py-2 px-4 border-b border-r-2 text-center lg:table-cell md:table-cell sm:table-cell">{product.price3}</td>
                <td className="py-2 px-4 border-b text-center lg:table-cell md:table-cell sm:table-cell">{product.isAvailableOn ? 'Yes' : 'No'}</td>
                <td className="py-2 px-4 border-b text-center lg:table-cell md:table-cell sm:table-cell">{product.isOrganic ? 'Yes' : 'No'}</td>
                <td className="py-2 px-4 border-b my-auto">
                  <button className="bg-green-500 rounded-3xl text-white py-1 px-2 mr-2" onClick={() => handleEditProduct(product._id, product.category)}>
                    Edit
                  </button>
                  <button
                    className="bg-red-500 rounded-3xl text-white py-1 px-2 mr-2"
                    onClick={() => handleDeleteProduct(product._id, product.category)}
                  >
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
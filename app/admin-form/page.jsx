"use client"
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AdminPage = () => {
  const [imageBlob, setImageBlob] = useState(null);
  useEffect(() => {
    // Check authentication status
    const authToken = localStorage.getItem('authToken');
    if (!authToken) {
      // Redirect to login page if not authenticated
      window.location.href = '/login';
    }
  }, []);

  const [imagePreview, setImagePreview] = useState(null);
  const [category, setCategory] = useState('');
  const [productName, setProductName] = useState('');
  const [description, setDescription] = useState('');
  const [quantity1, setQuantity1] = useState('');
  const [quantity1Unit, setQuantity1Unit] = useState('g');
  const [quantity1Price, setQuantity1Price] = useState('');
  const [quantity2, setQuantity2] = useState('');
  const [quantity2Unit, setQuantity2Unit] = useState('g');
  const [quantity2Price, setQuantity2Price] = useState('');
  const [quantity3, setQuantity3] = useState('');
  const [quantity3Unit, setQuantity3Unit] = useState('g');
  const [quantity3Price, setQuantity3Price] = useState('');
  const [isOrganic, setIsOrganic] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [showPopup, setShowPopup] = useState(false);

  const handleImageChange = (e) => {
    const selectedImage = e.target.files[0];

    const reader = new FileReader();
    reader.onloadend = () => {
      // setImagePreview(reader.result); // Comment this line

      // Store the image as Blob
      setImageBlob(new Blob([reader.result], { type: selectedImage.type }));
    };

    if (selectedImage) {
      reader.readAsArrayBuffer(selectedImage);
    } else {
      // setImagePreview(null); // Comment this line
      setImageBlob(null);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate form fields
    if (!imageBlob || !category || !productName || !description || !quantity1 || !quantity1Price || !quantity2 || !quantity2Price || !quantity3 || !quantity3Price) {
      alert('Please fill in all required fields, including the image');
      return;
    }

    const formData = new FormData();
    formData.append('image', imageBlob);
    formData.append('category', category);
    formData.append('productName', productName);
    formData.append('description', description);
    formData.append('quantity1', quantity1);
    formData.append('quantity1Unit', quantity1Unit);
    formData.append('quantity1Price', quantity1Price);
    formData.append('quantity2', quantity2);
    formData.append('quantity2Unit', quantity2Unit);
    formData.append('quantity2Price', quantity2Price);
    formData.append('quantity3', quantity3);
    formData.append('quantity3Unit', quantity3Unit);
    formData.append('quantity3Price', quantity3Price);
    formData.append('isOrganic', isOrganic);

    try {
      // Use Axios to make a POST request to your backend URL
      const response = await axios.post('http://localhost:3002/loveofourladies/loveofourladies', formData);

      // Handle success response
      setSuccessMessage('Product added successfully!');
      setShowPopup(true);

      // Clear the form after submission
      setImageBlob(null);
      setCategory('');
      setProductName('');
      setDescription('');
      setQuantity1('');
      setQuantity1Unit('g');
      setQuantity1Price('');
      setQuantity2('');
      setQuantity2Unit('g');
      setQuantity2Price('');
      setQuantity3('');
      setQuantity3Unit('g');
      setQuantity3Price('');
      setIsOrganic(false);
    } catch (error) {
      // Handle error here
      console.error('Error adding product:', error);
    }
  };

  return (
    <div className="container mx-auto mt-8">
      {showPopup && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-75">
          <div className="bg-white p-8 rounded shadow-md">
            <p className="text-green-600 font-bold text-lg">{successMessage}</p>
            <button
              onClick={() => setShowPopup(false)}
              className="mt-4 bg-green-500 text-white py-2 px-4 rounded-md hover:bg-white hover:text-green-500 border border-green-500 transition duration-1000"
            >
              Close
            </button>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-white p-4 md:p-8 rounded shadow-md">

        {/* Image Upload */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Upload Image</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            required
          />
          {imagePreview && (
            <img
              src={imagePreview}
              alt="Image Preview"
              className="mt-2 w-full h-auto border rounded"
            />
          )}
        </div>

        {/* Category */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Category</label>
          <select
            className="w-full p-2 border rounded"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
          >
            <option value="">Select Category</option>
            <option value="Farmers">From Farmers</option>
            <option value="Taste">Taste of our land</option>
            <option value="Love">Love of our ladies</option>
          </select>
        </div>
        {/* Product Name */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Product Name</label>
          <input
            type="text"
            className="w-full p-2 border rounded"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
            required
          />
        </div>
        {/* Description */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Description</label>
          <input
            type="text"
            className="w-full p-2 border rounded"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        {/*Quantity 1 with price */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Quantity 1</label>
          <div className="flex">
            <input
              type="number"
              className="w-1/2 p-2 border rounded mr-2"
              value={quantity1}
              onChange={(e) => setQuantity1(e.target.value)}
              required
            />
            <select
              className="w-1/2 p-2 border rounded mr-2"
              value={quantity1Unit}
              onChange={(e) => setQuantity1Unit(e.target.value)}
              required
            >
              <option value="g">g</option>
              <option value="Kg">Kg</option>
              <option value="ml">ml</option>
              <option value="liter">liter</option>
            </select>
            <input
              type="number"
              className="w-1/2 p-2 border rounded"
              placeholder="Price"
              value={quantity1Price}
              onChange={(e) => setQuantity1Price(e.target.value)}
              required
            />
          </div>
        </div>
        {/* Quantity 2 with price*/}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Quantity 2</label>
          <div className="flex">
            <input
              type="number"
              className="w-1/2 p-2 border rounded mr-2"
              value={quantity2}
              onChange={(e) => setQuantity2(e.target.value)}
              required
            />
            <select
              className="w-1/2 p-2 border rounded mr-2"
              value={quantity2Unit}
              onChange={(e) => setQuantity2Unit(e.target.value)}
              required
            >
              <option value="g">g</option>
              <option value="Kg">Kg</option>
              <option value="ml">ml</option>
              <option value="liter">liter</option>
            </select>
            <input
              type="number"
              className="w-1/2 p-2 border rounded"
              placeholder="Price"
              value={quantity2Price}
              onChange={(e) => setQuantity2Price(e.target.value)}
              required
            />
          </div>
        </div>
        {/* Quantity 3 with price*/}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Quantity 3</label>
          <div className="flex">
            <input
              type="number"
              className="w-1/2 p-2 border rounded mr-2"
              value={quantity3}
              onChange={(e) => setQuantity3(e.target.value)}
              required
            />
            <select
              className="w-1/2 p-2 border rounded mr-2"
              value={quantity3Unit}
              onChange={(e) => setQuantity3Unit(e.target.value)}
              required
            >
              <option value="g">g</option>
              <option value="Kg">Kg</option>
              <option value="ml">ml</option>
              <option value="liter">liter</option>
            </select>
            <input
              type="number"
              className="w-1/2 p-2 border rounded"
              placeholder="Price"
              value={quantity3Price}
              onChange={(e) => setQuantity3Price(e.target.value)}
              required
            />
          </div>
        </div>
        {/* Is Organic */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Is Organic</label>
          <div className="flex items-center">
            <label className="mr-2">
              <input
                type="radio"
                value="yes"
                checked={isOrganic}
                onChange={() => setIsOrganic(true)}
                className="mr-1"
              />
              Yes
            </label>
            <label>
              <input
                type="radio"
                value="no"
                checked={!isOrganic}
                onChange={() => setIsOrganic(false)}
                className="mr-1"
              />
              No
            </label>
          </div>
        </div>
        {/* Submit Button */}
        <button
          type="submit"
          className="bg-black text-white py-2 px-4 rounded-md hover:bg-white hover:text-black w-full border border-black transition duration-300"
        >
          Submit
        </button>
      </form>
      


    </div>
  );
}


export default AdminPage;

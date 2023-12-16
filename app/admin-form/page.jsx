"use client"
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AdminPage = () => {
  const [image, setImage] = useState(null);
  const [productImage, setproductImage] = useState('');
  const [category, setCategory] = useState('');
  const [productName, setProductName] = useState('');
  const [description, setDescription] = useState('');
  const [quantity1, setQuantity1] = useState('');
  const [quantity1Unit, setQuantity1Unit] = useState('g');
  const [price1, setprice1] = useState('');
  const [quantity2, setQuantity2] = useState('');
  const [quantity2Unit, setQuantity2Unit] = useState('g');
  const [price2, setprice2] = useState('');
  const [quantity3, setQuantity3] = useState('');
  const [quantity3Unit, setQuantity3Unit] = useState('g');
  const [price3, setprice3] = useState('');
  const [isOrganic, setIsOrganic] = useState(true);
  const [showPopup, setShowPopup] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  useEffect(() => {
    // Check authentication status
    const authToken = localStorage.getItem('authToken');
    if (!authToken) {
      // Redirect to login page if not authenticated
      window.location.href = '/login';
    }
  }, []);

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onloadend = () => {
        setImage(file);
        setproductImage(reader.result);
      };

      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (values) => {
    try {

      // Convert image to base64 string
      const imageBase64 = productImage.split(',')[1];

      // Add imageBase64 to values
      values.imageBase64 = imageBase64;

      
      // Make POST request using axios
      const response = await axios.post('http://localhost:3002/loveofourladies/loveofourladies', values);
      
      
      // Handle success
      setSuccessMessage(response.data.message);
      setShowPopup(true);
      alert(values.productName, " Created Successfully")
    } catch (error) {
      // Handle error
      console.error('Error submitting form:', error);
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

      <form className="max-w-md mx-auto bg-white p-4 md:p-8 rounded shadow-md">

        {/* Image Upload */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Upload Image</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
          />
          {productImage && (
            <img
              src={productImage}
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
              value={price1}
              onChange={(e) => setprice1(e.target.value)}
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
              value={price2}
              onChange={(e) => setprice2(e.target.value)}
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
              value={price3}
              onChange={(e) => setprice3(e.target.value)}
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
          onClick={() => handleSubmit({
          productImage,
          category,
          productName,
          description,
          quantity1,
          quantity1Unit,
          price1,
          quantity2,
          quantity2Unit,
          price2,
          quantity3,
          quantity3Unit,
          price3,
          isOrganic,
        })}
        >
          Submit
        </button>
      </form>



    </div>
  );
}


export default AdminPage;
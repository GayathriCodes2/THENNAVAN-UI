"use client"
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const EditForm = () => {
  const [id, setId] = useState('');
  const [image, setImage] = useState(null);
  const [productImage, setProductImage] = useState('');
  const [category, setCategory] = useState('');
  const [productName, setProductName] = useState('');
  const [description, setDescription] = useState('');
  const [quantity1, setQuantity1] = useState('');
  const [quantity1Unit, setQuantity1Unit] = useState('g');
  const [price1, setPrice1] = useState('');
  const [quantity2, setQuantity2] = useState('');
  const [quantity2Unit, setQuantity2Unit] = useState('g');
  const [price2, setPrice2] = useState('');
  const [quantity3, setQuantity3] = useState('');
  const [quantity3Unit, setQuantity3Unit] = useState('g');
  const [price3, setPrice3] = useState('');
  const [isOrganic, setIsOrganic] = useState(true);
  const [showPopup, setShowPopup] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [isAvailableOn, setIsAvailableOn] = useState('yes');

  useEffect(() => {
    const fetchData = async () => {
      const params = new URLSearchParams(window.location.search);
      const productId = params.get('id');
      const productCategory = params.get('category');
      if (productId && productCategory) {
        try {
          setId(productId);
          const apiUrl = apiUrlSwitch(productCategory);
          const response = await axios.get(`${apiUrl}/${productId}`);
          const productData = response.data;
          setProductImage(productData.productImage);
          setCategory(productData.category);
          setProductName(productData.productName);
          setDescription(productData.description);
          setQuantity1(productData.quantity1);
          setQuantity1Unit(productData.quantity1Unit);
          setPrice1(productData.price1);
          setQuantity2(productData.quantity2);
          setQuantity2Unit(productData.quantity2Unit);
          setPrice2(productData.price2);
          setQuantity3(productData.quantity3);
          setQuantity3Unit(productData.quantity3Unit);
          setPrice3(productData.price3);
          setIsOrganic(productData.isOrganic);
          setIsAvailableOn(productData.isAvailableOn);
        } catch (error) {
          console.error('Error fetching product data:', error);
        }
      }
    };

    fetchData();
  }, []);

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onloadend = () => {
        setImage(file);
        setProductImage(reader.result);
      };

      reader.readAsDataURL(file);
    }
  };

  const apiUrlSwitch = (category) => {
    let apiUrl = '';

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
        alert("Error APIURL");
    }

    return apiUrl;
  };

  const handleSubmit = async (values) => {
    try {
      const imageBase64 = productImage.split(',')[1];
      values.imageBase64 = imageBase64;
      const apiUrl = apiUrlSwitch(values.category);
      const response = await axios.put(`${apiUrl}/${id}`, values);
      setSuccessMessage(response.data.message);
      setShowPopup(true);
      alert(`${values.productName} Updated Successfully`);
    } catch (error) {
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
            <option value="TasteOfOurLand">Taste of our land</option>
            <option value="loveOfOurLadies">Love of our ladies</option>
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
              onChange={(e) => setPrice1(e.target.value)}
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
              onChange={(e) => setPrice2(e.target.value)}
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
              onChange={(e) => setPrice3(e.target.value)}
              required
            />
          </div>
        </div>
        {/* Is Organic */}
        <div className="grid grid-cols-2 gap-4">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Is Organic</label>
            <select
              className="w-1/2 p-2 px-4 border rounded"
              value={isOrganic}
              onChange={(e) => setIsOrganic(e.target.value)}
              required
            >
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Is Available</label>
            <select
              className="w-1/2 p-2 px-4 border rounded"
              value={isAvailableOn}
              onChange={(e) => setIsAvailableOn(e.target.value)}
              required
            >
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
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
            isOrganic, isAvailableOn,
          })}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default EditForm;

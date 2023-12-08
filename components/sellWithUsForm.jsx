/* eslint-disable react/no-unescaped-entities */
"use client"
import React, { useState } from 'react';

const SellWithUsForm = () => {
    const [sellerName, setSellerName] = useState('');
    const [sellerEmail, setSellerEmail] = useState('');
    const [mobileNumber, setMobileNumber] = useState('');
    const [address, setAddress] = useState('');
    const [district, setDistrict] = useState('');
    const [state, setState] = useState('');
    const [city, setCity] = useState('');
    const [pincode, setPincode] = useState('');
    const [productDetails, setProductDetails] = useState('');

    const handleMobileNumberChange = (e) => {
        const input = e.target.value.replace(/\D/g, ''); // Remove non-numeric characters
        setMobileNumber(input.slice(0, 10)); // Limit to 10 digits
    };

    const handleEmailChange = (e) => {
        setSellerEmail(e.target.value.trim()); // Remove leading and trailing whitespaces
    };

    const handlePincodeChange = (e) => {
        const input = e.target.value.replace(/\D/g, ''); // Remove non-numeric characters
        setPincode(input.slice(0, 6)); // Limit to 6 digits
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Validate mobile number format (10 digits only)
        if (mobileNumber.length !== 10) {
            alert('Please enter a valid 10-digit mobile number.');
            return;
        }
        // Validate pin code format (6 digits only)
        if (pincode.length !== 6) {
            alert('Please enter a valid 6-digit pin code.');
            return;
        }
        // Validate email format
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(sellerEmail)) {
            alert('Please enter a valid email address.');
            return;
        }

        // Collect form data
        const whatsappMessage = `
New form submission:
Name: ${sellerName}
Email: ${sellerEmail}
Mobile Number: ${mobileNumber}
Address: ${address}
City: ${city}
Pin Code: ${pincode}
District: ${district}
State: ${state}
Product Details: ${productDetails}
`;

        // Construct WhatsApp link
        const whatsappLink = `https://wa.me/9677927081?text=${encodeURIComponent(whatsappMessage)}`;

        // Open WhatsApp link in a new tab
        window.open(whatsappLink, '_blank');

        // Clear form fields after submission
        setSellerName('');
        setSellerEmail('');
        setMobileNumber('');
        setAddress('');
        setDistrict('');
        setState('');
        setCity('');
        setPincode('');
        setProductDetails('');
    };

    return (
            <div className="grid w-full grid-cols-1 sm:grid-cols-2">

                {/* Left side: Image */}
                <div className="flex-col justify-center items-center">
                <h2 className="text-2xl justify-items-center text-center font-semibold mb-2 mx-auto">Sell with Us</h2>
                <p className="text-sm text-gray-700 justify-items-center text-center mb-6 sm:mb-2 mx-auto">"Let's Grow Together"</p>
                    <img
                        src='/sell-with-us-image.png'
                        alt="Logo"
                        style={{ width: '100%', maxWidth: '500px' }}
                        className='mx-auto mt-28 sm:mt-3'
                    />
                </div>

                {/* Right side: Form */}
                <div className="max-w-xl mx-auto p-6  shadow-2xl rounded-md w-full bg-white">

                    <form onSubmit={handleSubmit} target="_blank">
                        <div className="mb-4">
                            <label htmlFor="sellerName" className="block text-sm font-medium text-gray-600">
                                Your Name <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="text"
                                id="sellerName"
                                name="sellerName"
                                value={sellerName}
                                onChange={(e) => setSellerName(e.target.value)}
                                className="mt-1 p-2 w-full border rounded-md"
                                required
                            />
                        </div>



                        <div className="grid grid-cols-2 gap-4">
                            <div className="mb-4">
                                <label htmlFor="mobileNumber" className="block text-sm font-medium text-gray-600">
                                    Mobile Number (10 digits only) <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="tel"
                                    id="mobileNumber"
                                    name="mobileNumber"
                                    value={mobileNumber}
                                    onChange={handleMobileNumberChange}
                                    className="mt-1 p-2 w-full border rounded-md"
                                    required
                                />
                            </div>

                            <div className="mb-4">
                                <label htmlFor="sellerEmail" className="block text-sm font-medium text-gray-600">
                                    Your Email
                                </label>
                                <input
                                    type="email"
                                    id="sellerEmail"
                                    name="sellerEmail"
                                    value={sellerEmail}
                                    onChange={handleEmailChange}
                                    className="mt-1 p-2 w-full border rounded-md"
                                />
                            </div>
                        </div>

                        <div className="mb-4">
                            <label htmlFor="address" className="block text-sm font-medium text-gray-600">
                                Address <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="text"
                                id="address"
                                name="address"
                                value={address}
                                onChange={(e) => setAddress(e.target.value)}
                                className="mt-1 p-2 w-full border rounded-md"
                                required
                            />
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                        <div className="mb-4">
                            <label htmlFor="city" className="block text-sm font-medium text-gray-600">
                                City <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="text"
                                id="city"
                                name="city"
                                value={city}
                                className="mt-1 p-2 w-full border rounded-md"
                                onChange={(e) => setCity(e.target.value)}
                                required
                            />
                        </div>

                        <div className="mb-4">
                            <label htmlFor="pincode" className="block text-sm font-medium text-gray-600">
                                Pin Code <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="text"
                                id="pincode"
                                name="pincode"
                                value={pincode}
                                className="mt-1 p-2 w-full border rounded-md"
                                onChange={handlePincodeChange}
                                required
                            />
                        </div>

                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div className="mb-4">
                                <label htmlFor="district" className="block text-sm font-medium text-gray-600">
                                    District <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    id="district"
                                    name="district"
                                    value={district}
                                    onChange={(e) => setDistrict(e.target.value)}
                                    className="mt-1 p-2 w-full border rounded-md"
                                    required
                                />
                            </div>

                            <div className="mb-4">
                                <label htmlFor="state" className="block text-sm font-medium text-gray-600">
                                    State <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    id="state"
                                    name="state"
                                    value={state}
                                    onChange={(e) => setState(e.target.value)}
                                    className="mt-1 p-2 w-full border rounded-md"
                                    required
                                />
                            </div>
                        </div>

                        <div className="mb-4">
                            <label htmlFor="productDetails" className="block text-sm font-medium text-gray-600">
                                Product Details <span className="text-red-500">*</span>
                            </label>
                            <textarea
                                id="productDetails"
                                name="productDetails"
                                value={productDetails}
                                onChange={(e) => setProductDetails(e.target.value)}
                                className="mt-1 p-2 w-full border rounded-md"
                                rows="3"
                                required
                            />
                        </div>

                        <button
                            type="submit"
                            className="border-black w-full border bg-black text-white my-3 hover:bg-white hover:text-black transition-all font-bold py-2 px-4 rounded">
                            Proceed
                        </button>
                    </form>
                </div>
            </div>
    );
};

export default SellWithUsForm;

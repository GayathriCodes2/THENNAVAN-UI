// components/SellWithUsForm.js
"use client"
import React, { useState } from 'react';

const SellWithUsForm = () => {
    const [sellerName, setSellerName] = useState('');
    const [sellerEmail, setSellerEmail] = useState('');
    const [mobileNumber, setMobileNumber] = useState('');
    const [address, setAddress] = useState('');
    const [district, setDistrict] = useState('');
    const [state, setState] = useState('');
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
District: ${district}
State: ${state}
Pin Code: ${pincode}
Product Details: ${productDetails}
`;

        // Construct WhatsApp link
        const whatsappLink = `https://wa.me/9092993545?text=${encodeURIComponent(whatsappMessage)}`;

        // Open WhatsApp link in a new tab
        window.open(whatsappLink, '_blank');

        // Clear form fields after submission
        setSellerName('');
        setSellerEmail('');
        setMobileNumber('');
        setAddress('');
        setDistrict('');
        setState('');
        setPincode('');
        setProductDetails('');
    };

    return (
        <div className="max-w-xl mx-auto mt-8 p-6 bg-white shadow-md rounded-md" style={{ outline: '2px solid #4CAF50' }}>
            <h2 className="text-2xl font-semibold mb-6">Sell with Us</h2>

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
                        rows="4"
                        required
                    />
                </div>

                <button
                    type="submit"
                    className="border-black border bg-black text-white w-28 hover:bg-white hover:text-black transition-all font-bold py-2 px-4 rounded">
                    Proceed
                </button>
            </form>
        </div>
    );
};

export default SellWithUsForm;

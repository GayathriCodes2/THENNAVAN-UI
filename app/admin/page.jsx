"use client"
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
const AdminPage = () => {

  const [category, setCategory] = useState('');
  const [products, setProducts] = useState([
    
    {
      category: 'Vegetables',
      name: 'Carrot',
      description: 'Orange vegetable',
      weight1: '100g',
      quantity1: 5,
      price1: 2.5,
      weight2: '200g',
      quantity2: 3,
      price2: 4.0,
      weight3: '500g',
      quantity3: 2,
      price3: 8.0,
      isOrganic: true,
  },
  {
      category: 'Fruits',
      name: 'Apple',
      description: 'Red fruit',
      weight1: '150g',
      quantity1: 4,
      price1: 3.0,
      weight2: '300g',
      quantity2: 2,
      price2: 5.0,
      weight3: '750g',
      quantity3: 1,
      price3: 10.0,
      isOrganic: false,
  },
  {
      category: 'Vegetables',
      name: 'Broccoli',
      description: 'Green vegetable',
      weight1: '120g',
      quantity1: 3,
      price1: 3.0,
      weight2: '250g',
      quantity2: 2,
      price2: 5.5,
      weight3: '600g',
      quantity3: 1,
      price3: 9.0,
      isOrganic: true,
  },
  ]);
  
    useEffect(() => {
        // Check authentication status
        const authToken = localStorage.getItem('authToken');
        if (!authToken) {
            // Redirect to login page if not authenticated
            window.location.href = '/login';
        }
    }, []);

    const handleEditProduct = (index) => {
      // Implement the logic to edit the product at the specified index
      // You can show a modal or navigate to a new page for editing the product
      console.log(`Edit Product clicked for index ${index}`);
    };
  
    const handleDeleteProduct = (index) => {
      // Implement the logic to delete the product at the specified index
      const updatedProducts = [...products];
      updatedProducts.splice(index, 1);
      setProducts(updatedProducts);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    const handleAddProduct = () => {
        // Implement the logic to add a new product
        // You can show a modal or navigate to a new page for adding a product
        console.log('Add Product clicked');
    };
    return (
        <div>

            {/* Category */}
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">Category</label>
                <select
                    className="w-56 p-2 border rounded"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    required
                >
                    <option value="">Select Category</option>
                    <option value="Farmers">From Farmers</option>
                    <option value="Taste">Taste of our land</option>
                    <option value="Love">Love of our ladies</option>
                </select>
                {/* Submit Button Below HR */}
                <button
                    type="submit"
                    onClick={handleSubmit}
                    className="bg-black w-48 mr-4 text-white py-2 px-2 rounded-md hover:bg-white hover:text-black border border-black transition duration-300"
                >
                    Submit
                </button>

            </div>
            <div className="flex justify-end">
            <Link href='/admin-form'>
                <button className="bg-black text-white py-2 px-4 mb-4" onClick={handleAddProduct}>
                    Add Product
                </button>
                </Link>
            </div>

            <div className="container mx-auto p-4 mt-8 overflow-x-auto">
                <table className="min-w-full bg-white border border-gray-300">
                    <thead>
                        <tr>
                            <th className="py-2 px-4 border-b lg:table-cell md:table-cell sm:table-cell">Category</th>
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
                                <td className="py-2 px-4 border-b lg:table-cell md:table-cell sm:table-cell">{product.category}</td>
                                <td className="py-2 px-4 border-b lg:table-cell md:table-cell sm:table-cell">{product.name}</td>
                                <td className="py-2 px-4 border-b lg:table-cell md:table-cell sm:table-cell">{product.description}</td>
                                <td className="py-2 px-4 border-b lg:table-cell md:table-cell sm:table-cell">{product.weight1}</td>
                                <td className="py-2 px-4 border-b lg:table-cell md:table-cell sm:table-cell">{product.weight2}</td>
                                <td className="py-2 px-4 border-b lg:table-cell md:table-cell sm:table-cell">{product.weight3}</td>
                                <td className="py-2 px-4 border-b lg:table-cell md:table-cell sm:table-cell">{product.quantity1}</td>
                                <td className="py-2 px-4 border-b lg:table-cell md:table-cell sm:table-cell">{product.quantity2}</td>
                                <td className="py-2 px-4 border-b lg:table-cell md:table-cell sm:table-cell">{product.quantity3}</td>
                                <td className="py-2 px-4 border-b lg:table-cell md:table-cell sm:table-cell">{product.price1}</td>
                                <td className="py-2 px-4 border-b lg:table-cell md:table-cell sm:table-cell">{product.price2}</td>
                                <td className="py-2 px-4 border-b lg:table-cell md:table-cell sm:table-cell">{product.price3}</td>
                                <td className="py-2 px-4 border-b lg:table-cell md:table-cell sm:table-cell">{product.isOrganic ? 'Yes' : 'No'}</td>
                                <td className="py-2 px-4 border-b my-auto">
                <button className="bg-green-500 rounded-3xl text-white py-1 px-2 mr-2" onClick={() => handleEditProduct(index)}>
                          Edit
                </button>
                <button className="bg-red-500 rounded-3xl text-white py-1 px-2 mr-2" onClick={() => handleDeleteProduct(index)}>
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

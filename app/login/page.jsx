"use client";

import { useState } from "react";
import Link from "next/link";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [category, setCategory] = useState(""); // New state for category
  const [error, setError] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    if (username === "admin" && password === "admin") {
      // Successful login logic (set authentication state)
      localStorage.setItem('authToken', 'ghjsfjdfweufhnjsdnjfsdfj');
      console.log("Login successful");
      setLoggedIn(true);
    } else {
      setError("Invalid username or password");
      // Reset input fields on error
      setUsername("");
      setPassword("");
    }
  };

  return (
    <div className="flex items-center justify-center lg:h-screen">
      <div className="w-96 p-8 bg-white rounded shadow-2xl">
        <h1 className="text-2xl font-bold mb-4">Login</h1>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">Username:</label>
          <input
            type="text"
            className="mt-1 p-2 w-full border rounded-md"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-600">Password:</label>
          <input
            type="password"
            className="mt-1 p-2 w-full border rounded-md"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        
        {loggedIn ? (
          <Link href="/admin">
            <span className="bg-black text-white py-2 px-4 w-full rounded-md hover:bg-white hover:text-black border border-black transition duration-300">
              Go To Admin page
            </span>
          </Link>
        ) : (
          <button
            className="bg-black text-white py-2 px-4 rounded-md hover:bg-white hover:text-black w-full border border-black transition duration-300"
            onClick={handleLogin}
          >
            Login
          </button>
        )}
      </div>
    </div>
  );
};

export default LoginPage;

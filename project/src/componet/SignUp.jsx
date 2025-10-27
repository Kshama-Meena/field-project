// src/components/Signup.jsx
import React, { useState } from "react";
import { Leaf, UserPlus } from "lucide-react";

const Signup = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };

  const handleSignup = (e) => {
    e.preventDefault();
    console.log("Signing up with:", form);
    // Actual signup logic yahan aayega (API call, validation, etc.)
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white p-8 md:p-10 rounded-xl shadow-2xl">
        
        {/* 🌿 Double Leaf Logo */}
      <div className="relative flex items-center justify-center mb-6">
  {/* Left Leaf */}
  <Leaf className="w-10 h-10 text-green-600 transform rotate-[-35deg] translate-x-[4px] translate-y-[2px]" />
  
  {/* Right Leaf */}
  <Leaf className="w-10 h-10 text-green-500 transform rotate-[35deg] -translate-x-[4px] translate-y-[2px]" />

  {/* Optional stem (thin line for realism) */}
  <div className="absolute bottom-0 w-[2px] h-3 bg-green-700 rounded-full"></div>
</div>


        {/* Heading */}
        <h1 className="text-3xl md:text-4xl font-extrabold text-center mb-2 text-green-600">
          Create Account
        </h1>
        <p className="text-center text-gray-500 mb-8">
          Join us and start shopping fresh today 🌿
        </p>

        {/* Signup Form */}
        <form onSubmit={handleSignup}>
          {/* Full Name */}
          <div className="mb-4">
            <label htmlFor="name" className="sr-only">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Full Name"
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition duration-150 text-gray-700"
            />
          </div>

          {/* Email */}
          <div className="mb-4">
            <label htmlFor="email" className="sr-only">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Email Address"
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition duration-150 text-gray-700"
            />
          </div>

          {/* Password */}
          <div className="mb-4">
            <label htmlFor="password" className="sr-only">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={form.password}
              onChange={handleChange}
              placeholder="Password"
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition duration-150 text-gray-700"
            />
          </div>

          {/* Confirm Password */}
          <div className="mb-6">
            <label htmlFor="confirmPassword" className="sr-only">
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              value={form.confirmPassword}
              onChange={handleChange}
              placeholder="Confirm Password"
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition duration-150 text-gray-700"
            />
          </div>

          {/* Signup Button */}
          <button
            type="submit"
            className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 rounded-lg transition duration-200 shadow-lg flex items-center justify-center space-x-2"
          >
            <UserPlus className="w-5 h-5" />
            <span>Sign Up</span>
          </button>
        </form>

        {/* Login Redirect */}
        <p className="text-center mt-4 text-sm text-gray-600">
          Already have an account?
          <a
            href="/login"
            className="ml-1 font-semibold text-green-600 hover:text-green-700 transition duration-150"
          >
            Log In
          </a>
        </p>
      </div>
    </div>
  );
};

export default Signup;

// src/components/Signup.jsx
import React, { useState } from "react";
import { Leaf, UserPlus } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

const Signup = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };

  const handleSignup = async (e) => {
    e.preventDefault();

    if (form.password !== form.confirmPassword) {
      toast.error("Passwords do not match ❌", {
        style: {
          borderRadius: "10px",
          background: "#f87171",
          color: "#fff",
        },
      });
      return;
    }

    setLoading(true);
    try {
      const res = await axios.post("http://localhost:5000/api/signup", form);

      toast.success(res.data.message || "Signup successful 🎉", {
        style: {
          borderRadius: "10px",
          background: "#333",
          color: "#fff",
        },
      });

           setTimeout(() => navigate("/"), 1000); // chhoti delay se smooth transition

    } catch (err) {
      console.error("Signup Error:", err);
      toast.error(err.response?.data?.message || "Signup failed ❌", {
        style: {
          borderRadius: "10px",
          background: "#f87171",
          color: "#fff",
        },
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="w-full max-w-5xl bg-white rounded-2xl shadow-2xl flex flex-col md:flex-row overflow-hidden">
        {/* Left Side - Form */}
        <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
          {/* Logo */}
          <div className="flex items-end justify-center mb-6 relative">
            <Leaf className="w-10 h-10 text-green-600 rotate-[-25deg] translate-y-1" />
            <Leaf className="w-10 h-10 text-green-500 rotate-[25deg] -translate-y-0.5 -ml-2" />
          </div>

          <h1 className="text-3xl md:text-4xl font-extrabold text-center mb-2 text-gray-800">
            Create Account
          </h1>
          <p className="text-center text-gray-500 mb-8">
            Join us and start shopping fresh 🌿
          </p>

          <form onSubmit={handleSignup}>
            <input
              type="text"
              id="name"
              placeholder="Full Name"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full p-3 mb-4 border border-gray-300 rounded-full focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none"
            />
            <input
              type="email"
              id="email"
              placeholder="Email Address"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full p-3 mb-4 border border-gray-300 rounded-full focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none"
            />
            <input
              type="password"
              id="password"
              placeholder="Password"
              value={form.password}
              onChange={handleChange}
              required
              className="w-full p-3 mb-4 border border-gray-300 rounded-full focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none"
            />
            <input
              type="password"
              id="confirmPassword"
              placeholder="Confirm Password"
              value={form.confirmPassword}
              onChange={handleChange}
              required
              className="w-full p-3 mb-6 border border-gray-300 rounded-full focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none"
            />

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-black text-white py-3 rounded-full font-semibold hover:bg-gray-800 transition duration-200 flex justify-center items-center space-x-2"
            >
              <UserPlus className="w-5 h-5" />
              <span>{loading ? "Signing up..." : "Sign Up"}</span>
            </button>
          </form>

          <p className="text-center mt-8 text-sm text-gray-600">
            Already have an account?{" "}
            <Link to="/login" className="font-semibold text-green-600 hover:text-green-700">
              Login Now
            </Link>
          </p>
        </div>

        {/* Right Side - Image */}
        <div className="hidden md:block md:w-1/2">
          <img
            src="login.jpg"
            alt="Signup Visual"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Signup;

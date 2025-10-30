import React, { useState } from "react";
import { FaHeart, FaStar, FaShoppingCart, FaTimes } from "react-icons/fa";
import { useLike } from "./LikeContext";
import { Link } from "react-router-dom";

export default function Wishlist() {
  const { likedItems, toggleLike } = useLike();
  const [sortBy, setSortBy] = useState("price-low");

  // ✅ Sorting logic
  const sortedProducts = [...likedItems].sort((a, b) => {
    if (sortBy === "price-low") return a.price - b.price;
    if (sortBy === "price-high") return b.price - a.price;
    if (sortBy === "name-asc") return a.name.localeCompare(b.name);
    return 0;
  });

  if (!likedItems.length) {
    return (
      <div className="text-center mt-10 p-8 text-gray-600">
       <div className="text-center mt-16">
          <p className="text-gray-600 text-lg mb-4">Your cart is empty.</p>
          <Link
            to="/"
            className="inline-block bg-teal-700 text-white px-6 py-3 rounded-full hover:bg-teal-800 transition"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f2fcf6] py-10">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="pt-9 pb-12 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
          <div className="flex items-center gap-6">
            <h1 className="text-4xl font-extrabold text-[#333]">Your Wishlist</h1>
            <span className="font-semibold text-gray-700">
              {likedItems.length} Items
            </span>
          </div>

          <div className="flex items-center gap-4">
            <button className="bg-[#ffc300] hover:bg-[#ffb300] text-gray-800 font-semibold py-2 px-4 rounded-full shadow-md transition duration-300 text-sm">
              Add All to Cart
            </button>

            <div className="text-gray-600 flex items-center gap-2">
              <label htmlFor="sort" className="font-medium">
                Sort By:
              </label>
              <select
                id="sort"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-transparent border-b border-gray-400 py-1 text-sm focus:outline-none cursor-pointer"
              >
                <option value="price-low">Price Low to High</option>
                <option value="price-high">Price High to Low</option>
                <option value="name-asc">Name A-Z</option>
              </select>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {sortedProducts.map((product) => (
            <div key={`${product.category}-${product.id}`}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 relative border border-gray-100 p-2"
            >
              {/* Remove from wishlist button */}
              <button
                onClick={() => toggleLike(product)}
                className="absolute right-4 top-4 text-xl text-red-500 hover:text-red-700 z-10 p-1 transition-transform duration-300"
                title="Remove from Wishlist"
              >
                <FaTimes />
              </button>

              {/* Product Image */}
              <div className="w-full h-44 flex items-center justify-center overflow-hidden py-4">
                <img
                  src={product.image}
                  alt={product.name}
                  className="max-w-[70%] max-h-full object-contain"
                />
              </div>

              {/* Product Details */}
              <div className="p-4 pt-1 text-center">
                {/* Rating */}
                <div className="flex justify-center mb-2">
                  {[...Array(5)].map((_, i) => (
                    <span
                      key={i}
                      className={`text-lg ${
                        i < product.rating ? "text-[#ffd700]" : "text-gray-300"
                      }`}
                    >
                      <FaStar />
                    </span>
                  ))}
                </div>

                {/* Name & Price */}
                <h3 className="text-lg font-semibold text-gray-800 mb-1">
                  {product.name}
                </h3>
                <p className="text-xl text-[#e74c3c] font-bold mb-4">
                  ₹{product.price}
                </p>

                {/* Add to Cart Button */}
                <button className="bg-yellow-400 hover:bg-yellow-500 text-white font-semibold py-2 px-5 rounded-full flex items-center justify-center gap-2 mx-auto transition-transform duration-300 group-hover:scale-105">
                                Add to Cart <FaShoppingCart />
                              </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

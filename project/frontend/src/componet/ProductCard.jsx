// src/components/ProductCard.jsx
import React, { useState } from "react";
import { FaHeart, FaRegHeart, FaShoppingCart } from "react-icons/fa";
import { motion } from "framer-motion";

export default function ProductCard({
  product,
  toggleLike,
  isLiked,
  addToCart,
  user,
}) {
  const [weight, setWeight] = useState("1kg");

  const handleAddToCart = () => {
    if (!user) {
      alert("Please login first!");
      return;
    }

    addToCart({
      ...product,
      selectedWeight: weight,
      price: product.prices?.[weight] || product.price || 0,
      quantity: 1,
    });
  };

  return (
    <motion.div
      className="bg-white rounded-2xl shadow-md p-6 text-center relative hover:shadow-xl transition-all duration-300 group border border-gray-100 overflow-hidden"
      whileHover={{ scale: 1.03, y: -5 }}
    >
      {/* Like Button */}
      <button
        onClick={() => toggleLike(product)}
        className="absolute right-4 top-4 text-2xl z-10 transition-transform hover:scale-125"
      >
        {isLiked(product._id) ? (
          <FaHeart className="text-red-500 drop-shadow" />
        ) : (
          <FaRegHeart className="text-gray-400 hover:text-red-400" />
        )}
      </button>

      {/* Image */}
      <img
        src={product.image?.trim() || "https://via.placeholder.com/140?text=Product"}
        alt={product.name}
        className="w-36 h-36 object-contain mx-auto mt-2 transition-transform duration-300 group-hover:scale-110"
        onError={(e) => (e.target.src = "https://via.placeholder.com/140?text=Image+Error")}
      />

      {/* Name */}
      <h3 className="mt-4 text-lg font-semibold text-gray-800 truncate">
        {product.name}
      </h3>

      {/* Description */}
      <p className="text-sm text-gray-500 mt-1">
        {product.text || "Fresh & Organic"}
      </p>

      {/* Weight Selector */}
      <div className="flex justify-center gap-3 mt-4">
        {Object.keys(product.prices || {}).length > 0 ? (
          Object.keys(product.prices).map((w) => (
            <button
              key={w}
              onClick={() => setWeight(w)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
                weight === w
                  ? "bg-green-600 text-white shadow-md"
                  : "bg-gray-100 text-gray-700 hover:bg-green-100"
              }`}
            >
              {w}
            </button>
          ))
        ) : (
          <span className="text-sm text-gray-500">No weights available</span>
        )}
      </div>

      {/* Price */}
      <p className="mt-4 text-2xl font-bold text-green-700">
        ₹{product.prices?.[weight] || product.price || "N/A"}
      </p>

      {/* Add to Cart Button */}
      <button
        onClick={handleAddToCart}
        className="mt-5 bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold py-2.5 px-6 rounded-full flex items-center justify-center gap-2 mx-auto transition-all duration-300 shadow-md hover:shadow-lg hover:scale-105"
      >
        Add to Cart <FaShoppingCart className="text-lg" />
      </button>
    </motion.div>
  );
}
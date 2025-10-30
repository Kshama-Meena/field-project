import React, { useState } from "react";
import { FaShoppingCart, FaHeart, FaStar } from "react-icons/fa";
import { useLike } from "./LikeContext";// ✅ Import cart context
import { motion } from "framer-motion";
import { useCart } from "./CartContext";

const productsData = {
  "Fresh Fruits": [
    { id: 1, category: "Fruits", name: "The Bananas", price: 122, rating: 4, image: "./Banana.jpg" },
    { id: 2, category: "Fruits", name: "Fresh Watermelon", price: 722, rating: 1, image: "./Watermelon.jpg" },
    { id: 3, category: "Fruits", name: "Fresh Apple", price: 962, rating: 4, image: "./Apple.jpg" },
    { id: 4, category: "Fruits", name: "The Cherry Bunch", price: 70, rating: 4, image: "./cherry.jpg" },
  ],
  "Fresh Vegetables": [
    { id: 6, category: "Vegetables", name: "Strawberries", price: 540, rating: 5, image: "./stroberi.jpg" },
  ],
  "Top Selling": [
    { id: 7, category: "Top Selling", name: "Mango", price: 400, rating: 5, image: "./mango.jpg" },
  ],
};

export default function TopProducts() {
  const [activeTab, setActiveTab] = useState("Fresh Fruits");
  const { toggleLike, isLiked } = useLike();
  const { addToCart } = useCart(); // ✅ Cart context se addToCart function lo
  const [hint, setHint] = useState("");
  // const { addToCart } = useCart();

  // ✅ Hint message show karne ke liye ek helper function
  const showHint = (msg) => {
    setHint(msg);
    setTimeout(() => setHint(""), 1500);
  };

  return (
    <div className="w-full px-4 sm:px-6 md:px-12 lg:px-20 py-12 bg-green-50 relative">
      <h2 className="text-4xl sm:text-5xl font-bold text-center mb-10">
        Top Products
      </h2>

      {/* ✅ Hint Message */}
      {hint && (
        <div className="absolute top-4 left-1/2 -translate-x-1/2 bg-green-600 text-white px-6 py-2 rounded-lg shadow-lg z-50">
          {hint}
        </div>
      )}

      {/* ✅ Tabs */}
      <div className="flex flex-wrap justify-center gap-6 sm:gap-10 mb-12">
        {Object.keys(productsData).map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`pb-2 text-lg font-semibold transition-all ${
              activeTab === tab
                ? "text-green-600 border-b-4 border-green-600"
                : "text-gray-500 hover:text-green-600"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* ✅ Product Cards */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {productsData[activeTab].map((product) => (
          <motion.div
            key={product.id}
            className="bg-white rounded-2xl shadow-lg overflow-hidden relative hover:shadow-2xl transition-all duration-300 group"
            whileHover={{ scale: 1.03 }}
          >
            {/* ❤️ Like Button */}
            <button
              onClick={() => {
                toggleLike(product);
                showHint(
                  isLiked(product)
                    ? "Removed from wishlist 💔"
                    : "Added to wishlist ❤️"
                );
              }}
              className="absolute right-3 top-3 text-xl z-10 transition-transform duration-300 hover:scale-125"
            >
              <FaHeart
                className={`${
                  isLiked(product)
                    ? "text-red-500"
                    : "text-gray-400 hover:text-red-400"
                }`}
              />
            </button>

            {/* 🖼 Image */}
            <div className="w-full h-56 bg-gray-50 flex items-center justify-center overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="w-36 h-36 object-contain mx-auto mt-4 transition-transform duration-300 group-hover:scale-110"
              />
            </div>

            {/* ℹ Info */}
            <div className="p-6 text-center">
              <div className="flex justify-center mb-2">
                {[...Array(5)].map((_, i) => (
                  <span
                    key={i}
                    className={`text-xl ${
                      i < product.rating ? "text-yellow-400" : "text-gray-300"
                    }`}
                  >
                    <FaStar />
                  </span>
                ))}
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-1">
                {product.name}
              </h3>
              <p className="text-yellow-600 font-semibold text-lg mb-4">
                ₹{product.price}
              </p>

              {/* 🛒 Add to Cart Button */}
              
           <button
            onClick={() => addToCart(product)}
            className="mt-3 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition"
          >
            Add to Cart
          </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

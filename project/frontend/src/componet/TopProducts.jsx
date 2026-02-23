import React, { useState, useEffect } from "react";
import { FaHeart, FaRegHeart, FaShoppingCart } from "react-icons/fa";
import { motion } from "framer-motion";
import axios from "axios";
import { useLike } from "./context/LikeContext";
import { useCart } from "./context/CartContext";
import { useAuth } from "./context/AuthContext";

export default function TopProducts() {
  const [activeTab, setActiveTab] = useState("fruit");
  const [products, setProducts] = useState([]);
  const { toggleLike, isLiked } = useLike();
  const { addToCart } = useCart();
  const { user } = useAuth();

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/products")
      .then((res) => setProducts(res.data))
      .catch((err) => console.log(err));
  }, []);

  const tabs = [
    { label: "Fresh Fruits", key: "fruit" },
    { label: "Fresh Vegetables", key: "vegetable" },
  ];

  const filteredProducts = products.filter(
    (p) => p.category === activeTab
  );

  return (
    <div className="w-full px-6 py-12 bg-green-50">
      <h2 className="text-4xl font-bold text-center mb-10">Top Products</h2>

      {/* Tabs */}
      <div className="flex justify-center gap-6 mb-8">
        {tabs.map(({ label, key }) => (
          <button
            key={key}
            onClick={() => setActiveTab(key)}
            className={`pb-2 text-lg font-semibold ${
              activeTab === key
                ? "text-green-600 border-b-4 border-green-600"
                : "text-gray-500 hover:text-green-600"
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      {/* Products */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {filteredProducts.slice(0, 4).map((product) => (
          <ProductCard
            key={product._id}
            product={product}
            toggleLike={toggleLike}
            isLiked={isLiked}
            addToCart={addToCart}
            user={user}
          />
        ))}
      </div>
    </div>
  );
}

/* ================= PRODUCT CARD ================= */

function ProductCard({ product, toggleLike, isLiked, addToCart, user }) {
  const [weight, setWeight] = useState("1kg");

  return (
    <motion.div
      className="bg-white rounded-2xl shadow-md p-6 text-center relative hover:shadow-lg transition-all duration-300"
      whileHover={{ scale: 1.03 }}
    >
      {/* Like */}
      <button
        onClick={() => toggleLike(product)}
        className="absolute right-3 top-3 text-2xl"
      >
        {isLiked(product._id) ? (
          <FaHeart className="text-red-500" />
        ) : (
          <FaRegHeart className="text-gray-400 hover:text-red-400" />
        )}
      </button>

      {/* Image (Cloudinary fix) */}
      <img
        src={product.image}
        alt={product.name}
        className="w-36 h-36 object-contain mx-auto mt-4"
      />

      {/* Name */}
      <h3 className="mt-4 text-lg font-semibold text-gray-800">
        {product.name}
      </h3>

      {/* Text */}
      <p className="text-sm text-gray-500">{product.text}</p>

      {/* Weight selector */}
      <div className="flex justify-center gap-3 mt-4">
        {["500g", "1kg"].map((w) => (
          <button
            key={w}
            onClick={() => setWeight(w)}
            className={`px-4 py-1 rounded-full text-sm font-semibold transition ${
              weight === w
                ? "bg-green-600 text-white"
                : "bg-gray-200 text-gray-700 hover:bg-green-100"
            }`}
          >
            {w}
          </button>
        ))}
      </div>

      {/* Price */}
      <p className="mt-3 text-xl font-bold text-yellow-600">
        ₹{product.prices[weight]}
      </p>

      {/* Add to Cart */}
      <button
        onClick={() => {
          if (!user) {
            alert("Please login first!");
            return;
          }

          addToCart({
            ...product,
            selectedWeight: weight,
            price: product.prices[weight],
          });
        }}
        className="mt-4 bg-yellow-400 hover:bg-yellow-500 text-white font-semibold py-2 px-6 rounded-full flex items-center gap-2 mx-auto"
      >
        Add to Cart <FaShoppingCart />
      </button>
    </motion.div>
  );
}

import React, { useState, useEffect } from "react";
import { FaHeart, FaRegHeart, FaShoppingCart } from "react-icons/fa";
import { motion } from "framer-motion";
import axios from "axios";
import { useLike } from "./context/LikeContext";
import { useCart } from "./context/CartContext";
import { useAuth } from "./context/AuthContext";
import ProductCard from "./ProductCard";
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
      <div className="max-w-8xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
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



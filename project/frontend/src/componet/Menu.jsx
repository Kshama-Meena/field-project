import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaShoppingCart, FaLeaf, FaArrowRight } from "react-icons/fa"; // Added FaLeaf & FaArrowRight
import { motion } from "framer-motion"; // Added motion import
import { useAuth } from "./context/AuthContext";
import { useCart } from "./context/CartContext";
import { useLike } from "./context/LikeContext";
import ProductCard from "./ProductCard";

export default function Menu() {
  const [fruits, setFruits] = useState([]);
  const [vegetables, setVegetables] = useState([]);
  const { addToCart } = useCart();
  const { user } = useAuth();
  const { setCartCount } = useCart();
  const { toggleLike, isLiked } = useLike();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/products");

        const all = res.data;

        setFruits(all.filter((p) => p.category === "fruit"));
        setVegetables(all.filter((p) => p.category === "vegetable"));
      } catch (error) {
        console.log("PRODUCT FETCH ERROR:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative w-full h-[90vh] lg:h-screen overflow-hidden bg-slate-900">
        {/* Background Image with Parallax-like fix */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-1000 scale-105"
          style={{
            // High quality image for better clarity
            backgroundImage:
              "url('https://png.pngtree.com/thumb_back/fh260/background/20240720/pngtree-a-vibrant-mix-of-fresh-produce-including-colorful-vegetables-and-fruits-image_16017533.jpg')",
          }}
        >
          {/* Modern Gradient Overlay: Left side dark for text, right side clearer for image */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>
        </div>

        {/* Content Container */}
        <div className="relative z-10 flex items-center h-full px-6 md:px-16 lg:px-24">
          <div className="max-w-3xl text-left">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-full w-fit mb-6"
            >
              <FaLeaf className="text-green-400" />
              <span className="text-white text-xs md:text-sm font-bold uppercase tracking-[0.2em]">
                Direct From Local Farms
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-[1.1]"
            >
              Eat Fresh, <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-500">
                Live Organic
              </span>
            </motion.h1>

            {/* Subtext */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mt-6 text-gray-300 text-lg md:text-xl max-w-xl leading-relaxed"
            >
              Experience the true taste of nature with our handpicked,
              pesticide-free vegetables delivered straight to your doorstep
              within 24 hours.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="mt-10 flex flex-wrap gap-4"
            >
              <button className="group px-8 py-4 bg-green-600 hover:bg-green-500 text-white font-bold rounded-2xl shadow-xl shadow-green-900/20 transition-all flex items-center gap-3">
                Explore Menu
                <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
              </button>

              <button className="px-8 py-4 bg-white/10 backdrop-blur-md border border-white/30 text-white font-bold rounded-2xl hover:bg-white/20 transition-all">
                Watch Story
              </button>
            </motion.div>

            {/* Floating Stats Card (Optional UI Element) */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="mt-12 flex gap-8 border-t border-white/10 pt-8"
            >
              <div>
                <p className="text-3xl font-bold text-white">50+</p>
                <p className="text-gray-400 text-sm">Farm Partners</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-white">10k+</p>
                <p className="text-gray-400 text-sm">Happy Families</p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Decorative Bottom Blur */}
        <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-slate-950 to-transparent"></div>
      </section>

      {/* Product Section */}
      <div className="bg-[#f0fdf4] min-h-screen py-12 px-6">
        {/* ⭐ VEGETABLES SECTION */}
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
          Fresh <span className="text-green-600">Vegetables</span>
        </h2>

        <div className="max-w-8xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {vegetables.slice(0, 4).map((item) => (
            <ProductCard
              key={item._id}
              product={item}
              toggleLike={toggleLike}
              isLiked={isLiked}
              addToCart={addToCart}
              user={user}
            />
          ))}
        </div>

        {/* ⭐ FRUITS SECTION */}
        <h2 className="text-3xl font-bold text-gray-800 mt-16 mb-8 text-center">
          Juicy <span className="text-yellow-600">Fruits</span>
        </h2>

        <div className="max-w-8xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {fruits.slice(0, 4).map((item) => (
            <ProductCard
              key={item._id}
              product={item}
              toggleLike={toggleLike}
              isLiked={isLiked}
              addToCart={addToCart}
              user={user}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
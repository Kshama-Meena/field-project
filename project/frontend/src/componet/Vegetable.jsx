import React, { useState, useEffect } from "react";
import axios from "axios";
import { useLike } from "./context/LikeContext";
import { motion } from "framer-motion";
import { FaRegHeart, FaShoppingCart, FaHeart } from "react-icons/fa";
import { useCart } from "./context/CartContext";
import { useAuth } from "./context/AuthContext";
import ProductCard from "./ProductCard";
function Vegetable() {
  const [products1, setProducts1] = useState([]);

  const { toggleLike, isLiked } = useLike();
  const { addToCart } = useCart();
  const { user } = useAuth();

  // Fetch vegetable category products from database
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/products");

        // Filter only vegetable category items
        const vegData = res.data.filter(
          item => item.category?.toLowerCase() === "vegetable"
        );

        setProducts1(vegData);
      } catch (error) {
        console.log("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="bg-gray-50">

      {/* Hero Section */}
     <section className="relative overflow-hidden">
        {/* Subtle background pattern / texture */}
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(34,197,94,0.08)_0%,transparent_50%)]"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-16 md:py-24 lg:py-32">
          <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16 xl:gap-20">
            {/* Left - Text + trust signals */}
            <div className="lg:w-1/2 text-center lg:text-left space-y-7 lg:space-y-10">
              <div className="inline-flex items-center px-4 py-2 bg-emerald-100/70 text-emerald-800 rounded-full text-sm font-medium mb-2">
                <span className="mr-2">🌱</span> 100% Organic • Farm Direct
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-gray-900 tracking-tight leading-none">
                Fresh From Farm
                <span className="block text-emerald-600 mt-2 lg:mt-4">To Your Table</span>
              </h1>

              <p className="text-lg sm:text-xl text-gray-700 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                Daily harvested, naturally grown vegetables — no chemicals, no middlemen, just pure farm-fresh goodness delivered to your door.
              </p>

              <div className="flex flex-wrap gap-5 justify-center lg:justify-start pt-4">
                <button className="group bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-xl shadow-emerald-200/40 transition-all duration-300 flex items-center gap-3 hover:shadow-emerald-300/50 hover:-translate-y-0.5">
                  Shop Fresh Vegetables
                  <span className="text-2xl group-hover:scale-125 group-hover:rotate-12 transition-transform">🥬</span>
                </button>

                <button className="px-8 py-4 rounded-full border-2 border-emerald-600 text-emerald-700 hover:bg-emerald-50 font-semibold text-lg transition-all duration-300 hover:shadow-md">
                  Explore All Produce →
                </button>
              </div>

              {/* Mini trust badges */}
              <div className="flex flex-wrap gap-6 justify-center lg:justify-start pt-6 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <span className="text-green-600 text-xl">✓</span> Pesticide-Free
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-green-600 text-xl">✓</span> Locally Sourced
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-green-600 text-xl">✓</span> Same-Day Delivery
                </div>
              </div>
            </div>

            {/* Right - Hero Image with overlay flair */}
            <div className="lg:w-1/2 relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-emerald-900/15 border border-emerald-100/60">
                <img
                  src="https://res.cloudinary.com/ds8w1kut5/image/upload/v1766763411/vegi_dj5nwi.png"
                  alt="Fresh organic vegetables straight from the farm"
                  className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-1000 ease-out"
                />
                {/* Floating accent badge */}
                <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-sm px-5 py-3 rounded-full shadow-lg text-emerald-700 font-medium text-sm flex items-center gap-2">
                  <span>Harvested Today</span>
                  <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                </div>
              </div>

              {/* Decorative floating elements */}
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-emerald-300/20 rounded-full blur-3xl -z-10 animate-[float_12s_ease-in-out_infinite]"></div>
              <div className="absolute -top-12 -right-12 w-56 h-56 bg-lime-200/10 rounded-full blur-3xl -z-10 animate-[float_15s_ease-in-out_infinite_3s]"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Products List */}
      <div className="bg-[#f0fdf4] py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-8xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
          {products1.map((item) => (
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

export default Vegetable;

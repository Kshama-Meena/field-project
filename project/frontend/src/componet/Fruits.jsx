import { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { FaLeaf, FaArrowRight } from "react-icons/fa"; 
import { useLike } from "./context/LikeContext";
import { useCart } from "./context/CartContext";
import { useAuth } from "./context/AuthContext";
import ProductCard from "./ProductCard";

function Fruits() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { toggleLike, isLiked } = useLike();
  const { addToCart } = useCart();
  const { user } = useAuth();

  useEffect(() => {
    setLoading(true);
    axios
      .get("http://localhost:5000/api/products")
      .then((res) => {
        const fruitProducts = res.data.filter((item) => item.category === "fruit");
        setProducts(fruitProducts);
        setLoading(false);
      })
      .catch((err) => {
        console.log("Error fetching fruits:", err);
        setLoading(false);
      });
  }, []);

  return (
    <>
      {/* Hero Section - Content Aligned to LEFT */}
      <section className="relative w-full h-[90vh] lg:h-screen overflow-hidden bg-slate-900">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-1000 scale-105"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1619566636858-adf3ef46400b?q=80&w=2000&auto=format&fit=crop')",
          }}
        >
          {/* Left-focused Gradient Overlay (Right side remains clearer for image) */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>
        </div>

        {/* Content Container - items-center (vertical) but no justify-center (horizontal) */}
        <div className="relative z-10 flex items-center h-full px-6 md:px-16 lg:px-24">
          <div className="max-w-3xl text-left">
            
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-full w-fit mb-6"
            >
              <FaLeaf className="text-yellow-400" />
              <span className="text-white text-xs md:text-sm font-bold uppercase tracking-[0.2em]">
                100% Organic & Seasonal
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-[1.1]"
            >
              Naturally <span className="text-yellow-400 font-extrabold italic">Sweet</span> <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-500">
                Freshly Handpicked
              </span>
            </motion.h1>

            {/* Subtext */}
            <motion.p
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="mt-6 text-gray-200 text-lg md:text-xl max-w-xl leading-relaxed font-medium"
            >
              Experience the finest seasonal produce. Farm-to-kitchen freshness 
              with guaranteed organic quality and nature's original taste.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="mt-10 flex flex-wrap gap-4"
            >
              <button className="group px-8 py-4 bg-green-600 hover:bg-green-500 text-white font-bold rounded-2xl shadow-xl shadow-green-900/20 transition-all flex items-center gap-3">
                Shop Fresh Today
                <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
              </button>

              <button className="px-8 py-4 bg-white/10 backdrop-blur-md border border-white/30 text-white font-bold rounded-2xl hover:bg-white/20 transition-all">
                Learn About Our Farms
              </button>
            </motion.div>

            {/* Floating Stats - Left Aligned */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="mt-12 flex gap-12 border-t border-white/10 pt-8"
            >
              <div>
                <p className="text-3xl font-bold text-white">25+</p>
                <p className="text-gray-400 text-sm">Fruit Varieties</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-white">100%</p>
                <p className="text-gray-400 text-sm">Pesticide Free</p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Decorative Bottom Blur */}
        <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-[#f0fdf4] to-transparent"></div>
      </section>

      {/* Products Section */}
      <div className="bg-[#f0fdf4] min-h-screen py-12 px-4 md:px-8">
        <h2 className="text-4xl md:text-5xl font-black text-gray-800 text-center mb-16 tracking-tight">
          Premium <span className="text-yellow-600">Fruit</span> Collection
        </h2>

        {loading ? (
          <div className="text-center py-24">
            <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-emerald-500 border-solid mx-auto"></div>
            <p className="mt-6 text-emerald-800 font-bold text-lg">Loading fresh fruits...</p>
          </div>
        ) : products.length === 0 ? (
          <div className="text-center py-20 text-gray-600 bg-white/50 rounded-3xl max-w-2xl mx-auto shadow-inner">
            <p className="text-xl font-medium">Currently, our baskets are empty. Check back soon!</p>
          </div>
        ) : (
          <div className="max-w-8xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((item) => (
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
        )}

        <div className="text-center mt-20">
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-emerald-600 text-white font-extrabold py-4 px-12 rounded-2xl shadow-2xl hover:bg-emerald-700 transition-all duration-300"
          >
            Browse All Seasonal Items
          </motion.button>
        </div>
      </div>
    </>
  );
}

export default Fruits;
// src/components/ProductCard.jsx
import React, { useState } from "react";
import { FaHeart, FaRegHeart, FaShoppingCart, FaEye, FaLeaf } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

export default function ProductCard({
  product,
  toggleLike,
  isLiked,
  addToCart,
  user,
}) {
  const [weight, setWeight] = useState("1kg");
  const [showLikePopup, setShowLikePopup] = useState(false);
  const [likeMessage, setLikeMessage] = useState("");
  const [showDetailsModal, setShowDetailsModal] = useState(false);

  const getShortDescription = (name) => {
    const nameLower = name.toLowerCase();
    if (nameLower.includes("apple") || nameLower.includes("seb"))
      return "Crisp, juicy, and naturally sweet – perfect for snacking.";
    if (nameLower.includes("mango") || nameLower.includes("aam"))
      return "Rich, tropical flavor – king of summer fruits.";
    if (nameLower.includes("tomato") || nameLower.includes("tamatar"))
      return "Fresh, ripe, and full of garden freshness.";
    if (nameLower.includes("potato") || nameLower.includes("aloo"))
      return "Versatile, starchy, and farm-fresh everyday staple.";
    if (nameLower.includes("onion") || nameLower.includes("pyaz"))
      return "Sharp, aromatic – essential in every Indian kitchen.";
    if (nameLower.includes("banana") || nameLower.includes("kela"))
      return "Soft, creamy, and energy-packed natural snack.";
    return "Fresh, organic, and handpicked just for you.";
  };

  const handleToggleLike = () => {
    toggleLike(product);
    const isNowLiked = !isLiked(product._id);
    setLikeMessage(isNowLiked ? "Added to Favorites!" : "Removed from Favorites!");
    setShowLikePopup(true);
    setTimeout(() => setShowLikePopup(false), 2200);
  };

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
    <>
      {/* ORIGINAL CARD STYLE */}
      <motion.div
        className="relative bg-gradient-to-br from-emerald-50 to-white rounded-3xl shadow-xl border border-emerald-200/60 overflow-hidden group hover:shadow-2xl hover:border-emerald-400/70 transition-all duration-400 w-full max-w-[340px] sm:max-w-[360px] lg:max-w-[380px] mx-auto"
        whileHover={{ scale: 1.05, y: -10 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        {/* Action Buttons */}
        <div className="absolute top-4 right-4 flex flex-col gap-3 z-20">
          <motion.button
            whileTap={{ scale: 0.88 }}
            onClick={handleToggleLike}
            className="p-3 rounded-full bg-white/95 backdrop-blur-md shadow-lg hover:bg-white hover:shadow-xl transition-all duration-300"
          >
            {isLiked(product._id) ? (
              <FaHeart className="w-7 h-7 text-red-500 drop-shadow-md" />
            ) : (
              <FaRegHeart className="w-7 h-7 text-gray-600 hover:text-red-400 transition-colors" />
            )}
          </motion.button>

          <motion.button
            whileTap={{ scale: 0.88 }}
            onClick={() => setShowDetailsModal(true)}
            className="p-3 rounded-full bg-white/95 backdrop-blur-md shadow-lg hover:bg-white hover:shadow-xl transition-all duration-300"
          >
            <FaEye className="w-7 h-7 text-emerald-600 hover:text-emerald-800 transition-colors" />
          </motion.button>
        </div>

        {/* Image Section */}
        <div className="relative h-56 sm:h-64 lg:h-[260px] flex items-center justify-center overflow-hidden bg-gradient-to-b from-emerald-50 to-white">
          <img
            src={product.image?.trim() || "https://via.placeholder.com/300?text=Product"}
            alt={product.name}
            className="max-w-[88%] max-h-[88%] object-contain transition-transform duration-700 group-hover:scale-110 rounded-xl shadow-inner"
            onError={(e) => (e.target.src = "https://via.placeholder.com/300?text=Image+Error")}
          />
        </div>

        {/* Content */}
        <div className="p-5 lg:p-6">
          <h3 className="text-xl lg:text-2xl font-bold text-emerald-800 mb-2.5 tracking-tight">
            {product.name}
          </h3>

          <p className="text-sm lg:text-base text-gray-700 font-medium mb-5 leading-relaxed line-clamp-2">
            {getShortDescription(product.name)}
          </p>

          {/* Weight Selector */}
          <div className="flex flex-wrap justify-center gap-2.5 mb-5">
            {Object.keys(product.prices || {}).length > 0 ? (
              Object.keys(product.prices).map((w) => (
                <motion.button
                  key={w}
                  whileTap={{ scale: 0.92 }}
                  onClick={() => setWeight(w)}
                  className={`px-4 py-1.5 rounded-full text-sm font-semibold transition-all duration-300 shadow-sm ${
                    weight === w
                      ? "bg-emerald-600 text-white shadow-emerald-300/50"
                      : "bg-emerald-50/70 text-emerald-800 hover:bg-emerald-100 hover:text-emerald-900"
                  }`}
                >
                  {w}
                </motion.button>
              ))
            ) : (
              <span className="text-sm text-gray-500 italic">No weights available</span>
            )}
          </div>

          {/* Price */}
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="text-3xl lg:text-3.5xl font-extrabold text-emerald-700">
              ₹{product.prices?.[weight] || product.price || "—"}
            </span>
            {product.oldPrice && (
              <span className="text-lg lg:text-xl text-gray-500 line-through">
                ₹{product.oldPrice}
              </span>
            )}
          </div>

          {/* Add to Cart */}
          <motion.button
            whileTap={{ scale: 0.96 }}
            onClick={handleAddToCart}
            className="w-full py-3.5 bg-gradient-to-r from-emerald-600 to-emerald-700 text-white font-bold rounded-2xl shadow-lg hover:shadow-xl hover:brightness-105 transition-all duration-300 flex items-center justify-center gap-3 text-base lg:text-lg"
          >
            <FaShoppingCart className="w-5 h-5 lg:w-6 lg:h-6" />
            Add to Cart
          </motion.button>
        </div>
      </motion.div>

      {/* Like Popup */}
      <AnimatePresence>
        {showLikePopup && (
          <motion.div
            initial={{ opacity: 0, y: -40, scale: 0.92 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -40, scale: 0.92 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="fixed top-20 z-[1000] pointer-events-none"
          >
            <div className="bg-emerald-700/95 backdrop-blur-md text-white px-10 py-5 rounded-2xl shadow-2xl flex items-center justify-center gap-4 border border-emerald-600/40 font-medium text-base min-w-[280px] text-center">
              <FaHeart className="w-6 h-6 flex-shrink-0" />
              <span>{likeMessage}</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* NEW PREMIUM DETAILS MODAL */}
      <AnimatePresence>
        {showDetailsModal && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowDetailsModal(false)}
              className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
            />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="bg-white rounded-[2.5rem] overflow-hidden max-w-4xl w-full shadow-2xl relative z-10 flex flex-col md:flex-row"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Left Side: Image Showcase */}
              <div className="md:w-1/2 bg-emerald-50/50 p-8 flex items-center justify-center relative">
                <div className="absolute top-6 left-6">
                   <div className="bg-white/80 backdrop-blur px-4 py-2 rounded-2xl border border-emerald-100 flex items-center gap-2">
                     <FaLeaf className="text-emerald-500" />
                     <span className="text-xs font-bold text-emerald-800 uppercase tracking-tighter">Farm Fresh</span>
                   </div>
                </div>
                
                {/* Like Button inside Modal */}
                <div className="absolute top-6 right-6">
                  <motion.button
                    whileTap={{ scale: 0.88 }}
                    onClick={handleToggleLike}
                    className="p-3 rounded-xl bg-white shadow-md text-emerald-800"
                  >
                    {isLiked(product._id) ? (
                      <FaHeart className="w-5 h-5 text-red-500" />
                    ) : (
                      <FaRegHeart className="w-5 h-5" />
                    )}
                  </motion.button>
                </div>

                <img
                  src={product.image?.trim() || "https://via.placeholder.com/400?text=Product"}
                  alt={product.name}
                  className="w-full h-auto max-h-[350px] object-contain drop-shadow-2xl transition-transform duration-500 hover:scale-105"
                />
              </div>

              {/* Right Side: Details Content */}
              <div className="md:w-1/2 p-8 md:p-12 flex flex-col">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h2 className="text-4xl font-black text-slate-800 leading-tight">
                      {product.name}
                    </h2>
                    <div className="flex gap-1 mt-2">
                       {[1,2,3,4,5].map(i => <div key={i} className="w-4 h-1 bg-emerald-500 rounded-full" />)}
                    </div>
                  </div>
                  <button 
                    onClick={() => setShowDetailsModal(false)}
                    className="p-2 hover:bg-slate-100 rounded-full transition-colors text-3xl leading-none text-slate-400"
                  >
                    ×
                  </button>
                </div>

                <p className="text-slate-600 text-lg leading-relaxed mb-8">
                  {getShortDescription(product.name)} {product.text || "Our products are ethically sourced and delivered fresh to ensure you get the maximum nutrients and the best taste."}
                </p>

                <div className="mb-8">
                  <span className="text-sm font-bold text-slate-400 uppercase tracking-widest block mb-4">Select Weight</span>
                  <div className="flex flex-wrap gap-3">
                    {Object.keys(product.prices || {}).map((w) => (
                      <button
                        key={w}
                        onClick={() => setWeight(w)}
                        className={`px-6 py-3 rounded-2xl font-bold transition-all ${
                          weight === w
                            ? "bg-emerald-600 text-white shadow-xl shadow-emerald-100"
                            : "bg-slate-50 text-slate-500 hover:bg-emerald-50 hover:text-emerald-700"
                        }`}
                      >
                        {w}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="mt-auto flex items-center justify-between border-t border-slate-100 pt-8">
                  <div>
                    <span className="text-sm font-bold text-slate-400 block">Total Price</span>
                    <div className="flex items-baseline gap-2">
                      <span className="text-4xl font-black text-emerald-700">
                        ₹{product.prices?.[weight] || product.price || "—"}
                      </span>
                    </div>
                  </div>
                  
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => {
                      handleAddToCart();
                      setShowDetailsModal(false);
                    }}
                    className="flex-1 ml-8 py-5 bg-gradient-to-r from-emerald-600 to-emerald-700 text-white rounded-[1.5rem] font-bold text-lg shadow-xl shadow-emerald-200 hover:brightness-105 transition-all flex items-center justify-center gap-3"
                  >
                    <FaShoppingCart /> Add to Basket
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
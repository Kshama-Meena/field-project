import React, { useState } from "react";
import { FaHeart, FaRegHeart, FaShoppingCart, FaEye, FaLeaf, FaTimes } from "react-icons/fa";
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
      {/* ORIGINAL CARD STYLE (RETAINED) */}
      <motion.div
        className="relative bg-gradient-to-br from-emerald-50 to-white rounded-3xl shadow-xl border border-emerald-200/60 overflow-hidden group hover:shadow-2xl hover:border-emerald-400/70 transition-all duration-400 w-full max-w-[340px] sm:max-w-[360px] lg:max-w-[380px] mx-auto"
        whileHover={{ scale: 1.05, y: -10 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
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

        <div className="relative h-56 sm:h-64 lg:h-[260px] flex items-center justify-center overflow-hidden bg-gradient-to-b from-emerald-50 to-white">
          <img
            src={product.image?.trim() || "https://via.placeholder.com/300?text=Product"}
            alt={product.name}
            className="max-w-[88%] max-h-[88%] object-contain transition-transform duration-700 group-hover:scale-110 rounded-xl shadow-inner"
            onError={(e) => (e.target.src = "https://via.placeholder.com/300?text=Image+Error")}
          />
        </div>

        <div className="p-5 lg:p-6">
          <h3 className="text-xl lg:text-2xl font-bold text-emerald-800 mb-2.5 tracking-tight">
            {product.name}
          </h3>
          <p className="text-sm lg:text-base text-gray-700 font-medium mb-5 leading-relaxed line-clamp-2">
            {getShortDescription(product.name)}
          </p>
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

      {/* Like Popup Notification */}
      <AnimatePresence>
        {showLikePopup && (
          <motion.div
            initial={{ opacity: 0, y: -40, scale: 0.92 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -40, scale: 0.92 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="fixed top-24 z-[2000] pointer-events-none"
          >
            <div className="bg-emerald-800/95 backdrop-blur-md text-white px-8 py-4 rounded-full shadow-2xl flex items-center gap-4 border border-emerald-600/40 font-bold min-w-[250px] justify-center">
              <FaHeart className="text-red-400 text-xl animate-pulse" />
              <span>{likeMessage}</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* MODAL WITH IMAGE OVERLAP FIX */}
      <AnimatePresence>
        {showDetailsModal && (
          <div className="fixed inset-0 z-[1000] flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowDetailsModal(false)}
              className="absolute inset-0 bg-slate-900/70 backdrop-blur-md"
            />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 30 }}
              className="bg-white rounded-[3rem] overflow-hidden max-w-5xl w-full shadow-2xl relative z-10 flex flex-col md:flex-row max-h-[90vh] md:h-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Left Side: Image Showcase (No-Hover Scale) */}
              <div className="md:w-1/2 bg-gradient-to-br from-emerald-50 to-white p-10 flex items-center justify-center relative min-h-[350px]">
                {/* Badge */}
                <div className="absolute top-8 left-8 z-30">
                  <div className="bg-white/80 backdrop-blur shadow-sm px-4 py-2 rounded-2xl border border-emerald-100 flex items-center gap-2">
                    <FaLeaf className="text-emerald-500" />
                    <span className="text-[10px] font-black text-emerald-800 uppercase tracking-widest">Organic Fresh</span>
                  </div>
                </div>
                
                {/* Header Actions - Static Z-index to stay above image */}
                <div className="absolute top-8 right-8 flex gap-3 z-30">
                   <motion.button
                    whileTap={{ scale: 0.9 }}
                    onClick={handleToggleLike}
                    className="p-4 rounded-2xl bg-white shadow-xl text-slate-800 hover:text-red-500 transition-all border border-slate-50"
                  >
                    {isLiked(product._id) ? (
                      <FaHeart className="w-6 h-6 text-red-500" />
                    ) : (
                      <FaRegHeart className="w-6 h-6" />
                    )}
                  </motion.button>
                  <button 
                    onClick={() => setShowDetailsModal(false)}
                    className="md:hidden p-4 bg-white rounded-2xl shadow-xl text-slate-400"
                  >
                    <FaTimes className="w-6 h-6" />
                  </button>
                </div>

                {/* Fixed Image: Removed hover:scale-105 */}
                <img
                  src={product.image?.trim() || "https://via.placeholder.com/400?text=Product"}
                  alt={product.name}
                  className="w-full h-auto max-h-[320px] object-contain drop-shadow-2xl"
                />
              </div>

              {/* Right Side: Details Content */}
              <div className="md:w-1/2 p-8 md:p-14 flex flex-col bg-white">
                <div className="flex justify-between items-start mb-8">
                  <div className="flex-1">
                    <h2 className="text-5xl font-black text-slate-900 leading-none tracking-tight">
                      {product.name}
                    </h2>
                    <div className="flex gap-1.5 mt-5">
                       {[1,2,3,4,5].map(i => <div key={i} className="w-6 h-1.5 bg-emerald-500 rounded-full" />)}
                    </div>
                  </div>
                  <button 
                    onClick={() => setShowDetailsModal(false)}
                    className="hidden md:block p-3 hover:bg-slate-100 rounded-2xl transition-colors text-slate-400"
                  >
                    <FaTimes className="w-8 h-8" />
                  </button>
                </div>

                <p className="text-slate-600 text-xl leading-relaxed mb-10 font-medium">
                  {getShortDescription(product.name)}
                  <span className="block mt-4 text-sm text-slate-400 font-normal leading-relaxed">
                    {product.text || "Directly sourced from organic farms to maintain peak freshness and nutritional value."}
                  </span>
                </p>

                <div className="mb-10">
                  <span className="text-xs font-black text-slate-400 uppercase tracking-[0.3em] block mb-5">Select Weight</span>
                  <div className="flex flex-wrap gap-4">
                    {Object.keys(product.prices || {}).map((w) => (
                      <button
                        key={w}
                        onClick={() => setWeight(w)}
                        className={`px-8 py-4 rounded-2xl font-black text-sm transition-all border-2 ${
                          weight === w
                            ? "bg-emerald-600 border-emerald-600 text-white shadow-2xl shadow-emerald-200"
                            : "bg-white border-slate-100 text-slate-500 hover:border-emerald-200"
                        }`}
                      >
                        {w}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="mt-auto flex items-center justify-between pt-10 border-t border-slate-50">
                  <div className="flex flex-col">
                    <span className="text-xs font-black text-slate-400 uppercase tracking-widest mb-1">Final Price</span>
                    <span className="text-5xl font-black text-emerald-700">
                      ₹{product.prices?.[weight] || product.price || "—"}
                    </span>
                  </div>
                  
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => {
                      handleAddToCart();
                      setShowDetailsModal(false);
                    }}
                    className="flex-1 ml-10 py-6 bg-gradient-to-r from-emerald-600 to-emerald-700 text-white rounded-[2rem] font-black text-xl shadow-2xl shadow-emerald-200 hover:brightness-105 transition-all flex items-center justify-center gap-4"
                  >
                    <FaShoppingCart className="text-2xl" /> 
                    <span>Add to Basket</span>
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
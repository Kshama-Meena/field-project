import React, { useState } from "react";
import { FaHeart, FaRegHeart, FaShoppingCart, FaEye } from "react-icons/fa";
import { motion } from "framer-motion";

export default function ProductCard({
  product,
  toggleLike,
  isLiked,
  addToCart,
  user,
}) {
  // Default weight: agar prices object hai to pehla key, warna "1kg"
  const defaultWeight = product.prices && Object.keys(product.prices).length > 0
    ? Object.keys(product.prices)[0]
    : "1kg";

  const [weight, setWeight] = useState(defaultWeight);
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
      selectedWeight: weight,                     // price variant / pack size
      unit: product.unit || "kg",                 // real unit (dozen, piece, kg etc)
      price: product.prices?.[weight] || product.price || 0,
      quantity: 1,
    });
  };

  return (
    <>
      <motion.div
        className="relative bg-gradient-to-br m-10 from-white to-emerald-50/40 rounded-3xl shadow-xl border border-emerald-100/70 overflow-hidden group hover:shadow-2xl hover:border-emerald-300/80 transition-all duration-400 w-full max-w-[340px] sm:max-w-[360px] lg:max-w-[380px]"
        whileHover={{ scale: 1.05, y: -10 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        {/* Top Right Icons */}
        <div className="absolute top-4 right-4 flex flex-col gap-3 z-20">
          <motion.button
            whileTap={{ scale: 0.85 }}
            onClick={handleToggleLike}
            className="p-3.5 rounded-full bg-white/90 backdrop-blur-md shadow-lg hover:bg-white hover:shadow-xl transition-all duration-300"
          >
            {isLiked(product._id) ? (
              <FaHeart className="w-7 h-7 text-red-500 drop-shadow-md" />
            ) : (
              <FaRegHeart className="w-7 h-7 text-gray-500 hover:text-red-400 transition-colors" />
            )}
          </motion.button>

          <motion.button
            whileTap={{ scale: 0.85 }}
            onClick={() => setShowDetailsModal(true)}
            className="p-3.5 rounded-full bg-white/90 backdrop-blur-md shadow-lg hover:bg-white hover:shadow-xl transition-all duration-300"
          >
            <FaEye className="w-7 h-7 text-emerald-600 hover:text-emerald-800 transition-colors" />
          </motion.button>
        </div>

        {/* Image */}
        <div className="relative h-56 sm:h-64 lg:h-65 flex items-center justify-center overflow-hidden bg-gradient-to-b from-gray-50 to-white">
          <img
            src={product.image?.trim() || "https://via.placeholder.com/300?text=Product"}
            alt={product.name}
            className="max-w-[90%] max-h-[90%] object-contain transition-transform duration-700 group-hover:scale-110"
            onError={(e) => (e.target.src = "https://via.placeholder.com/300?text=Image+Error")}
          />
        </div>

        {/* Content */}
        <div className="p-5 lg:p-6">
          <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-2 truncate">
            {product.name}
          </h3>

          <p className="text-sm lg:text-base text-gray-600 mb-4 line-clamp-2">
            {getShortDescription(product.name)}
          </p>

          {/* Weight / Variant Selector */}
      {/* Weight / Variant Selector */}
<div className="flex flex-wrap justify-center gap-2 mb-4">
  {product.prices && Object.keys(product.prices).length > 0 ? (
    Object.keys(product.prices).map((unitKey) => (
      <motion.button
        key={unitKey}
        whileTap={{ scale: 0.92 }}
        onClick={() => setWeight(unitKey)}
        className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 border ${
          weight === unitKey
            ? "bg-emerald-600 text-white border-emerald-700 shadow-md"
            : "bg-white text-gray-700 border-gray-300 hover:bg-emerald-50 hover:border-emerald-300"
        }`}
      >
        {unitKey}  {/* ← yahin pe already "1kg", "500g", "2kg", "1 dozen" jo bhi hai wahi dikhega */}
      </motion.button>
    ))
  ) : (
    <span className="text-sm text-gray-500 italic px-4 py-2">
      {product.unit ? `Per ${product.unit}` : "Standard pack"}
    </span>
  )}
</div>

          {/* Price */}
          <div className="flex items-center justify-center gap-3 mb-2">
            <span className="text-2xl lg:text-3xl font-extrabold text-emerald-700">
              ₹{product.prices?.[weight] || product.price || "—"}
            </span>
            {product.oldPrice && (
              <span className="text-base lg:text-lg text-gray-500 line-through">
                ₹{product.oldPrice}
              </span>
            )}
          </div>

          {/* Unit Display */}
          <div className="text-center mb-5">
            <span className="text-sm lg:text-base text-emerald-600 font-semibold">
              Per {product.unit || "kg"}
            </span>
          </div>

          {/* Add to Cart */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={handleAddToCart}
            className="w-full py-3 lg:py-3.5 bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-bold rounded-full shadow-lg hover:shadow-xl hover:brightness-105 transition-all duration-300 flex items-center justify-center gap-3 text-base lg:text-lg"
          >
            <FaShoppingCart className="w-5 h-5 lg:w-6 lg:h-6" />
            Add to Cart
          </motion.button>
        </div>
      </motion.div>

      {/* Like Popup */}
      {showLikePopup && (
        <div className="fixed bottom-10 left-1/2 -translate-x-1/2 z-50 animate-slide-up">
          <div className="bg-emerald-700 text-white px-8 py-4 rounded-full shadow-2xl flex items-center gap-3 text-base font-medium">
            <FaHeart className="w-5 h-5" />
            {likeMessage}
          </div>
        </div>
      )}

      {/* Details Modal */}
      {showDetailsModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 animate-fade-in"
          onClick={() => setShowDetailsModal(false)}
        >
          <motion.div
            className="bg-white rounded-2xl p-8 max-w-lg w-[90%] mx-4 shadow-2xl relative"
            initial={{ opacity: 0, scale: 0.9, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 50 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowDetailsModal(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 text-3xl font-bold"
            >
              ×
            </button>

            <img
              src={product.image?.trim() || "https://via.placeholder.com/300"}
              alt={product.name}
              className="w-full h-64 object-contain rounded-xl mb-6 shadow-md"
            />

            <h2 className="text-3xl font-bold text-gray-900 mb-3">{product.name}</h2>

            <p className="text-gray-600 mb-6 leading-relaxed">
              {getShortDescription(product.name)} {product.text || ""}
            </p>

            {/* Weight selector in modal */}
            <div className="flex flex-wrap justify-center gap-2 mb-6">
              {product.prices && Object.keys(product.prices).length > 0 ? (
                Object.keys(product.prices).map((w) => (
                  <motion.button
                    key={w}
                    whileTap={{ scale: 0.92 }}
                    onClick={() => setWeight(w)}
                    className={`px-4 py-2 rounded-full text-sm font-medium ${
                      weight === w
                        ? "bg-emerald-600 text-white"
                        : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                    }`}
                  >
                    {w}
                  </motion.button>
                ))
              ) : (
                <span className="text-gray-600">Standard pack</span>
              )}
            </div>

            <div className="text-center mb-2">
              <span className="text-3xl font-bold text-emerald-700">
                ₹{product.prices?.[weight] || product.price || "—"}
              </span>
              {product.oldPrice && (
                <span className="text-xl text-gray-500 line-through ml-3">
                  ₹{product.oldPrice}
                </span>
              )}
            </div>

            {/* Unit Display in Modal */}
            <div className="text-center mb-6">
              <span className="text-lg text-emerald-600 font-semibold">
                Available per {product.unit || "kg"}
              </span>
            </div>

            <button
              onClick={() => {
                handleAddToCart();
                setShowDetailsModal(false);
              }}
              className="w-full py-4 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-lg rounded-full shadow-lg transition-all duration-300 flex items-center justify-center gap-3"
            >
              <FaShoppingCart className="w-6 h-6" />
              Add to Cart
            </button>
          </motion.div>
        </div>
      )}
    </>
  );
}
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaHeart } from "react-icons/fa";

const AddToCartMessage = ({ visible }) => {
  return (
    <div className="fixed top-[68px] right-[110px] z-[9999]">
      <AnimatePresence>
        {visible && (
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="flex items-center gap-2 bg-white shadow-xl rounded-2xl px-4 py-2 border border-gray-100"
          >
            <FaHeart className="text-green-600 text-lg" />
            <div>
              <p className="text-sm font-semibold text-gray-800">
                Added to Cart!
              </p>
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                className="h-[2px] bg-green-500 rounded-full origin-left mt-1"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AddToCartMessage;

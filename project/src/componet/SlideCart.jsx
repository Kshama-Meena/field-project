// src/components/SlideCart.jsx
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useCart } from "./CartContext";
import { FaTimes } from "react-icons/fa";

export default function SlideCart({ isOpen, onClose }) {
  const { cartItems, removeFromCart } = useCart();

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ type: "spring", stiffness: 80 }}
          className="fixed top-0 right-0 h-full w-80 bg-white shadow-2xl z-50 p-5 overflow-y-auto"
        >
          <div className="flex justify-between items-center mb-4 border-b pb-2">
            <h2 className="text-lg font-bold text-green-700">Your Cart</h2>
            <button onClick={onClose}>
              <FaTimes className="text-red-500 hover:text-red-600" />
            </button>
          </div>

          {cartItems.length === 0 ? (
            <p className="text-gray-500 text-center mt-10">🛒 Your cart is empty</p>
          ) : (
            cartItems.map((item) => (
              <div key={item.id} className="flex justify-between items-center mb-3">
                <div>
                  <h4 className="font-semibold">{item.name}</h4>
                  <p className="text-sm text-gray-500">₹{item.price}</p>
                </div>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-sm text-red-500 hover:underline"
                >
                  Remove
                </button>
              </div>
            ))
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}

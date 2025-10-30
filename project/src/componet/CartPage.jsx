import React from "react";
import { useCart } from "./CartContext";
import { Trash2 } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const CartPage = () => {
  const { cartItems, removeFromCart } = useCart();

  const totalPrice = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="pt-24 min-h-screen bg-gray-50 px-4 sm:px-8">
      <h1 className="text-3xl font-bold text-teal-800 mb-6 text-center">
        🛍️ Your Shopping Cart
      </h1>

      {cartItems.length === 0 ? (
        <div className="text-center mt-16">
          <p className="text-gray-600 text-lg mb-4">Your cart is empty.</p>
          <Link
            to="/"
            className="inline-block bg-teal-700 text-white px-6 py-3 rounded-full hover:bg-teal-800 transition"
          >
            Continue Shopping
          </Link>
        </div>
      ) : (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto bg-white p-6 rounded-2xl shadow-md"
        >
          <ul className="divide-y divide-gray-200">
            {cartItems.map((item) => (
              <motion.li
                key={item.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="flex items-center justify-between py-4"
              >
                <div className="flex items-center gap-4">
                  {/* Optional item image */}
                  <img
                    src={item.image || "https://via.placeholder.com/60"}
                    alt={item.name}
                    className="w-14 h-14 rounded-lg object-cover"
                  />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">
                      {item.name}
                    </h3>
                    <p className="text-gray-600">₹{item.price}</p>
                  </div>
                </div>

                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-500 hover:text-red-700"
                >
                  <Trash2 className="w-5 h-5" />
                </button>
              </motion.li>
            ))}
          </ul>

          <div className="mt-6 flex justify-between items-center border-t pt-4">
            <span className="text-lg font-semibold text-gray-700">
              Total: ₹{totalPrice}
            </span>
            <button className="bg-green-600 text-white px-6 py-3 rounded-full hover:bg-green-700 transition">
              Checkout
            </button>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default CartPage;

import React from "react";
import { motion } from "framer-motion";

function Vegetable() {
  const products1 = [
    { id: 1, name: "Potato", price: "$110.00", image: "Potato.jpg" },
    { id: 2, name: "Cucumber", price: "$90.00", image: "Cucumber.jpg" },
    { id: 3, name: "Tomato", price: "$50.00", image: "tameto.jpg" },
    { id: 4, name: "Matar", price: "$120.00", image: "Matar.jpg" },
    { id: 5, name: "Chilli", price: "$99.00", image: "Chilli.jpg" },
    { id: 6, name: "Lady’s Finger", price: "$80.00", image: "Lady’sFinger.jpg" },
    { id: 7, name: "Bell Peppers", price: "$130.00", image: "BellPeppers.jpg" },
    { id: 8, name: "Cauliflower", price: "$70.00", image: "cauliflower.jpg" },
    { id: 9, name: "Onion", price: "$100.00", image: "Onion.jpg" },
    { id: 10, name: "Red Chilli", price: "$140.00", image: "RedChilli.jpg" },
  ];

  return (
    <div className="bg-gray-50">
      {/* ✅ Hero Section */}
      <section className="w-full h-[80vh] relative">
        <div
          className="w-full h-full p-8 flex flex-col justify-center items-start bg-cover bg-center relative"
          style={{ backgroundImage: "url('background1.jpg')" }}
        >
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/40"></div>

          <div className="relative z-10 max-w-2xl">
            <h2 className="text-5xl md:text-6xl font-extrabold text-white leading-snug drop-shadow-lg">
              Fresh & Organic <br /> Vegetables Everyday
            </h2>
            <p className="mt-4 text-lg md:text-xl text-gray-200">
              Handpicked vegetables delivered fresh from farms to your kitchen.
            </p>
            <button className="mt-6 px-8 py-3 bg-green-600 text-white font-bold rounded-xl shadow-lg hover:bg-green-800 hover:scale-105 transition">
              Shop Vegetables
            </button>
          </div>
        </div>
      </section>

      {/* ✅ Products Grid */}
      <div className="w-full max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 p-6">
        {products1.map((item) => (
          <motion.div
            key={item.id}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center hover:shadow-2xl"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-32 h-32 object-contain mb-4 rounded-lg"
            />
            <h3 className="font-bold text-lg text-gray-800">{item.name}</h3>
            <span className="mt-2 px-3 py-1 bg-green-100 text-green-700 font-bold rounded-full">
              {item.price}
            </span>
            <button className="mt-4 w-full bg-gradient-to-r from-green-500 to-green-700 text-white py-2 rounded-lg font-semibold shadow hover:scale-105 hover:from-green-600 hover:to-green-800 transition-all">
              🛒 Add to Cart
            </button>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Vegetable;

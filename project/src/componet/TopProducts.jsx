import React, { useState } from "react";

const productsData = {
  "Fresh Fruits": [
    { id: 1, name: "The Bananas", price: 122, rating: 4, image: "./Banana.jpg" },
    { id: 2, name: "Fresh Watermelon", price: 722, rating: 1, image: "./Watermelon.jpg" },
    { id: 3, name: "Fresh Apple", price: 962, rating: 4, image: "./Apple.jpg" },
    { id: 4, name: "The Cherry Bunch", price: 70, rating: 4, image: "./cherry.jpg" },
  ],
  "Fresh Vegetables": [
    { id: 6, name: "Strawberries", price: 540, rating: 5, image: "./stroberi.jpg" }
  ],
  "Top Selling": [
    { id: 7, name: "Mango", price: 400, rating: 5, image: "./mango.jpg" }
  ],
};

export default function TopProducts() {
  const [activeTab, setActiveTab] = useState("Fresh Fruits");

  return (
    <div className="w-full px-6 md:px-16 lg:px-24 py-12">
     <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-10">
  Top Products
</h2>


      {/* Tabs */}
      <div className="flex justify-center gap-10 mb-12">
        {Object.keys(productsData).map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`pb-2 text-lg font-semibold transition ${
              activeTab === tab
                ? "text-green-600 border-b-2 border-green-600"
                : "text-gray-500 hover:text-green-600"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Product Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-8">
        {productsData[activeTab].map((product) => (
          <div
            key={product.id}
            className="bg-white border rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6 flex flex-col items-center"
          >
            <button className="absolute right-5 top-5 text-gray-400 hover:text-red-500">♥</button>

            {/* Image */}
           <div className="relative w-full flex justify-center items-center">
  <img
    src={product.image}
    alt={product.name}
    className="h-48 object-contain mb-4 transform transition-transform duration-500 hover:rotate-y-12 hover:scale-105"
  />
</div>

            {/* Rating */}
            <div className="flex justify-center mb-2">
              {[...Array(5)].map((_, i) => (
                <span
                  key={i}
                  className={`text-xl ${i < product.rating ? "text-yellow-400" : "text-gray-300"}`}
                >
                  ★
                </span>
              ))}
            </div>

            {/* Name */}
            <h3 className="text-lg font-medium text-center mb-2">{product.name}</h3>

            {/* Price */}
            <p className="text-center text-red-600 font-bold text-xl mb-4">
              ${product.price}.00
            </p>

            {/* Button */}
            <button className="w-full bg-green-600 text-white py-2.5 rounded-full font-medium hover:bg-green-700 transition">
              Add To Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

import React, { useState, useEffect } from "react";
import { FaShoppingCart, FaHeart } from "react-icons/fa";
import { useLike } from "./LikeContext";


function Vegetable() {
  const products1 = [
    { id: 1, category: "Vegetables", name: "Potato", price: "$110.00", image: "Potato.jpg", text: "Fresh & Organic" },
    { id: 2, category: "Vegetables", name: "Cucumber", price: "$90.00", image: "Cucumber.jpg", text: "Cool & Crisp" },
    { id: 3, category: "Vegetables", name: "Tomato", price: "$50.00", image: "tameto.jpg", text: "Juicy & Red" },
    { id: 4, category: "Vegetables", name: "Matar", price: "$120.00", image: "Matar.jpg", text: "Sweet & Green" },
    { id: 5, category: "Vegetables", name: "Chilli", price: "$99.00", image: "Chilli.jpg", text: "Hot & Spicy" },
    { id: 6, category: "Vegetables", name: "Lady’s Finger", price: "$80.00", image: "lady.jpg", text: "Soft & Fresh" },
    { id: 7, category: "Vegetables", name: "Bell Peppers", price: "$130.00", image: "BellPeppers.jpg", text: "Colorful & Crisp" },
    { id: 8, category: "Vegetables", name: "Cauliflower", price: "$70.00", image: "cauliflower.jpg", text: "Pure & Natural" },
    { id: 9, category: "Vegetables", name: "Onion", price: "$100.00", image: "Onion.jpg", text: "Sharp & Fresh" },
    { id: 10, category: "Vegetables", name: "Red Chilli", price: "$140.00", image: "RedChilli.jpg", text: "Hot & Bold" },
  ];


  const { toggleLike, isLiked  } = useLike();


  return (
    <div className="bg-gray-50">

      {/* Hero Section */}
      <div className="flex flex-col md:flex-row max-w-6xl mx-auto my-12 p-6 md:p-8 bg-white rounded-lg shadow-xl">
        <div className="md:w-1/2 pr-0 md:pr-10 py-6 md:py-10 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4 text-gray-800">
            Farm-Fresh Goodness, Delivered
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-6 md:mb-8">
            Your daily source for organic vegetables, straight from the field.
          </p>
          <button className="bg-lime-600 text-white py-3 px-6 rounded-md text-lg font-medium hover:bg-lime-700 transition duration-300 flex items-center justify-center md:justify-start shadow-lg">
            Browse Vegetables <span className="ml-3 text-2xl">🌿</span>
          </button>
        </div>

        <div className="md:w-1/2 flex justify-center md:justify-end items-center mt-6 md:mt-0">
          <img
            src="vegi.jpg"
            alt="A wooden crate full of fresh vegetables"
            className="w-full max-w-md md:max-w-full h-auto"
          />
        </div>
      </div>

      {/* Products Grid Section */}
      <div className="bg-[#fdf6ee] py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
          {products1.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl shadow-md p-4 sm:p-6 text-center relative hover:shadow-lg transition-all duration-300 group"
            >

              <button
                onClick={() => toggleLike(item)}
                className="absolute right-3 top-3 text-xl z-10 transition-transform duration-300 hover:scale-125"
              >
                <FaHeart
                  className={`${isLiked(item) ? "text-red-500" : "text-gray-400 hover:text-red-400"}`}
                />

              </button>



              <img
                src={item.image}
                alt={item.name}
                className="w-28 sm:w-32 md:w-36 h-28 sm:h-32 md:h-36 object-contain mx-auto mt-4 transition-transform duration-300 group-hover:scale-110"
              />

              {/* Product Info */}
              <h3 className="mt-4 text-lg font-semibold text-gray-800">{item.name}</h3>
              <p className="text-sm text-gray-500 border-b border-gray-200 pb-2">{item.text}</p>

              {/* Price */}
              <div className="flex justify-center items-center gap-2 mt-3">
                <span className="text-yellow-600 font-semibold">{item.price}</span>
              </div>

              {/* Add to Cart */}
              <button className="mt-4 sm:mt-5 bg-yellow-400 hover:bg-yellow-500 text-white font-semibold py-2 px-4 sm:px-5 rounded-full flex items-center justify-center gap-2 mx-auto transition-transform duration-300 group-hover:scale-105">
                Add to Cart <FaShoppingCart />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Vegetable;

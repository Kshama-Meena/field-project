import React, { useState, useEffect } from "react";
import axios from "axios";
import { useLike } from "./context/LikeContext";
import { FaRegHeart, FaShoppingCart , FaHeart} from "react-icons/fa";
import { useCart } from "./context/CartContext";
import { useAuth } from "./context/AuthContext";
function Vegetable() {
  const [products1, setProducts1] = useState([]);

  const { toggleLike, isLiked } = useLike();
  const { addToCart } = useCart();
    const { user } = useAuth();

  // Fetch vegetable category products from database
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/products");
        
        // Filter only vegetable category items
        const vegData = res.data.filter(
          item => item.category?.toLowerCase() === "vegetable"
        );

        setProducts1(vegData);
      } catch (error) {
        console.log("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

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
            src="https://res.cloudinary.com/ds8w1kut5/image/upload/v1766763411/vegi_dj5nwi.png"
            alt="A wooden crate full of fresh vegetables"
            className="w-full max-w-md md:max-w-full h-auto"
          />
        </div>
      </div>

      {/* Products List */}
      <div className="bg-[#fdf6ee] py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
          {products1.map((item) => (
            <div
              key={item._id}
              className="bg-white rounded-2xl shadow-md p-4 sm:p-6 text-center relative hover:shadow-lg transition-all duration-300 group"
            >

             <button
                              onClick={() => toggleLike(item)}
                              className="absolute right-3 top-3 text-2xl z-10 transition-transform duration-300 hover:scale-125"
                            >
                              {isLiked(item._id) ? (
                                <FaHeart className="text-red-500" />
                              ) : (
                                <FaRegHeart className="text-gray-400 hover:text-red-400" />
                              )}
                            </button>

              <img
                src={item.image}
                alt={item.name}
                className="w-28 sm:w-32 md:w-36 h-28 sm:h-32 md:h-36 object-contain mx-auto mt-4 transition-transform duration-300 group-hover:scale-110"
              />

              <h3 className="mt-4 text-lg font-semibold text-gray-800">{item.name}</h3>
              <p className="text-sm text-gray-500 border-b border-gray-200 pb-2">{item.text}</p>

              <div className="flex justify-center items-center gap-2 mt-3">
                <span className="text-yellow-600 font-semibold">${item.price}</span>
              </div>

              <button
              onClick={() => {
                  if (!user) {
                    alert("Please login first!");
                    return;
                  }
                  addToCart(item);
                }} className="mt-4 sm:mt-5 bg-yellow-400 hover:bg-yellow-500 text-white font-semibold py-2 px-4 sm:px-5 rounded-full flex items-center justify-center gap-2 mx-auto transition-transform duration-300 group-hover:scale-105">
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

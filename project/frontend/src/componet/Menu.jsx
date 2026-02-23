
import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaShoppingCart } from "react-icons/fa";
import { useAuth } from "./context/AuthContext";
import { useCart } from "./context/CartContext";
import { useLike } from "./context/LikeContext";
import ProductCard from "./ProductCard";

export default function Menu() {
  const [fruits, setFruits] = useState([]);
  const [vegetables, setVegetables] = useState([]);
  const { addToCart } = useCart();
  const { user } = useAuth();
  const { setCartCount } = useCart();
  const { toggleLike, isLiked } = useLike(); 

useEffect(() => {
  const fetchProducts = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/products");

      const all = res.data;

      setFruits(all.filter(p => p.category === "fruit"));
      setVegetables(all.filter(p => p.category === "vegetable"));

    } catch (error) {
      console.log("PRODUCT FETCH ERROR:", error);
    }
  };

  fetchProducts();
}, []);



  return (
    <div>

      {/* Hero Section */}
      <section className="relative w-full h-[95vh] bg-contain bg-right bg-no-repeat bg-fixed" style={{ backgroundImage: "url('https://res.cloudinary.com/ds8w1kut5/image/upload/v1766763217/background1_kf1yfz.png')" , backgroundSize: 'contain',
          backgroundPosition: 'right',}}>
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 flex items-center h-full px-6 md:px-16">
          <div className="max-w-2xl text-left">
            <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
              Fresh & Organic <br />
              <span className="text-green-400">Vegetables Everyday</span>
            </h1>
            <p className="mt-4 text-gray-200 text-lg">
              Handpicked vegetables delivered fresh from farms to your kitchen.
            </p>
            <button className="mt-6 px-8 py-3 bg-green-600 text-white font-semibold rounded-xl">
              Explore Menu
            </button>
          </div>
        </div>
      </section>

      {/* Product Section */}
<div className="bg-[#fdf6ee] min-h-screen py-12 px-6">

  {/* ⭐ VEGETABLES SECTION */}
  <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
    Fresh <span className="text-green-600">Vegetables</span>
  </h2>

  <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
    {vegetables.slice(0, 4).map((item) => (
       <ProductCard
                     key={item._id}
                     product={item}
                     toggleLike={toggleLike}
                     isLiked={isLiked}
                     addToCart={addToCart}
                     user={user}
                   />
    ))}
  </div>

  {/* ⭐ FRUITS SECTION */}
  <h2 className="text-3xl font-bold text-gray-800 mt-16 mb-8 text-center">
    Juicy <span className="text-yellow-600">Fruits</span>
  </h2>

  <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
    {fruits.slice(0, 4).map((item) => (
        <ProductCard
                      key={item._id}
                      product={item}
                      toggleLike={toggleLike}
                      isLiked={isLiked}
                      addToCart={addToCart}
                      user={user}
                    />
    ))}
  </div>

</div>


    </div>
  );
}
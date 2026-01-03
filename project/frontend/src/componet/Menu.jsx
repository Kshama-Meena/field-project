
import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaShoppingCart } from "react-icons/fa";
import { useAuth } from "./context/AuthContext";
import { useCart } from "./context/CartContext";
import { useLike } from "./context/LikeContext";

export default function Menu() {
  const [fruits, setFruits] = useState([]);
  const [vegetables, setVegetables] = useState([]);

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

 const addToCart = async (item) => {

  const showPopup = (msg, type = "success") => {
    const pop = document.createElement("div");

    let bg = "#22c55e";
    let icon = "🛍️";

    if (type === "error") { bg = "#ef4444"; icon = "❌"; }
    if (type === "warning") { bg = "#f59e0b"; icon = "⚠️"; }
    if (type === "login") { bg = "#dc2626"; icon = "🔐"; }

    pop.innerHTML = `
      <div style="display:flex; align-items:center; gap:12px;">
        <span style="font-size:24px;">${icon}</span>
        <span style="font-size:17px; font-weight:600;">${msg}</span>
      </div>
    `;

    pop.style.position = "fixed";
    pop.style.top = "20px";
    pop.style.right = "20px";
    pop.style.padding = "14px 26px";
    pop.style.background = bg;
    pop.style.color = "white";
    pop.style.borderRadius = "16px";
    pop.style.boxShadow = "0 6px 25px rgba(0,0,0,0.25)";
    pop.style.zIndex = "99999";
    pop.style.opacity = "0";
    pop.style.transform = "translateY(-10px)";
    pop.style.transition = "all 0.3s ease";

    document.body.appendChild(pop);

    setTimeout(() => {
      pop.style.opacity = 1;
      pop.style.transform = "translateY(0)";
    }, 10);

    setTimeout(() => {
      pop.style.opacity = 0;
      pop.style.transform = "translateY(-10px)";
      setTimeout(() => pop.remove(), 300);
    }, 2000);
  };

  if (!user?._id) {
    showPopup("Please login first!", "login");
    return;
  }

  try {
    const check = await axios.post("http://localhost:5000/api/cart/check", {
      userId: user._id,
      productId: item._id,
    });

    if (check.data.exists) {
      showPopup("Already in cart!", "warning");
      return;
    }

    await axios.post("http://localhost:5000/api/cart/add", {
      userId: user._id,
      productId: item._id,
      name: item.name,
      price: item.price,
      image: item.image,
    });

    showPopup("Added to Cart!", "success");

    setCartCount(prev => prev + 1);

  } catch (error) {
    console.log("ADD CART ERROR:", error);
  }
};

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
      <div
        key={item._id}
        className="bg-white rounded-2xl shadow-md p-6 text-center relative hover:shadow-lg transition-all duration-300 group"
      >
        <img
          src={item.image}
          alt={item.name}
          className="w-36 h-36 object-contain mx-auto mt-4 group-hover:scale-110 transition"
        />
        <h3 className="mt-4 text-lg font-semibold text-gray-800">
          {item.name}
        </h3>
        <p className="text-sm text-gray-500 border-b pb-2">
          {item.subtext}
        </p>

        <div className="flex justify-center items-center gap-2 mt-3">
          {item.oldPrice && (
            <span className="line-through text-sm text-gray-400">
              {item.oldPrice}
            </span>
          )}
          <span className="text-yellow-600 font-semibold">
            ₹{item.price}
          </span>
        </div>

        <button
          onClick={() => addToCart(item)}
          className="mt-5 bg-yellow-400 hover:bg-yellow-500 text-white font-semibold py-2 px-5 rounded-full flex items-center justify-center gap-2 mx-auto transition-transform group-hover:scale-105"
        >
          Add to Cart <FaShoppingCart />
        </button>
      </div>
    ))}
  </div>

  {/* ⭐ FRUITS SECTION */}
  <h2 className="text-3xl font-bold text-gray-800 mt-16 mb-8 text-center">
    Juicy <span className="text-yellow-600">Fruits</span>
  </h2>

  <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
    {fruits.slice(0, 4).map((item) => (
      <div
        key={item._id}
        className="bg-white rounded-2xl shadow-md p-6 text-center relative hover:shadow-lg transition-all duration-300 group"
      >
        <img
          src={item.image}
          alt={item.name}
          className="w-36 h-36 object-contain mx-auto mt-4 group-hover:scale-110 transition"
        />
        <h3 className="mt-4 text-lg font-semibold text-gray-800">
          {item.name}
        </h3>
        <p className="text-sm text-gray-500 border-b pb-2">
          {item.subtext}
        </p>

        <div className="flex justify-center items-center gap-2 mt-3">
          {item.oldPrice && (
            <span className="line-through text-sm text-gray-400">
              {item.oldPrice}
            </span>
          )}
          <span className="text-yellow-600 font-semibold">
            ₹{item.price}
          </span>
        </div>

        <button
          onClick={() => addToCart(item)}
          className="mt-5 bg-yellow-400 hover:bg-yellow-500 text-white font-semibold py-2 px-5 rounded-full flex items-center justify-center gap-2 mx-auto transition-transform group-hover:scale-105"
        >
          Add to Cart <FaShoppingCart />
        </button>
      </div>
    ))}
  </div>

</div>


    </div>
  );
}
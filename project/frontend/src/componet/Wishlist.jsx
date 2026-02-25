
// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { FaShoppingCart } from "react-icons/fa";
// import { useAuth } from "./context/AuthContext";
// import { useCart } from "./context/CartContext";
// import { useLike } from "./context/LikeContext";
// import ProductCard from "./ProductCard";

// export default function Menu() {
//   const [fruits, setFruits] = useState([]);
//   const [vegetables, setVegetables] = useState([]);
//   const { addToCart } = useCart();
//   const { user } = useAuth();
//   const { setCartCount } = useCart();
//   const { toggleLike, isLiked } = useLike(); 

// useEffect(() => {
//   const fetchProducts = async () => {
//     try {
//       const res = await axios.get("http://localhost:5000/api/products");

//       const all = res.data;

//       setFruits(all.filter(p => p.category === "fruit"));
//       setVegetables(all.filter(p => p.category === "vegetable"));

//     } catch (error) {
//       console.log("PRODUCT FETCH ERROR:", error);
//     }
//   };

//   fetchProducts();
// }, []);



//   return (
//     <div>

//       {/* Hero Section */}
//       <section className="relative w-full h-[95vh] bg-contain bg-right bg-no-repeat bg-fixed" style={{ backgroundImage: "url('https://res.cloudinary.com/ds8w1kut5/image/upload/v1766763217/background1_kf1yfz.png')" , backgroundSize: 'contain',
//           backgroundPosition: 'right',}}>
//         <div className="absolute inset-0 bg-black/40"></div>
//         <div className="relative z-10 flex items-center h-full px-6 md:px-16">
//           <div className="max-w-2xl text-left">
//             <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
//               Fresh & Organic <br />
//               <span className="text-green-400">Vegetables Everyday</span>
//             </h1>
//             <p className="mt-4 text-gray-200 text-lg">
//               Handpicked vegetables delivered fresh from farms to your kitchen.
//             </p>
//             <button className="mt-6 px-8 py-3 bg-green-600 text-white font-semibold rounded-xl">
//               Explore Menu
//             </button>
//           </div>
//         </div>
//       </section>

//       {/* Product Section */}
// <div className="bg-[#fdf6ee] min-h-screen py-12 px-6">

//   {/* ⭐ VEGETABLES SECTION */}
//   <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
//     Fresh <span className="text-green-600">Vegetables</span>
//   </h2>

//   <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
//     {vegetables.slice(0, 4).map((item) => (
//        <ProductCard
//                      key={item._id}
//                      product={item}
//                      toggleLike={toggleLike}
//                      isLiked={isLiked}
//                      addToCart={addToCart}
//                      user={user}
//                    />
//     ))}
//   </div>

//   {/* ⭐ FRUITS SECTION */}
//   <h2 className="text-3xl font-bold text-gray-800 mt-16 mb-8 text-center">
//     Juicy <span className="text-yellow-600">Fruits</span>
//   </h2>

//   <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
//     {fruits.slice(0, 4).map((item) => (
//         <ProductCard
//                       key={item._id}
//                       product={item}
//                       toggleLike={toggleLike}
//                       isLiked={isLiked}
//                       addToCart={addToCart}
//                       user={user}
//                     />
//     ))}
//   </div>

// </div>


//     </div>
//   );
// }
import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaShoppingCart } from "react-icons/fa";
import { motion } from "framer-motion";
import { useLike } from "./context/LikeContext";
import { useCart } from "./context/CartContext";
import { Link } from "react-router-dom";
import ProductCard from "./ProductCard";

export default function Wishlist() {
  const { likedItems: likedIds, toggleLike } = useLike(); // ← yeh sirf IDs (strings) hain
  const { addToCart } = useCart();

  const [products, setProducts] = useState([]); // ← yahan FULL product objects aayenge
  const [sortBy, setSortBy] = useState("price-low");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch full products using liked IDs
  useEffect(() => {
    const fetchWishlistProducts = async () => {
      if (!likedIds?.length) {
        setProducts([]);
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        setError(null);

        // Backend endpoint jo IDs se products return kare
        const res = await axios.post("http://localhost:5000/api/products/wishlist", {
          ids: likedIds,
        });

        const fetchedProducts = res.data || [];
        setProducts(fetchedProducts);
      } catch (err) {
        console.error("Error fetching wishlist products:", err);
        setError("Failed to load wishlist items");
        setProducts([]);
      } finally {
        setLoading(false);
      }
    };

    fetchWishlistProducts();
  }, [likedIds]);

  // Safe sorting with fallbacks
  const sortedProducts = [...products].sort((a, b) => {
    // Default price fallback agar prices object missing ho
    const getPrice = (item) => {
      if (item.prices && Object.keys(item.prices).length > 0) {
        const firstKey = Object.keys(item.prices)[0];
        return item.prices[firstKey] || 0;
      }
      return item.price || 0;
    };

    const priceA = getPrice(a);
    const priceB = getPrice(b);

    if (sortBy === "price-low") return priceA - priceB;
    if (sortBy === "price-high") return priceB - priceA;
    if (sortBy === "name-asc") return (a.name || "").localeCompare(b.name || "");
    return 0;
  });

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-2xl text-emerald-600 animate-pulse">Loading your wishlist...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center p-8">
          <h2 className="text-3xl font-bold text-red-600 mb-4">Oops!</h2>
          <p className="text-lg text-gray-700">{error}</p>
          <button
            onClick={() => window.location.reload()}
            className="mt-6 px-6 py-3 bg-emerald-600 text-white rounded-full hover:bg-emerald-700"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  if (!sortedProducts.length) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-green-50 via-white to-lime-50 flex items-center justify-center">
        <div className="text-center p-8">
          <div className="text-9xl mb-8 opacity-70">❤️</div>
          <h2 className="text-3xl md:text-4xl font-bold text-emerald-800 mb-5">
            Your Wishlist is Empty
          </h2>
          <p className="text-lg text-gray-600 mb-10 max-w-lg mx-auto">
            Add your favorite products to wishlist and shop them later!
          </p>
          <Link
            to="/"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-emerald-600 to-lime-600 hover:from-emerald-700 hover:to-lime-700 text-white px-10 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-xl transition transform hover:-translate-y-1"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 via-white to-lime-50 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="pt-9 pb-12 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
          <div className="flex items-center gap-6">
            <h1 className="text-4xl font-extrabold text-emerald-800">
              Your Wishlist
            </h1>
            <span className="font-semibold text-emerald-700 bg-emerald-50 px-4 py-1 rounded-full">
              {sortedProducts.length} Items
            </span>
          </div>

          <div className="flex items-center gap-4">
            <button className="bg-gradient-to-r from-emerald-600 to-lime-600 hover:from-emerald-700 hover:to-lime-700 text-white font-semibold py-2 px-6 rounded-full shadow-md transition duration-300 text-sm flex items-center gap-2">
              <FaShoppingCart /> Add All to Cart
            </button>

            <div className="text-emerald-700 flex items-center gap-2">
              <label htmlFor="sort" className="font-medium">
                Sort By:
              </label>
              <select
                id="sort"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-white border border-emerald-200 rounded-lg py-1 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 cursor-pointer"
              >
                <option value="price-low">Price Low to High</option>
                <option value="price-high">Price High to Low</option>
                <option value="name-asc">Name A-Z</option>
              </select>
            </div>
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {sortedProducts.map((product) => (
            <ProductCard
              key={product._id || Math.random().toString(36).substr(2, 9)} // fallback unique key
              product={product}
              toggleLike={toggleLike}
              isLiked={(id) => likedIds.includes(id?.toString())}
              addToCart={addToCart}
              user={{}} // agar user context se chahiye to useAuth() se le lo
            />
          ))}
        </div>
      </div>
    </div>
  );
}
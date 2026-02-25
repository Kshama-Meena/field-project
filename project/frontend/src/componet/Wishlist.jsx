import React, { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useLike } from "./context/LikeContext";
import { useCart } from "./context/CartContext";     // ← add this if not already
import ProductCard from "./ProductCard";            // ← import your ProductCard
import { useAuth } from "./context/AuthContext"; // ← if ProductCard needs user info
export default function Wishlist() {
  const { likedItems, toggleLike, isLiked } = useLike(); // assuming isLiked exists in context
  const { addToCart } = useCart();                      // for the Add to Cart button inside ProductCard
  const { user } = useAuth(); // ← get user info from AuthContext
  const [sortBy, setSortBy] = useState("price-low");

  // Sorting logic (unchanged)
  const sortedProducts = [...likedItems].sort((a, b) => {
    const priceA = Number(a.price) || 0;
    const priceB = Number(b.price) || 0;

    if (sortBy === "price-low") return priceA - priceB;
    if (sortBy === "price-high") return priceB - priceA;
    if (sortBy === "name-asc") return (a.name || "").localeCompare(b.name || "");
    return 0;
  });

  if (!likedItems.length) {
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
    <div className="min-h-screen bg-[#f0fdf4] py-12 px-6"> {/* same bg as Menu product section */}
      <div className="max-w-7xl mx-auto">
        {/* Header – matching general style of your app */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 mb-12">
          <div className="flex items-center gap-5">
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight">
              Your Wishlist
            </h1>
            <span className="px-5 py-2 bg-green-100 text-green-800 font-semibold rounded-full text-lg shadow-sm">
              {likedItems.length} {likedItems.length === 1 ? "item" : "items"}
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            {/* Optional: Add All button – can implement logic later */}
            <button
              className="bg-gradient-to-r from-emerald-600 to-lime-600 hover:from-emerald-700 hover:to-lime-700 text-white font-semibold py-3 px-7 rounded-full shadow-lg transition flex items-center gap-2"
            >
              <FaShoppingCart />
              Add All to Cart
            </button>

            <div className="flex items-center gap-3 bg-white px-5 py-2.5 rounded-full shadow-sm border border-gray-200">
              <label htmlFor="sort" className="font-medium text-gray-700 whitespace-nowrap">
                Sort by
              </label>
              <select
                id="sort"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-transparent focus:ring-0 border-none text-gray-800 font-medium cursor-pointer outline-none"
              >
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="name-asc">Name: A to Z</option>
              </select>
            </div>
          </div>
        </div>

        {/* Product Grid – same layout & spacing as Menu */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {sortedProducts.map((product) => (
            <ProductCard
              key={product._id}
              product={product}
              toggleLike={toggleLike}
              isLiked={isLiked}           // assuming your context has isLiked(id) function
              addToCart={addToCart}
              user={user}              // pass if ProductCard needs it (auth checks, etc.)
            />
          ))}
        </div>
      </div>
    </div>
  );
}

import { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { useLike } from "./context/LikeContext";
import { useCart } from "./context/CartContext";
import { useAuth } from "./context/AuthContext";
import ProductCard from "./ProductCard"; // ← Yeh import kar liya

function Fruits() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { toggleLike, isLiked } = useLike();
  const { addToCart } = useCart();
  const { user } = useAuth();

  useEffect(() => {
    setLoading(true);
    axios
      .get("http://localhost:5000/api/products")
      .then((res) => {
        const fruitProducts = res.data.filter((item) => item.category === "fruit");
        setProducts(fruitProducts);
        setLoading(false);
      })
      .catch((err) => {
        console.log("Error fetching fruits:", err);
        setLoading(false);
      });
  }, []);

  return (
    <>
      {/* Hero Section - same */}
      <section
        className="relative w-full h-[80vh] md:h-[95vh] bg-contain bg-right bg-no-repeat bg-fixed"
        style={{
          backgroundImage:
            "url('https://res.cloudinary.com/ds8w1kut5/image/upload/v1766763290/frutsh_a1qoyy.png')",
          backgroundSize: "contain",
          backgroundPosition: "right",
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 flex items-center h-full px-6 md:px-16">
          <div className="max-w-lg md:max-w-xl lg:ml-20 text-left">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight drop-shadow-2xl">
              Naturally <span className="text-yellow-400">Sweet</span> <br />
              & <span className="text-green-300">Organically</span> Fresh
            </h1>
            <p className="mt-6 text-gray-100 text-lg md:text-2xl font-medium leading-relaxed">
              Experience the finest seasonal produce. Farm-to-kitchen freshness
              with guaranteed organic quality and taste.
            </p>
            <button className="mt-8 px-8 md:px-10 py-3 md:py-4 bg-green-600 hover:bg-green-700 text-white font-bold text-lg rounded-xl shadow-2xl hover:scale-105 transition-all duration-300">
              Shop Fresh Today
            </button>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <div className="bg-[#f0fdf4] min-h-screen py-12 px-4 md:px-8">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 text-center mb-12">
          Fresh <span className="text-yellow-600">Fruits</span>
        </h2>

        {loading ? (
          <div className="text-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-green-500 mx-auto"></div>
            <p className="mt-4 text-gray-600">Loading fresh fruits...</p>
          </div>
        ) : products.length === 0 ? (
          <div className="text-center py-20 text-gray-600">
            <p className="text-xl">No fruits available right now.</p>
          </div>
        ) : (
          <div className="max-w-8xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
            {products.map((item) => (
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
        )}

        <div className="text-center mt-12">
          <button className="bg-yellow-400 text-gray-800 font-extrabold py-3 px-10 rounded-full border-2 border-yellow-600 hover:bg-yellow-500 hover:scale-105 transition-all duration-300 shadow-xl">
            Browse All Products
          </button>
        </div>
      </div>
    </>
  );
}

export default Fruits;
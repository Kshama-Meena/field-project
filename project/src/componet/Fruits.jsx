import { useEffect, useState } from "react";
import axios from "axios";
import { FaShoppingCart } from 'react-icons/fa';

function Fruits() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/products")
      .then(res => {
        const fruitProducts = res.data.filter(item => item.category === "fruit");
        setProducts(fruitProducts);
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <>
      <section
        className="relative w-full h-[95vh] bg-contain bg-right bg-no-repeat bg-fixed bg-white"
        style={{
          backgroundImage: "url('frutsh.jpg')",
          backgroundSize: 'contain',
          backgroundPosition: 'right',
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 flex items-center h-full px-6 md:px-16">
          <div className="max-w-lg md:max-w-xl lg:ml-20 text-left">
            <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-snug drop-shadow-xl">
              Naturally <span className="text-yellow-400">Sweet</span> <br />
              & <span className="text-green-300">Organically</span> Fresh
            </h1>
            <p className="mt-4 text-gray-100 text-xl md:text-2xl font-semibold leading-relaxed">
              Experience the finest seasonal produce. We deliver farm-to-kitchen freshness
              with guaranteed organic quality and taste.
            </p>
            <button className="mt-6 px-10 py-4 bg-green-500 text-white font-bold text-lg rounded-xl shadow-2xl hover:bg-green-600 hover:scale-105 transition-transform duration-300">
              Shop Fresh Today
            </button>
          </div>
        </div>
      </section>

      <div className="bg-[#fdf6ee] min-h-screen py-12 px-4 md:px-6 lg:px-8">
        <h2 className="text-4xl font-extrabold text-gray-800 text-center mb-10">
          Seasonal <span className="text-yellow-600">Freshness</span>
        </h2>

        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
          {products.map((item) => (
            <div
              key={item._id}
              className="bg-white rounded-2xl shadow-lg p-4 sm:p-6 text-center relative hover:shadow-2xl transition-all duration-300 group"
            >
              <img
                src={` ${item.image}`}
                alt={item.name}
                className="w-32 h-32 md:w-40 md:h-40 object-contain mx-auto mt-4 transition-transform duration-300 group-hover:scale-110"
              />

              <h3 className="mt-4 text-base md:text-xl font-bold text-gray-800">
                {item.name}
              </h3>
              <p className="text-sm text-gray-500 border-b border-gray-200 pb-2">
          {item.subtext || "Fresh & Organic"}
        </p>
              <div className="flex justify-center items-center gap-2 mt-3">
                <span className="text-yellow-600 font-extrabold text-base md:text-lg">
                  ₹{item.price}
                </span>
              </div>

              <button className="mt-5 bg-yellow-400 hover:bg-yellow-500 text-white font-semibold py-2 px-5 rounded-full flex items-center justify-center gap-2 mx-auto transition-transform duration-300 group-hover:scale-105">
                Add to Cart <FaShoppingCart className="text-base" />
              </button>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-yellow-400 text-gray-800 font-extrabold py-3 px-10 rounded-full border-2 border-yellow-600 hover:bg-yellow-500 hover:scale-105 transition-transform duration-300 shadow-xl">
            Browse All Products
          </button>
        </div>
      </div>
    </>
  );
}
export default Fruits;

import React from "react";
import { FiHome } from "react-icons/fi";
import { FaBoxOpen, FaLeaf, FaTruck, FaShoppingCart } from "react-icons/fa";
import { FaStar } from "react-icons/fa";

export default function Menu() {
  const categories = [

    {
      title: "Tomatoes",
      description:
        "Bursting with tangy freshness — add them to your salad, pasta, or cook up a saucy delight!",
      image: "logo1.jpg",
    },
    {
      title: "Blueberries",
      description:
        "Tiny power-packed bites of sweetness — perfect for smoothies, desserts, or a quick healthy snack!",
      image: "blueberries.jpg",
    },
    {
      title: "Strawberries",
      description:
        "Juicy, red, and irresistibly sweet — blend into shakes, top on cakes, or enjoy fresh from the basket!",
      image: "logo2.jpg",
    },
    {
      title: "Spinach",
      description:
        "Fresh green goodness — toss it in a salad, mix in curries, or cook a hearty homemade dish!",
      image: "spinach.jpg",
    },
  ];
  const products = [
    {
      id: 1,
      name: "Tomato",
      subtext: "Fresh Harvest",
      price: "$4.70",
      oldPrice: "$7.00",
      image: "Tomato.jpg",
      rating: 4.5,
      sale: true,
    },
    {
      id: 2,
      name: "Eggplant",
      subtext: "Farm Fresh",
      price: "$5.99",
      image: "Eggplant.jpg",
      rating: 5,
      sale: false,
    },
    {
      id: 3,
      name: "Matar",
      subtext: "Sweet Peas",
      price: "$9.99",
      image: "Matar.jpg",
      rating: 4.5,
      sale: false,
    },
    { 
      id: 4,
      name: "Chili",
      subtext: "Hot Spice",
      price: "$7.00",
      oldPrice: "$9.00",
      image: "Chili.jpg",
      rating: 5,
      sale: true,
    },
    {
      id: 5,
      name: "Orange",
      subtext: "Citrus Fresh",
      price: "$9.99",
      image: "Orange1.jpg",
      rating: 4.5,
      sale: false,
    },
    {
      id: 6,
      name: "Mango",
      subtext: "Tropical King",
      price: "$7.00",
      oldPrice: "$9.00",
      image: "mango.jpg",
      rating: 5,
      sale: true,
    },
    {
      id: 7,
      name: "Grapes",
      subtext: "Juicy Bunch",
      price: "$7.00",
      oldPrice: "$9.00",
      image: "grapes1.jpg",
      rating: 5,
      sale: true,
    },
    {
      id: 8,
      name: "Strawberry",
      subtext: "Sweet Berry",
      price: "$7.00",
      oldPrice: "$9.00",
      image: "stroberi.jpg",
      rating: 5,
      sale: true,
    },
  ];
  return (
    <div>
      {/* Hero Section */}
      <section
        className="relative w-full h-[80vh] bg-cover bg-center"
        style={{ backgroundImage: "url('/background1.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 flex items-center h-full px-6 md:px-16">
          <div className="max-w-2xl text-left">
            <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight drop-shadow-lg">
              Fresh & Organic <br />
              <span className="text-green-400">Vegetables Everyday</span>
            </h1>
            <p className="mt-4 text-gray-200 text-lg md:text-xl leading-relaxed">
              Handpicked vegetables delivered fresh from farms to your kitchen.
              Choose from a wide range of healthy and organic options today!
            </p>
            <button className="mt-6 px-8 py-3 bg-green-600 text-white font-semibold rounded-xl shadow-lg hover:bg-green-700 hover:scale-105 transition-transform duration-300">
              Explore Menu
            </button>
          </div>
        </div>
      </section>
      {/* Feature Section */}
      <div className="py-12 px-4 mt-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          <div className="flex flex-col items-center">
            <div className="bg-yellow-400 p-4 rounded-full mb-4">
              <FiHome className="text-2xl" />
            </div>
            <h3 className="font-semibold text-lg mb-2">
              Family-Owned & Operated
            </h3>
            <p className="text-sm text-gray-700">
              We’ve been growing with care for generations, right here on our
              land.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-yellow-400 p-4 rounded-full mb-4">
              <FaBoxOpen className="text-2xl" />
            </div>
            <h3 className="font-semibold text-lg mb-2">Seasonal Farm Boxes</h3>
            <p className="text-sm text-gray-700">
              Get a rotating selection of what’s fresh, local, and in-season.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-yellow-400 p-4 rounded-full mb-4">
              <FaLeaf className="text-2xl" />
            </div>
            <h3 className="font-semibold text-lg mb-2">
              Sustainable & Eco-Friendly
            </h3>
            <p className="text-sm text-gray-700">
              We use regenerative farming methods and minimal packaging.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-yellow-400 p-4 rounded-full mb-4">
              <FaTruck className="text-2xl" />
            </div>
            <h3 className="font-semibold text-lg mb-2">
              Delivered to Your Door
            </h3>
            <p className="text-sm text-gray-700">
              Convenient local delivery and pickup options make eating well
              easy.
            </p>
          </div>
        </div>
      </div>-
      {/* Product Section */}
      <div className="bg-[#fdf6ee] min-h-screen py-12 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl shadow-md p-6 text-center relative hover:shadow-lg transition-all duration-300 group"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-36 h-36 object-contain mx-auto mt-4 transition-transform duration-300 group-hover:scale-110"
              />
              <h3 className="mt-4 text-lg font-semibold text-gray-800">
                {item.name}
              </h3>
              <p className="text-sm text-gray-500 border-b border-gray-200 pb-2">
                {item.subtext}
              </p>
              <div className="flex justify-center items-center gap-2 mt-3">
                {item.oldPrice && (
                  <span className="text-gray-400 line-through text-sm">
                    {item.oldPrice}
                  </span>
                )}
                <span className="text-yellow-600 font-semibold">
                  {item.price}
                </span>
              </div>
              <button className="mt-5 bg-yellow-400 hover:bg-yellow-500 text-white font-semibold py-2 px-5 rounded-full flex items-center justify-center gap-2 mx-auto transition-transform duration-300 group-hover:scale-105">
                Add to Cart <FaShoppingCart />
              </button>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <button className="bg-yellow-400 text-gray-800 font-semibold py-3 px-8 rounded-full  border border-yellow-500 hover:bg-yellow-500 hover:scale-105 transition-transform duration-300">
            Browse All Products
          </button>
        </div>
      </div>
  <section className="px-6 md:px-12 mx-6 mt-16 mb-16 grid grid-cols-1 md:grid-cols-2 gap-10 w-auto items-center bg-green-100 rounded-2xl overflow-hidden">
  {/* Left: Image */}
  <div className="w-full flex justify-center">
    <img
      src="food2.jpg"
      alt="Fresh Vegetables"
      className="w-full max-h-[600px] object-contain rounded-2xl"
    />
  </div>
  {/* Right: Text */}
 <div className="flex flex-col justify-center p-8">
  <h2 className="text-3xl md:text-5xl font-bold text-black mb-6">
    Fresh Vegetable & Fruit Basket
  </h2>
  <p className="text-gray-700 text-lg md:text-xl mb-4">
    Handpicked from trusted local farms and delivered with care — our fruits and vegetables are packed with freshness and nutrition.
  </p>
  <p className="text-gray-700 text-lg md:text-xl mb-4">
    Eat healthy, stay energetic, and enjoy nature’s goodness every single day with our organic, farm-fresh produce!
  </p>
  <p className="text-gray-700 text-lg md:text-xl mb-6">
    From juicy fruits to crunchy greens — every bite brings you the taste of purity and health straight from the farm to your table.
  </p>
  <button className="bg-green-600 text-white font-semibold py-3 px-6 rounded-xl hover:bg-green-700 transition-all duration-300 w-max">
    Explore Now
  </button>
</div>
</section>
    </div>
  );
} 
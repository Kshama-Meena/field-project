import React, { useState, useEffect } from "react";
import { motion } from "framer-motion"; // Added for premium feel
import { ChevronLeft, ChevronRight, ShoppingCart, Leaf, Truck, Clock, Zap, Smile } from "lucide-react";
import { FaAppleAlt, FaArrowLeft, FaCheckCircle } from "react-icons/fa";
import TopProducts from "./TopProducts";

// ---------- HERO SECTION (FOOD LANDING) ----------
function FoodLanding() {
  const [showOrderOptions, setShowOrderOptions] = useState(false);

  return (
    <div className="bg-green-50/50">
      <div
        className="min-h-[90vh] flex flex-col md:flex-row items-center justify-center px-6 md:px-16 lg:px-24 py-12 md:py-20 relative overflow-hidden"
        style={{
          backgroundImage: "linear-gradient(rgba(255,255,255,0.8), rgba(255,255,255,0.8)), url('https://www.transparenttextures.com/patterns/cubes.png')",
          backgroundColor: "#f0fdf4",
        }}
      >
        <div className="max-w-8xl w-full flex flex-col md:flex-row items-center gap-12 lg:gap-20 relative z-10">
          
          {/* LEFT CONTENT */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 text-center md:text-left"
          >
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-bold mb-6"
            >
              <Leaf className="w-4 h-4" /> 100% ORGANIC & FRESH
            </motion.div>

            <h1 className="text-5xl sm:text-6xl lg:text-8xl font-black text-gray-900 leading-[1.1] tracking-tight">
              <span className="text-green-600 block">Your Daily Dose of</span>
              <span className="text-orange-500 italic font-serif">Freshness</span>
            </h1>

            <p className="mt-8 text-gray-600 text-lg md:text-2xl max-w-xl mx-auto md:mx-0 leading-relaxed font-medium">
              Experience the taste of nature. Premium fruits & vegetables 
              delivered <span className="text-green-600 font-bold underline decoration-orange-400">straight from the fields</span> to your kitchen.
            </p>

            {/* BUTTONS */}
            <div className="mt-10 flex flex-col sm:flex-row flex-wrap gap-5 justify-center md:justify-start">
              {!showOrderOptions ? (
                <>
                  <button
                    onClick={() => setShowOrderOptions(true)}
                    className="flex items-center justify-center px-10 py-5 text-lg font-bold rounded-2xl shadow-2xl text-white bg-orange-500 hover:bg-orange-600 transition-all transform hover:-translate-y-1 w-full sm:w-auto"
                  >
                    Order Now
                    <ShoppingCart className="ml-2 w-6 h-6" />
                  </button>

                  <button
                    onClick={() => (window.location.href = '/menu')}
                    className="flex items-center justify-center px-10 py-5 text-lg font-bold border-2 border-green-600 rounded-2xl text-green-700 hover:bg-green-600 hover:text-white transition-all shadow-lg w-full sm:w-auto"
                  >
                    Explore Menu
                    <ChevronRight className="ml-2 w-6 h-6" />
                  </button>
                </>
              ) : (
                <div className="flex flex-wrap gap-4 animate-in fade-in slide-in-from-left-4">
                  <button
                    onClick={() => (window.location.href = '/fruits')}
                    className="px-8 py-4 bg-orange-100 hover:bg-orange-500 hover:text-white text-orange-800 rounded-2xl font-bold border-2 border-orange-200 transition-all flex items-center gap-3"
                  >
                    <FaAppleAlt className="w-5 h-5" /> Order Fruits
                  </button>
                  <button
                    onClick={() => (window.location.href = '/vegetables')}
                    className="px-8 py-4 bg-green-100 hover:bg-green-600 hover:text-white text-green-800 rounded-2xl font-bold border-2 border-green-200 transition-all flex items-center gap-3"
                  >
                    <Leaf className="w-5 h-5" /> Order Vegetables
                  </button>
                  <button
                    onClick={() => setShowOrderOptions(false)}
                    className="px-6 py-4 border-2 border-gray-300 text-gray-600 rounded-2xl hover:bg-gray-100 transition-all flex items-center gap-2"
                  >
                    <FaArrowLeft />
                  </button>
                </div>
              )}
            </div>
          </motion.div>

          {/* RIGHT IMAGE SECTION */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1 }}
            className="relative w-full md:w-1/2 flex items-center justify-center"
          >
            <div className="absolute inset-0 bg-green-200/50 rounded-full blur-[120px] scale-75 animate-pulse"></div>
            <img
              src="https://res.cloudinary.com/ds8w1kut5/image/upload/v1766763538/bowl_pddmxo.png"
              alt="Salad Bowl"
              className="w-full max-w-[550px] lg:max-w-[650px] h-auto object-contain drop-shadow-[0_35px_35px_rgba(0,0,0,0.2)] hover:scale-105 transition-transform duration-700"
            />
          </motion.div>

        </div>
      </div>
    </div>
  );
}

// ---------- WHY CHOOSE US ----------
function WhyChooseUs() {
  const features = [
    { icon: <Truck className="w-8 h-8 text-white" />, title: "Free Shipping", desc: "Above ₹500", bg: "bg-orange-500" },
    { icon: <Leaf className="w-8 h-8 text-white" />, title: "100% Organic", desc: "Certified Produce", bg: "bg-green-600" },
    { icon: <Clock className="w-8 h-8 text-white" />, title: "24/7 Support", desc: "Always Online", bg: "bg-blue-500" },
    { icon: <Zap className="w-8 h-8 text-white" />, title: "Express", desc: "Within 24 Hours", bg: "bg-yellow-500" },
  ];

  return (
    <div className="bg-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">Why FreshCart?</h2>
          <div className="w-24 h-2 bg-green-500 mx-auto rounded-full"></div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((f, i) => (
            <motion.div 
              whileHover={{ y: -10 }}
              key={i} 
              className="p-8 bg-gray-50 rounded-[2rem] border border-gray-100 shadow-xl shadow-gray-200/50 flex flex-col items-center text-center transition-all"
            >
              <div className={`${f.bg} p-4 rounded-2xl mb-6 shadow-lg`}>
                {f.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{f.title}</h3>
              <p className="text-gray-500 font-medium">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ---------- SLIDER SECTION ----------
function Slider() {
  const slides = [
    {
      image: "https://res.cloudinary.com/ds8w1kut5/image/upload/v1766763385/slide1_zeufua.png",
      title: "The Fresh Organic",
      highlight: "Vegetables",
      subtitle: "NATURE'S BEST FOR YOU",
    },
    {
      image: "https://res.cloudinary.com/ds8w1kut5/image/upload/v1766763390/slide2_lhxwye.png",
      title: "Healthy & Juicy",
      highlight: "Fruits",
      subtitle: "SWEETNESS WITHOUT GUILT",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="relative overflow-hidden rounded-[3rem] bg-green-900 h-[500px] md:h-[600px] shadow-2xl">
          <motion.div 
            key={currentIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="absolute inset-0 flex flex-col md:flex-row items-center p-12 lg:p-20"
          >
            <div className="flex-1 text-white text-center md:text-left">
              <p className="text-lime-400 font-bold tracking-[0.3em] mb-4 uppercase">{slides[currentIndex].subtitle}</p>
              <h2 className="text-4xl md:text-7xl font-black mb-8 leading-tight">
                {slides[currentIndex].title} <br />
                <span className="text-lime-400 italic">{slides[currentIndex].highlight}</span>
              </h2>
              <button onClick={() => window.location.href='/menu'} className="bg-white text-green-900 px-10 py-4 rounded-2xl font-black text-lg hover:bg-lime-400 transition-colors">
                SHOP NOW
              </button>
            </div>
            <div className="flex-1 mt-10 md:mt-0">
              <img src={slides[currentIndex].image} className="w-full h-auto max-h-[400px] object-contain drop-shadow-2xl" alt="slide" />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

// ---------- MAIN HOME COMPONENT ----------
export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <FoodLanding />
      <WhyChooseUs />
      <Slider />
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-6 mb-12 flex flex-col items-center">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900">Top Products</h2>
            <div className="w-20 h-2 bg-orange-500 mt-4 rounded-full"></div>
        </div>
        <TopProducts />
      </div>
    </div>
  );
}
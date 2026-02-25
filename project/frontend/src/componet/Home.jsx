import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ChevronLeft, 
  ChevronRight, 
  ShoppingCart, 
  Leaf, 
  Truck, 
  Clock, 
  Zap, 
  ArrowRight 
} from "lucide-react";
import { FaAppleAlt, FaArrowLeft } from "react-icons/fa";
import TopProducts from "./TopProducts";

// ---------- HERO SECTION (FOOD LANDING) ----------
function FoodLanding() {
  const [showOrderOptions, setShowOrderOptions] = useState(false);

  return (
    <div className="bg-green-50/50 pt-16 md:pt-20">
      <div
        className="min-h-[85vh] flex flex-col md:flex-row items-center justify-center px-6 md:px-16 lg:px-24 py-12 relative overflow-hidden"
        style={{
          backgroundImage: "linear-gradient(rgba(255,255,255,0.85), rgba(255,255,255,0.85)), url('https://www.transparenttextures.com/patterns/cubes.png')",
          backgroundColor: "#f0fdf4",
        }}
      >
        <div className="max-w-8xl w-full flex flex-col md:flex-row items-center gap-12 lg:gap-20 relative z-10">
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 text-center md:text-left"
          >
            <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-bold mb-6">
              <Leaf className="w-4 h-4" /> 100% ORGANIC & FRESH
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-8xl font-black text-gray-900 leading-[1.1] tracking-tight">
              <span className="text-green-600 block">Your Daily Dose of</span>
              <span className="text-orange-500 italic font-serif">Freshness</span>
            </h1>

            <p className="mt-8 text-gray-600 text-lg md:text-2xl max-w-xl mx-auto md:mx-0 leading-relaxed font-medium">
              Experience the taste of nature. Premium fruits & vegetables 
              delivered <span className="text-green-600 font-bold decoration-orange-400 decoration-2">straight from the fields</span>.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row flex-wrap gap-5 justify-center md:justify-start">
              {!showOrderOptions ? (
                <>
                  <button
                    onClick={() => setShowOrderOptions(true)}
                    className="flex items-center justify-center px-10 py-5 text-lg font-bold rounded-2xl shadow-2xl text-white bg-orange-500 hover:bg-orange-600 transition-all transform hover:-translate-y-1 w-full sm:w-auto"
                  >
                    Order Now <ShoppingCart className="ml-2 w-6 h-6" />
                  </button>
                  <button
                    onClick={() => (window.location.href = '/menu')}
                    className="flex items-center justify-center px-10 py-5 text-lg font-bold border-2 border-green-600 rounded-2xl text-green-700 hover:bg-green-600 hover:text-white transition-all shadow-lg w-full sm:w-auto"
                  >
                    Explore Menu <ChevronRight className="ml-2 w-6 h-6" />
                  </button>
                </>
              ) : (
                <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                  <button
                    onClick={() => (window.location.href = '/fruits')}
                    className="px-8 py-4 bg-orange-100 hover:bg-orange-500 hover:text-white text-orange-800 rounded-2xl font-bold border-2 border-orange-200 transition-all flex items-center gap-3"
                  >
                    <FaAppleAlt /> Order Fruits
                  </button>
                  <button
                    onClick={() => (window.location.href = '/vegetables')}
                    className="px-8 py-4 bg-green-100 hover:bg-green-600 hover:text-white text-green-800 rounded-2xl font-bold border-2 border-green-200 transition-all flex items-center gap-3"
                  >
                    <Leaf /> Order Vegetables
                  </button>
                  <button
                    onClick={() => setShowOrderOptions(false)}
                    className="px-6 py-4 border-2 border-gray-300 text-gray-600 rounded-2xl hover:bg-gray-100 transition-all"
                  >
                    <FaArrowLeft />
                  </button>
                </div>
              )}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative w-full md:w-1/2 flex items-center justify-center"
          >
            <div className="absolute inset-0 bg-green-200/50 rounded-full blur-[100px] scale-75 animate-pulse"></div>
            <img
              src="https://res.cloudinary.com/ds8w1kut5/image/upload/v1766763538/bowl_pddmxo.png"
              alt="Salad Bowl"
              className="w-full max-w-[550px] lg:max-w-[600px] h-auto object-contain drop-shadow-2xl z-10"
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
              className="p-8 bg-gray-50 rounded-[2rem] border border-gray-100 shadow-lg flex flex-col items-center text-center transition-all"
            >
              <div className={`${f.bg} p-4 rounded-2xl mb-6 shadow-md`}>
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

// ---------- MODERN SLIDER SECTION ----------
function Slider() {
  const slides = [
    {
      image: "https://res.cloudinary.com/ds8w1kut5/image/upload/v1766763385/slide1_zeufua.png",
      title: "The Fresh Organic",
      highlight: "Vegetables",
      subtitle: "Straight from the farm to your doorstep",
      bgColor: "bg-emerald-50",
      accent: "text-emerald-600",
    },
    {
      image: "https://res.cloudinary.com/ds8w1kut5/image/upload/v1766763390/slide2_lhxwye.png",
      title: "Healthy & Juicy",
      highlight: "Fresh Fruits",
      subtitle: "Nature's candy, packed with vitamins",
      bgColor: "bg-orange-50",
      accent: "text-orange-500",
    },
    {
      image: "https://res.cloudinary.com/ds8w1kut5/image/upload/v1766763390/slide3_mfjlpj.png",
      title: "Everyday Essentials",
      highlight: "Super Savings",
      subtitle: "Get up to 30% off on weekly combos",
      bgColor: "bg-blue-50",
      accent: "text-blue-600",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => nextSlide(), 6000);
    return () => clearInterval(timer);
  }, [currentIndex]);

  const nextSlide = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const slideVariants = {
    initial: (d) => ({ x: d > 0 ? 500 : -500, opacity: 0 }),
    animate: { x: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } },
    exit: (d) => ({ x: d > 0 ? -500 : 500, opacity: 0, transition: { duration: 0.6, ease: "easeIn" } }),
  };

  return (
    <section className="py-20 px-4 md:px-8 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto relative group">
        <div className={`relative h-[550px] md:h-[600px] rounded-[3rem] overflow-hidden transition-colors duration-700 ${slides[currentIndex].bgColor}`}>
          
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="absolute inset-0 flex flex-col md:flex-row items-center px-8 md:px-20"
            >
              <div className="flex-1 text-center md:text-left z-10 space-y-6">
                <p className="text-sm md:text-lg font-bold uppercase tracking-[0.2em] text-gray-400">Premium Quality</p>
                <h2 className="text-4xl md:text-7xl font-black text-gray-900 leading-tight">
                  {slides[currentIndex].title} <br />
                  <span className={slides[currentIndex].accent}>{slides[currentIndex].highlight}</span>
                </h2>
                <p className="text-lg text-gray-600 font-medium max-w-md mx-auto md:mx-0">{slides[currentIndex].subtitle}</p>
                <button 
                  onClick={() => window.location.href='/menu'}
                  className="bg-gray-900 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-black transition-all flex items-center gap-3 mx-auto md:mx-0 shadow-xl"
                >
                  Shop Collection <ArrowRight className="w-5 h-5" />
                </button>
              </div>

              <div className="flex-1 relative flex justify-center items-center h-full">
                <div className="absolute w-64 h-64 md:w-[450px] md:h-[450px] bg-white rounded-full -z-0 shadow-inner"></div>
                <img
                  src={slides[currentIndex].image}
                  className="w-[85%] md:w-[95%] max-h-[400px] object-contain drop-shadow-2xl z-10 transition-transform duration-500 hover:scale-105"
                  alt="Slide"
                />
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Controls */}
          <button onClick={prevSlide} className="absolute left-6 top-1/2 -translate-y-1/2 bg-white/90 p-4 rounded-full shadow-lg opacity-0 group-hover:opacity-100 hidden md:block transition-all hover:bg-white">
            <ChevronLeft />
          </button>
          <button onClick={nextSlide} className="absolute right-6 top-1/2 -translate-y-1/2 bg-white/90 p-4 rounded-full shadow-lg opacity-0 group-hover:opacity-100 hidden md:block transition-all hover:bg-white">
            <ChevronRight />
          </button>

          {/* Dots */}
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-3">
            {slides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => { setDirection(idx > currentIndex ? 1 : -1); setCurrentIndex(idx); }}
                className={`transition-all duration-300 rounded-full h-2.5 ${idx === currentIndex ? "w-10 bg-gray-900" : "w-2.5 bg-gray-300"}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ---------- MAIN HOME COMPONENT ----------
export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <FoodLanding />
      <WhyChooseUs />
      <Slider />
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 mb-16 flex flex-col items-center text-center">
            <h2 className="text-4xl md:text-6xl font-black text-gray-900">Weekly Top Picks</h2>
            <p className="text-gray-500 mt-4 text-lg font-medium">Handpicked fresh organic products just for you</p>
            <div className="w-24 h-2 bg-orange-500 mt-6 rounded-full"></div>
        </div>
        <TopProducts />
      </div>
    </div>
  );
}
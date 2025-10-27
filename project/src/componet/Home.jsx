import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { ShoppingCart, Headphones, Tag, Smile, Star, Search, Leaf, Apple } from "lucide-react";
import { FaAppleAlt } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import { Truck, Clock, Zap } from 'lucide-react';

// import { ChevronLeft, ChevronRight, Truck, Leaf, Smile } from "lucide-react"; // React Icons
import { FaCheckCircle } from "react-icons/fa";


import Menu from "./Menu";
import TopProducts from "./TopProducts";




function FoodLanding() {
  const [quantity, setQuantity] = useState(2);
  const [showOrderOptions, setShowOrderOptions] = useState(false);


  return ( 
    <div className="bg-green-50">
      <div
        className="min-h-screen flex flex-col md:flex-row items-center justify-center px-4 sm:px-6 md:px-10 lg:px-16 py-10 md:py-16 relative overflow-hidden rounded-3xl"
        style={{
          backgroundImage: "url('new1.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundColor: "#f9f9f9",
        }}
      >
        <div className="max-w-7xl w-full flex flex-col md:flex-row items-center gap-10 md:gap-16 lg:gap-24 relative z-10">

          {/* ---------- LEFT CONTENT ---------- */}
          <div className="flex-1 text-center md:text-left px-2 sm:px-4">
            <h1 className="text-3xl sm:text-4xl md:text-4xl lg:text-6xl xl:text-7xl font-extrabold text-gray-900 leading-snug sm:leading-tight">
              <span className="text-green-600 block md:inline-block ">
                Your Daily Dose of
              </span>{" "}
              <span className="text-orange-500 block md:inline-block md:text-3xl">
                Freshness, Just a Click Away
              </span>
            </h1>

            <p className="mt-4 sm:mt-6 text-gray-600 text-sm sm:text-base md:text-lg lg:text-xl max-w-md mx-auto md:mx-0 leading-relaxed">
              Fresh and organic fruits & vegetables delivered straight to your
              door.{" "}
              <span className="font-semibold text-gray-800">
                Healthy, Tasty, and Super Fresh!
              </span>
            </p>

            {/* ---------- BUTTONS ---------- */}
            <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row flex-wrap gap-4 justify-center md:justify-start">
              {!showOrderOptions ? (
                <>
                  {/* 🔶 ORDER NOW BUTTON */}
                  <button
                    onClick={() => setShowOrderOptions(true)}
                    className="flex items-center justify-center px-6 sm:px-8 py-3 text-sm sm:text-base md:text-lg border border-transparent rounded-full shadow-lg text-white bg-orange-500 hover:bg-orange-600 transition duration-300 transform hover:scale-105 w-full sm:w-auto"
                  >
                    Order Now
                    <ShoppingCart className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
                  </button>

                  {/* 🟢 EXPLORE MENU BUTTON */}
                  <button
                    onClick={() => (window.location.href = '/menu')}
                    className="flex items-center justify-center px-6 sm:px-8 py-3 text-sm sm:text-base md:text-lg border-2 border-green-600 rounded-full text-black hover:bg-green-600 hover:text-white transition duration-300 shadow-md w-full sm:w-auto"
                  >
                    Explore Menu
                    <ChevronRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
                  </button>
                </>
              ) : (
                <>
                  {/* 🍎 Order Fruits */}
                  <button
                    onClick={() => (window.location.href = '/fruits')}
                    className="px-6 py-3 bg-orange-100 hover:bg-orange-200 text-orange-800 rounded-full font-semibold border border-orange-300 shadow transition flex items-center gap-2 justify-center w-full sm:w-auto text-sm sm:text-base"
                  >
                    <FaAppleAlt className="w-4 h-4 sm:w-5 sm:h-5" />
                    Order Fruits
                  </button>

                  {/* 🥕 Order Vegetables */}
                  <button
                    onClick={() => (window.location.href = '/vegetables')}
                    className="px-6 py-3 bg-green-100 hover:bg-green-200 text-green-800 rounded-full font-semibold border border-green-300 shadow transition flex items-center gap-2 justify-center w-full sm:w-auto text-sm sm:text-base"
                  >
                    <Leaf className="w-4 h-4 sm:w-5 sm:h-5" />
                    Order Vegetables
                  </button>

                  {/* 🔙 Back */}
                  <button
                    onClick={() => setShowOrderOptions(false)}
                    className="px-6 py-3 border border-gray-300 text-gray-900 rounded-full hover:bg-gray-100 transition flex items-center gap-2 justify-center w-full sm:w-auto text-sm sm:text-base"
                  >
                    <FaArrowLeft className="w-3 h-3 sm:w-4 sm:h-4" />
                    Back
                  </button>
                </>
              )}
            </div>
          </div>

          {/* ---------- RIGHT IMAGE SECTION ---------- */}
          <div className="relative w-full md:w-[45%] flex items-center justify-end overflow-hidden mt-10 md:mt-0">
  <img
    src="/bowl.png"
    alt="Salad Bowl"
    className="w-full max-w-[450px] h-auto object-contain"
  />
</div>

        </div>
      </div>
    </div>
  );
}
function WhyChooseUs() {
  // Data array for the four feature cards
  const features = [
    {
      icon: <Truck className="w-6 h-6 text-orange-600" />,
      title: "Free Shipping",
      desc: "On all orders above ₹500"
    },
    {
      icon: <Leaf className="w-6 h-6 text-orange-600" />,
      title: "100% Organic",
      desc: "Certified organic produce"
    },
    {
      icon: <Clock className="w-6 h-6 text-orange-600" />,
      title: "24/7 Support",
      desc: "Contact us anytime"
    },
    {
      icon: <Zap className="w-6 h-6 text-orange-600" />,
      title: "Express Delivery",
      desc: "Get it within 24 hours"
    },
  ];

  return (
    <div className="bg-green-50 p-4 sm:p-6 md:p-8 relative overflow-hidden z-0">
      <div
        className="mx-auto py-6 sm:py-8 md:py-10 px-4 sm:px-6 md:px-8 mt-3 rounded-3xl shadow-xl"
        style={{
          backgroundImage: "url('new.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundColor: "#f9f9f9",
        }}
      >
        {/* Section Title */}
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 sm:mb-8 md:mb-12 text-center md:text-left">
          Why Choose Us?
        </h2>

        {/* Responsive Grid for Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex items-start p-4 sm:p-5 md:p-6 bg-white border border-gray-200 rounded-xl shadow-md transition duration-300 hover:shadow-lg"
            >
              {/* Icon */}
              <div className="mr-3 sm:mr-4 mt-1 flex-shrink-0">
                {feature.icon}
              </div>

              {/* Text Content */}
              <div>
                <h3 className="text-base sm:text-lg font-semibold text-gray-900">
                  {feature.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-500 mt-0.5">
                  {feature.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function Slider() {
  const slides = [
    {
      image: "/slide1.jpg",
      title: "The Fresh Organic",
      highlight: "Vegetables",
      subtitle: "Vegetables You Should Be Eating",
    },
    {
      image: "/slide2.jpg",
      title: "Healthy & Juicy",
      highlight: "Fruits",
      subtitle: "Get the Best from Nature",
    },
    {
      image: "/slide3.jpg",
      title: "100% Organic Farm",
      highlight: "Goodness",
      subtitle: "Eat Fresh, Live Fresh",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(false);

  // Auto slide effect
  useEffect(() => {
    const interval = setInterval(() => handleNext(), 7000);
    return () => clearInterval(interval);
  }, []);

  // Common fade function
  const handleTransition = (nextIndex) => {
    setFade(true); // start fade out
    setTimeout(() => {
      setCurrentIndex(nextIndex); // change slide after fade-out
      setFade(false); // fade-in new one
    }, 400); // timing matches duration-700 (approx 0.4s)
  };

  const handlePrev = () => {
    const newIndex = currentIndex === 0 ? slides.length - 1 : currentIndex - 1;
    handleTransition(newIndex);
  };

  const handleNext = () => {
    const newIndex = currentIndex === slides.length - 1 ? 0 : currentIndex + 1;
    handleTransition(newIndex);
  };

  return (
    <div className="relative bg-gray-50 py-8 sm:py-10 md:py-16">
      {/* Main Slider Container */}
      <div className="relative w-full max-w-7xl mx-auto overflow-hidden rounded-3xl shadow-2xl h-[450px] sm:h-[550px] md:h-[600px] lg:h-[650px]">
        
        {/* Background */}
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center transition-all duration-700"
          style={{ backgroundImage: "url('/new.jpg')" }}
        ></div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-green-900/80 via-green-800/60 to-transparent"></div>

        {/* Content */}
        <div className="relative h-full flex flex-col-reverse md:flex-row items-center justify-between p-6 sm:p-10 md:p-14 lg:p-20 z-10">

          {/* LEFT TEXT */}
          <div
            className={`w-full md:w-1/2 text-white text-center md:text-left transition-opacity duration-700 ${
              fade ? "opacity-0" : "opacity-100"
            } space-y-4 sm:space-y-6`}
          >
            <p className="text-green-200 text-base sm:text-lg md:text-xl font-semibold tracking-wide">
              {slides[currentIndex].subtitle}
            </p>

            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-snug sm:leading-tight">
              {slides[currentIndex].title} <br />
              <span className="text-lime-400">{slides[currentIndex].highlight}</span>
            </h1>

            <button
              onClick={() => (window.location.href = "/menu")}
              className="bg-lime-400 text-green-900 text-sm sm:text-lg font-bold px-6 sm:px-8 py-2.5 sm:py-3 rounded-xl shadow-xl hover:bg-lime-300 transition duration-300 transform hover:scale-[1.03]"
            >
              Shop Now
            </button>

            {/* Feature Pills */}
            <div className="flex flex-wrap justify-center md:justify-start gap-2 sm:gap-3 mt-3 sm:mt-5">
              <FeaturePill
                icon={<FaCheckCircle className="text-lime-400 w-4 h-4" />}
                text="100% Organic"
              />
              <FeaturePill
                icon={<Truck className="text-orange-400 w-4 h-4" />}
                text="Fast Delivery"
              />
              <FeaturePill
                icon={<Smile className="text-yellow-400 w-4 h-4" />}
                text="Healthy & Happy"
              />
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div
            className={`w-full md:w-1/2 h-60 sm:h-80 md:h-full flex items-center justify-center relative transition-opacity duration-700 ${
              fade ? "opacity-0" : "opacity-100"
            }`}
          >
            <img
              src={slides[currentIndex].image}
              alt={`Slide ${currentIndex + 1}`}
              className="object-contain w-[80%] sm:w-[70%] md:w-[85%] lg:w-[90%] max-h-full"
            />
          </div>
        </div>

        {/* Dots */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => handleTransition(idx)}
              className={`w-2.5 sm:w-3 h-2.5 sm:h-3 rounded-full transition-all ${
                idx === currentIndex
                  ? "bg-lime-400 scale-110"
                  : "bg-white/60"
              }`}
            ></button>
          ))}
        </div>
      </div>

      {/* Arrows */}
      <button
        onClick={handlePrev}
        className="absolute top-1/2 left-3 sm:left-6 -translate-y-1/2 bg-white/70 hover:bg-white p-2 sm:p-3 rounded-full shadow-md transition z-30"
      >
        <ChevronLeft className="w-5 sm:w-6 md:w-7 h-5 sm:h-6 md:h-7 text-gray-800" />
      </button>

      <button
        onClick={handleNext}
        className="absolute top-1/2 right-3 sm:right-6 -translate-y-1/2 bg-white/70 hover:bg-white p-2 sm:p-3 rounded-full shadow-md transition z-30"
      >
        <ChevronRight className="w-5 sm:w-6 md:w-7 h-5 sm:h-6 md:h-7 text-gray-800" />
      </button>
    </div>
  );
}


// Simple utility component for USPs (unchanged)
const FeaturePill = ({ text, icon }) => (
  <div className="flex items-center text-white text-sm">
    <span className="text-action-green mr-2 text-xl font-bold">{icon}</span>
    <span className="text-white font-medium">{text}</span>
  </div>
);





export default function Home() {



  return (
    <>
      <Navbar />

     
      <FoodLanding />
      <WhyChooseUs />
      <Slider />
      <TopProducts />
     




    </>
  );
}

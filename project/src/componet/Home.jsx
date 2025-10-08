import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { ShoppingCart, Headphones, Tag, Smile } from "lucide-react";

import Menu from "./Menu";
// ✅ correct import

// Images
import TopProducts from "./TopProducts";

const sliderImages = [
  "/heroImage1.jpg",
  "/heroImage2.jpg",
  "/heroImage3.jpg"
];



export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prev =>
        prev === sliderImages.length - 1 ? 0 : prev + 1
      );
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const prevSlide = () => {
    setCurrentIndex(prev =>
      prev === 0 ? sliderImages.length - 1 : prev - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex(prev =>
      prev === sliderImages.length - 1 ? 0 : prev + 1
    );
  };

  // Agar showMenu true ho → Menu render karo
  if (showMenu) return <Menu />;
  const features = [
    {
      icon: <ShoppingCart className="w-10 h-10" />,
      title: "Free Fast Delivery",
      desc: "Online Only Exclusions Apply",
    },
    {
      icon: <Headphones className="w-10 h-10" />,
      title: "24/7 Call Support",
      desc: "Contact Us 24 Hours A Day",
    },
    {
      icon: <Tag className="w-10 h-10" />,
      title: "Our Special Offer",
      desc: "Offer Is Any Kind Of Discount",
    },
    {
      icon: <Smile className="w-10 h-10" />,
      title: "For Quality Product",
      desc: "Sell Highest Quality Item",
    },
  ];



  return (
    <>
      <Navbar />

      {/* Slider */}
      <div className="w-full relative overflow-hidden mt-20 pt-5">
        <img
          src={sliderImages[currentIndex]}
          alt="Fresh Vegetables"
          onClick={() => setShowMenu(true)} // ✅ image click
          className="
      w-full 
      h-[200px] sm:h-[200px] md:h-[500px] lg:h-[500px] 
      object-cover 
      transition-all duration-700 
      cursor-pointer
    "
        />

        {/* Left Arrow */}
        <button
          onClick={prevSlide}
          className="
      absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 
      bg-white/80 hover:bg-green-600 
      text-gray-700 hover:text-white 
      p-2 sm:p-3 rounded-full shadow-lg 
      transform transition duration-300 hover:scale-110 z-20
    "
        >
          <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>

        {/* Right Arrow */}
        <button
          onClick={nextSlide}
          className="
      absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 
      bg-white/80 hover:bg-green-600 
      text-gray-700 hover:text-white 
      p-2 sm:p-3 rounded-full shadow-lg 
      transform transition duration-300 hover:scale-110 z-20
    "
        >
          <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>
      </div>

      {/* Right Card - Orange */}
      <div className="flex flex-col md:flex-row font-viga w-full bg-white px-4 sm:px-2 md:px-1 lg:px-5 py-10 md:py-20 gap-6">
        {/* Left Card - Dragon */}
        <div className="flex-1 md:flex-[6] bg-[#E5E5E5] rounded-lg relative overflow-hidden min-h-[200px] sm:min-h-[300px] md:min-h-[200px] group">
          {/* Text Section */}
          <div className="absolute left-2 md:left-1 lg:left-4 top-1/2 -translate-y-1/2 z-10 max-w-[90%] md:max-w-[40%]">
            <p className="text-gray-800 text-sm sm:text-base md:text-lg mb-2 md:mb-4 leading-relaxed tracking-wide">
              Best Offer
            </p>
            <h2 className="font-bold text-xl sm:text-2xl md:text-4xl lg:text-5xl leading-snug tracking-wider mb-4 mt-4 md:mt-8">
              Dragon <br /> <span className="block mt-2 md:mt-4">Fruits</span>
            </h2>
            <a
              href="#"
              className="text-green-600 mt-4 md:mt-20 text-sm sm:text-base md:text-2xl lg:text-2xl inline-block tracking-wide"
            >
              Shop Now →
            </a>
          </div>

          {/* Image */}
          <img
            src="./Cms-Banner-01.jpg"
            alt="Dragon"
            className="absolute right-0 top-1/2 -translate-y-1/2 w-[80%] sm:w-[75%] md:w-[70%] h-auto object-contain transition-transform duration-500 group-hover:scale-110"
          />
        </div>

        {/* Right Card - Orange */}
        <div className="flex-1 md:flex-[10] bg-yellow-100 rounded-lg relative overflow-hidden min-h-[200px] sm:min-h-[300px] md:min-h-[500px] group">
          {/* Text Section */}
          <div className="absolute left-4 md:left-12 lg:left-20 top-1/2 -translate-y-1/2 z-10 max-w-[90%] md:max-w-[50%]">
            <p className="text-gray-800 text-sm sm:text-base md:text-2xl mb-2 md:mb-4 leading-relaxed tracking-wide">
              Flat 30% Off On Fruits
            </p>
            <h2 className="font-bold text-xl sm:text-2xl md:text-4xl lg:text-5xl leading-snug tracking-wider mb-4 mt-4 md:mt-8">
              Get Garden Fresh <br /> <span className="block mt-2 md:mt-4">Pure Orange</span>
            </h2>
            <a
              href="#"
              className="text-green-600 mt-4 md:mt-20 text-sm sm:text-base md:text-2xl lg:text-2xl inline-block tracking-wide"
            >
              Shop Now →
            </a>
          </div>

          {/* Image */}
          <img
            src="./Cms-Banner-02.jpg"
            alt="Orange"
            className="absolute right-0 bottom-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </div>
      </div>



      <div className="flex flex-col md:flex-row font-viga w-full bg-white px-4 sm:px-2 md:px-1 lg:px-5 py-12 md:py-20 gap-6">
        {/* Left Big Box (Strawberry) */}
        <div className="flex-1 md:flex-[10] bg-strawberry rounded-lg relative overflow-hidden min-h-[200px] sm:min-h-[300px] md:min-h-[500px] group">
          {/* Text Section */}
          <div className="absolute left-4 sm:left-8 md:left-16 lg:left-20 
                    top-4 sm:top-6 md:top-1/2 md:-translate-y-1/2 
                    z-10 max-w-[90%] sm:max-w-[70%] md:max-w-[50%]">
            <p className="text-gray-800 text-xs sm:text-sm md:text-xl lg:text-2xl mb-2 sm:mb-3 md:mb-4 leading-relaxed tracking-wider">
              70% off strawberry
            </p>
            <h2 className="font-bold text-lg sm:text-2xl md:text-4xl lg:text-5xl 
                     leading-snug tracking-widest 
                     mb-2 sm:mb-3 md:mb-4 mt-2 sm:mt-4 md:mt-8">
              Shop Strawberry
              <br /> <span className="block mt-2 sm:mt-3 md:mt-4">Fresh Fruit</span>
            </h2>
            <a
              href="#"
              className="text-green-600 inline-block tracking-wide 
                   text-xs sm:text-sm md:text-xl lg:text-2xl 
                   mt-3 sm:mt-6 md:mt-10"
            >
              Shop Now →
            </a>
          </div>

          {/* Image */}
          <img
            src="./Cms-Banner-03.jpg"
            alt="Strawberry"
            className="absolute right-0 bottom-0 w-full h-full 
                 object-contain md:object-cover 
                 transition-transform duration-500 group-hover:scale-110"
          />
        </div>

        {/* Right Small Box (Broccoli) */}
        <div className="flex-1 md:flex-[6] bg-[#E5E5E5] rounded-lg relative overflow-hidden min-h-[200px] sm:min-h-[300px] md:min-h-[500px] group">
          {/* Text Section */}
          <div className="absolute left-4 md:left-4 top-1/2 -translate-y-1/2 z-10 max-w-[85%] sm:max-w-[50%]">
            <p className="text-gray-800 text-sm sm:text-base md:text-lg lg:text-xl mb-2 sm:mb-4 leading-relaxed tracking-wider">
              Best Offer
            </p>
            <h2 className="font-bold text-xl sm:text-2xl md:text-4xl lg:text-5xl leading-snug tracking-widest mb-2 sm:mb-4 mt-4 md:mt-8">
              Broccoli <br /> <span className="block mt-2 sm:mt-4 md:mt-4">Slice</span>
            </h2>
            <a
              href="#"
              className="text-green-600 mt-4 sm:mt-6 md:mt-10 text-sm sm:text-base md:text-2xl lg:text-2xl inline-block tracking-wide"
            >
              Shop Now →
            </a>
          </div>

          {/* Image */}
          <img
            src="./Cms-Banner-04.jpg"
            alt="Broccoli"
            className="absolute right-0 bottom-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </div>
      </div>









      <TopProducts />


      <div className="w-full flex flex-wrap justify-center gap-10 py-20">
        {features.map((item, index) => (
          <div key={index} className="flex items-center gap-20">
            <div className="text-black  ">{item.icon}</div>
            <div>
              <h3 className="font-bold text-lg">{item.title}</h3>
              <p className="text-gray-500 text-sm">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <footer className="bg-green-900 text-white mt-10">
        <div className="container mx-auto px-6 py-16">
          {/* Top Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12">

            {/* Logo & About */}
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">FreshMart</h2>
              <p className="text-gray-300 text-lg sm:text-xl leading-relaxed">
                Your one-stop shop for fresh fruits and vegetables.
                Quality products delivered to your doorstep.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-2xl sm:text-3xl font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-3 text-gray-300 text-lg sm:text-xl">
                <li><a href="/" className="hover:text-white transition">Home</a></li>
                <li><a href="/menu" className="hover:text-white transition">Menu</a></li>
                <li><a href="/services" className="hover:text-white transition">Services</a></li>
                <li><a href="/contact" className="hover:text-white transition">Contact</a></li>
              </ul>
            </div>

            {/* Customer Support */}
            <div>
              <h3 className="text-2xl sm:text-3xl font-semibold mb-4">Customer Support</h3>
              <ul className="space-y-3 text-gray-300 text-lg sm:text-xl">
                <li><a href="#" className="hover:text-white transition">FAQs</a></li>
                <li><a href="#" className="hover:text-white transition">Shipping & Returns</a></li>
                <li><a href="#" className="hover:text-white transition">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition">Terms & Conditions</a></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-2xl sm:text-3xl font-semibold mb-4">Get in Touch</h3>
              <p className="text-gray-300 text-lg sm:text-xl flex items-center gap-2">
                📍 123, Fresh Street, New Delhi
              </p>
              <p className="text-gray-300 text-lg sm:text-xl flex items-center gap-2">
                📞 +91 98765 43210
              </p>
              <p className="text-gray-300 text-lg sm:text-xl flex items-center gap-2">
                📧 support@freshmart.com
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 py-6 text-center text-gray-400 text-sm sm:text-base md:text-lg">
          © {new Date().getFullYear()} <span className="font-semibold text-white">FreshMart</span>. All Rights Reserved.
        </div>
      </footer>





    </>
  );
}

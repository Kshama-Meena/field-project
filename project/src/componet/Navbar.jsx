import { useState, useRef, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { FaShoppingBag, FaTimes } from "react-icons/fa";
import { AiOutlineHeart } from "react-icons/ai";
import { MdOutlineAccountCircle } from "react-icons/md";
import { HiMenu, HiX } from "react-icons/hi";
import { useLike } from "./LikeContext";
import Wishlist from "./Wishlist";
import { useNavigate } from "react-router-dom";




import { FaAppleAlt } from "react-icons/fa";
import { GiCarrot } from "react-icons/gi";

function DropdownMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const categories = [
    { name: "Fruits", icon: <FaAppleAlt className="text-red-400"/>, path: "/fruits" },
    { name: "Vegetables", icon: <GiCarrot className="text-red-400" />, path: "/vegetables" },
  ];

  const handleSelect = (path) => {
    navigate(path);
    setIsOpen(false); // close after selection
  };

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="px-3 py-1.5 bg-green-600 text-white rounded-md"
      >
        Shop By Category
      </button>

      {isOpen && (
        <div className="absolute mt-2 w-44 bg-white border rounded-md shadow-md z-50">
          <ul>
            {categories.map((cat, idx) => (
              <li
                key={idx}
                onClick={() => handleSelect(cat.path)}
                className="flex items-center gap-2 px-3 py-2 cursor-pointer hover:bg-gray-100"
              >
                {cat.icon}
                {cat.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}





function Navbar() {
  const { likedItems } = useLike();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showWishlist, setShowWishlist] = useState(false);
  const navigate = useNavigate();

  // Stop body scroll when Wishlist is open
  useEffect(() => {
    document.body.style.overflow = showWishlist ? "hidden" : "auto";
  }, [showWishlist]);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-teal-900 border-b border-gray-200">
      <div className="w-full flex items-center justify-between px-6 md:px-10 py-3">
        {/* Left Side Dropdown */}
        <DropdownMenu />

        {/* Desktop Links */}
        <ul className="hidden lg:flex space-x-8 text-white font-medium text-lg mx-auto">
          {[
            { name: "Home", path: "/" },
            { name: "Menu", path: "/menu" },
            { name: "Fruits", path: "/fruits" },
            { name: "Vegetables", path: "/vegetables" },
            { name: "Contact", path: "/contact" },

          ].map((item) => (
            <li key={item.path}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `relative transition-all duration-300 hover:text-green-400 ${isActive
                    ? "after:content-[''] after:absolute after:left-0 after:bottom-[-6px] after:w-full after:h-[2px] after:bg-green-500"
                    : ""
                  }`
                }
              >
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Right Side */}
        <div className="flex items-center space-x-6">
          {/* ❤️ & 🛍️ */}
          <div className="relative flex items-center space-x-6 text-white">
            <NavLink
              to="/wishlist"
              className={({ isActive }) =>
                `relative text-2xl transition-all duration-300 ${isActive 
                    ? "after:content-[''] after:absolute after:left-0 after:bottom-[-6px] after:w-full after:h-[2px] after:bg-green-500"
                    : ""
                  }`
                
              }
            >
              <AiOutlineHeart />
              {likedItems.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">
                  {likedItems.length}
                </span>
              )}
            </NavLink>

            <FaShoppingBag className="text-2xl cursor-pointer hover:text-green-400" />
          </div>

          {/* Login / Signup */}
          <div className="hidden md:flex items-center space-x-3">
            <button  onClick={() => navigate("/login")} className="flex items-center gap-2 px-3 py-1.5 bg-white text-black rounded-md hover:bg-green-600 hover:text-white text-sm">
              <MdOutlineAccountCircle className="text-lg" /> Login
            </button>
            <button  onClick={() => navigate("/signup")} className="flex items-center gap-2 px-3 py-1.5 bg-green-600 text-white rounded-md hover:bg-white hover:text-black text-sm">
              <MdOutlineAccountCircle className="text-lg" /> Signup
            </button>
          </div>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden text-white text-3xl"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>
      </div>

      {/* 📱 Mobile Menu */}
    {mobileMenuOpen && (
  <div className="lg:hidden bg-teal-800 text-white px-6 py-4 space-y-4">
    {[
      { name: "Home", path: "/" },
      { name: "Menu", path: "/menu" },
      { name: "Fruits", path: "/fruits" },
      { name: "Vegetables", path: "/vegetables" },
      { name: "Contact", path: "/contact" },
      { name: "Login", path: "/login" },
      { name: "Sing Up", path: "/signup" },

        
    ].map((item) => (
      <NavLink
        key={item.path}
        to={item.path}
        onClick={() => setMobileMenuOpen(false)} // ✅ Close menu on click
        className="block text-lg font-medium hover:text-green-400"
      >
        {item.name}
        
      </NavLink>
    ))}
    
  </div>
)}


      {/* ❤️ Wishlist Modal */}
      {showWishlist && (
        <Wishlist />
      )}
    </nav>
  );
}

export default Navbar;

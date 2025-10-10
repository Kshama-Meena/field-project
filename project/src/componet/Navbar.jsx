import { useState, useRef, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { FaShoppingBag } from "react-icons/fa";
import { AiOutlineHeart } from "react-icons/ai";
import { MdOutlineAccountCircle } from "react-icons/md";
import { HiMenu, HiX } from "react-icons/hi";

// ✅ DropdownMenu Component (Compact)
function DropdownMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);

  // ✅ Resize detection for mobile/desktop
  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth < 1024);
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const categories = [
    { name: "🍎 Fruits" },
    { name: "🥦 Vegetables" },
  ];

  return (
    <div
      className="relative inline-block text-left"
      onMouseEnter={() => !isMobile && setIsOpen(true)}
      onMouseLeave={() => !isMobile && setIsOpen(false)}
    >
      <button
        onClick={() => isMobile && setIsOpen(!isOpen)}
        className="inline-flex items-center justify-center px-3 py-1.5 bg-green-600 text-white text-sm md:text-base font-medium rounded-md hover:bg-green-700 transition-all duration-300 shadow-sm"
      >
        {/* Left Icon (Hamburger Menu) */}
        <svg
          className="w-4 h-4 mr-1"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
        Shop By Category
        {/* Arrow */}
        <svg
          className={`w-4 h-4 ml-1 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute mt-2 w-40 bg-white rounded-md shadow-lg z-50">
          <ul className="py-1 text-gray-700 text-sm">
            {categories.map((cat, idx) => (
              <li key={idx} className="px-3 py-2 cursor-pointer">
                {cat.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

// ✅ Main Navbar Component
function Navbar() {
  const [showSearch, setShowSearch] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const searchRef = useRef(null);

  // 👇 Close search when clicked outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setShowSearch(false);
      }
    }
    if (showSearch) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [showSearch]);

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 bg-teal-900 border-b border-gray-200">
        <div className="w-full flex items-center justify-between px-6 md:px-10 py-3">
          {/* 🔽 Left Side Dropdown */}
          <DropdownMenu />

          {/* 🔹 Desktop Menu Links */}
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
                    `relative transition-all duration-300 hover:text-green-400 ${
                      isActive
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

          {/* 🔹 Right Icons and Buttons */}
          <div className="flex items-center space-x-6">
            <div
              ref={searchRef}
              className="relative flex items-center space-x-6 text-white"
            >
              <AiOutlineHeart
                className="text-2xl cursor-pointer hover:text-green-400"
                onClick={() => setShowSearch(!showSearch)}
              />
              <FaShoppingBag className="text-2xl cursor-pointer hover:text-green-400" />
            </div>

            {/* 👤 Login / Signup (hidden on very small screens) */}
            <div className="hidden md:flex items-center space-x-3">
              <button className="flex items-center gap-2 px-3 py-1.5 bg-white text-black rounded-md hover:bg-green-600 hover:text-white text-sm">
                <MdOutlineAccountCircle className="text-lg" /> Login
              </button>
              <button className="flex items-center gap-2 px-3 py-1.5 bg-green-600 text-white rounded-md hover:bg-white hover:text-black text-sm">
                <MdOutlineAccountCircle className="text-lg" /> Signup
              </button>
            </div>

            {/* 🔹 Mobile Menu Button */}
            <button
              className="lg:hidden text-white text-3xl"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <HiX /> : <HiMenu />}
            </button>
          </div>
        </div>

        {/* 🔽 Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-teal-800 text-white px-6 py-4 space-y-4">
            {[
              { name: "Home", path: "/" },
              { name: "Menu", path: "/menu" },
              { name: "Fruits", path: "/fruits" },
              { name: "Vegetables", path: "/vegetables" },
              { name: "Contact", path: "/contact" },
            ].map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className="block text-lg font-medium hover:text-green-400"
              >
                {item.name}
              </NavLink>
            ))}

            {/* 👤 Login/Signup inside mobile menu */}
            <div className="flex flex-col space-y-3 pt-3">
              <button className="flex items-center justify-center gap-2 px-3 py-2 bg-white text-black rounded-md hover:bg-green-600 hover:text-white">
                <MdOutlineAccountCircle className="text-xl" /> Login
              </button>
              <button className="flex items-center justify-center gap-2 px-3 py-2 bg-green-600 text-white rounded-md hover:bg-white hover:text-black">
                <MdOutlineAccountCircle className="text-xl" /> Signup
              </button>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}

export default Navbar;

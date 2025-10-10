import { useState, useRef, useEffect } from "react";
import { NavLink } from "react-router-dom"; // ✅ Use NavLink instead of Link
import { FaShoppingBag } from "react-icons/fa";
import { AiOutlineHeart } from "react-icons/ai";
import { MdOutlineAccountCircle } from "react-icons/md";

// ✅ DropdownMenu Component
function DropdownMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => setIsOpen(!isOpen);

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={toggleDropdown}
        className="inline-flex items-center justify-center w-72 px-6 py-3 bg-green-600 text-white text-lg font-semibold rounded-full hover:bg-green-700 transition-all duration-300 shadow-md"
      >
        {/* Left Icon (Hamburger Menu) */}
        <svg
          className="w-5 h-5 mr-3"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>

        Shop By Category

        {/* Right Dropdown Arrow */}
        <svg
          className="w-5 h-5 ml-3"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute mt-2 w-64 bg-white rounded-md shadow-lg z-50">
          <ul className="py-1 text-gray-700 text-base">
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
              🍎 Fruits
            </li>
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
              🥦 Vegetables
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

// ✅ Main Navbar Component
function Navbar() {
  const [showSearch, setShowSearch] = useState(false);
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
        <div className="w-full flex items-center justify-between px-10 py-4">
          {/* 🔽 Left Side Dropdown */}
          <DropdownMenu />

          {/* 🔹 Center Menu Links */}
          <ul className="flex space-x-12 text-white font-medium text-2xl mx-auto">
            {[
              { name: "Home", path: "/" },
              { name: "Menu", path: "/menu" },
              { name: "Fruits", path: "/Fruits" },
              { name: "Vegetable", path: "/Vegetable" },
              { name: "Contact", path: "/contact" },
            ].map((item) => (
              <li key={item.path}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    `relative transition-all duration-300 hover:text-green-600 ${
                      isActive
                        ? "after:content-[''] after:absolute after:left-0 after:bottom-[-6px] after:w-full after:h-[3px] after:bg-green-500"
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
          <div className="flex items-center space-x-10">
           
            <div
              ref={searchRef}
              className="relative flex items-center space-x-10 mr-10 text-white"
            >
              <AiOutlineHeart
                className="text-3xl cursor-pointer hover:text-white"
                onClick={() => setShowSearch(!showSearch)}
              />

              
              <FaShoppingBag className="text-3xl cursor-pointer hover:text-green-600" />
            </div>

            {/* 👤 Login / Signup */}
            <div className="flex items-center space-x-4 pr-10">
              <button className="flex items-center gap-2 px-4 py-2 bg-white text-black rounded-md hover:bg-green-600 hover:text-white">
                <MdOutlineAccountCircle className="text-2xl" /> Login
              </button>
              <button className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-md hover:bg-white hover:text-black">
                <MdOutlineAccountCircle className="text-2xl" /> Signup
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;

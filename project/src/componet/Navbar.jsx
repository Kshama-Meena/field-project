import { useState, useRef, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { FaShoppingBag } from "react-icons/fa";
import { AiOutlineHeart } from "react-icons/ai";
import { MdOutlineAccountCircle } from "react-icons/md";
import { HiMenu, HiX } from "react-icons/hi";
import { useLike } from "./LikeContext";
import Wishlist from "./Wishlist";
import { useCart } from "./CartContext";
import { motion, AnimatePresence } from "framer-motion";
import { useAuth } from "./AuthContext";
import { FaAppleAlt } from "react-icons/fa";
import { GiCarrot } from "react-icons/gi";
import { BsPersonCircle } from "react-icons/bs";

function Navbar() {
  const { likedItems } = useLike();
  const { cartItems } = useCart();
  const { user, logout } = useAuth();

  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showWishlist, setShowWishlist] = useState(false);
  const [showProfileMenu, setShowProfileMenu] = useState(false);

  // Click outside to close profile menu
  const menuRef = useRef(null);
  useEffect(() => {
    function handleClickOutside(e) {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setShowProfileMenu(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Stop body scroll when Wishlist open
  useEffect(() => {
    document.body.style.overflow = showWishlist ? "hidden" : "auto";
  }, [showWishlist]);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-teal-900 border-b border-gray-200">
      <div className="w-full flex items-center justify-between px-6 md:px-10 py-3">

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

        <div className="flex items-center space-x-6 text-white">

          {/* Wishlist */}
          <NavLink to="/wishlist" className="relative text-2xl">
            <AiOutlineHeart />
            {likedItems.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">
                {likedItems.length}
              </span>
            )}
          </NavLink>

          {/* Cart */}
          <div className="relative">
            <motion.div
              whileTap={{ scale: 0.9 }}
              className="cursor-pointer text-2xl hover:text-green-400"
              onClick={() => navigate("/cart")}
            >
              <FaShoppingBag />
            </motion.div>

            {cartItems.length > 0 && (
              <motion.span
                key={cartItems.length}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 300, damping: 10 }}
                className="absolute -top-2 -right-2 bg-yellow-400 text-white text-xs w-4 h-4 flex items-center justify-center rounded-full"
              >
                {cartItems.length}
              </motion.span>
            )}
          </div>

          {/* Login/Profile */}
          <div className="hidden md:flex items-center space-x-3" ref={menuRef}>
            {user ? (
              <div className="relative">
                <button
                  onClick={() => setShowProfileMenu(!showProfileMenu)}
                  className="flex items-center gap-2 px-3 py-1.5 bg-white text-black rounded-md hover:bg-green-600 hover:text-white text-sm"
                >
                  <BsPersonCircle className="text-lg" /> {user?.name ? user.name.split(" ")[0] : user?.email?.split("@")[0]}

                </button>

                {/* Profile Dropdown */}
                <AnimatePresence>
                  {showProfileMenu && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{
                        duration: 0.15,
                        type: "spring",
                        stiffness: 200,
                        damping: 18,
                      }}
                      className="absolute right-0 mt-2 w-44 bg-white rounded-xl shadow-xl border border-gray-100 z-50 overflow-hidden"
                    >
                      <div className="py-2">
                        <button
                          onClick={() => {
                            navigate("/profile");
                            setShowProfileMenu(false);
                          }}
                          className="flex items-center gap-2 w-full text-left px-4 py-2.5 text-gray-700 hover:bg-green-50 hover:text-green-600 transition-all"
                        >
                          <i className="text-lg"><svg stroke="currentColor" fill="currentColor" viewBox="0 0 24 24"><path d="M12 12c2.7 0 5-2.3 5-5s-2.3-5-5-5-5 2.3-5 5 2.3 5 5 5zm0 2c-5.5 0-10 2.2-10 5v3h20v-3c0-2.8-4.5-5-10-5z"></path></svg></i>
                          My Profile
                        </button>

                        <button
                          onClick={() => {
                            logout();
                            navigate("/");
                            setShowProfileMenu(false);
                          }}

                          className="flex items-center gap-2 w-full text-left px-4 py-2.5 text-red-600 hover:bg-red-50 transition-all"
                        >
                          <i className="text-lg"><svg stroke="currentColor" fill="currentColor" viewBox="0 0 24 24"><path d="M16 17v-3H7v-4h9V7l5 5-5 5zM14 2H2v20h12v-2H4V4h10z"></path></svg></i>
                          Logout
                        </button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>


              </div>
            ) : (<> <button onClick={() => navigate("/login")} className="flex items-center gap-2 px-3 py-1.5 bg-white text-black rounded-md hover:bg-green-600 hover:text-white text-sm" > <MdOutlineAccountCircle className="text-lg" /> Login </button> <button onClick={() => navigate("/signup")} className="flex items-center gap-2 px-3 py-1.5 bg-green-600 text-white rounded-md hover:bg-white hover:text-black text-sm" > <MdOutlineAccountCircle className="text-lg" /> Signup </button> </>)}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-white text-3xl"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-teal-800 text-white px-6 py-4 space-y-4">
          {[
            { name: "Home", path: "/" },
            { name: "Menu", path: "/menu" },
            { name: "Fruits", path: "/fruits" },
            { name: "Vegetables", path: "/vegetables" },
            { name: "Contact", path: "/contact" },
            { name: user ? "Profile" : "Login", path: user ? "/profile" : "/login" },
          ].map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              onClick={() => setMobileMenuOpen(false)}
              className="block text-lg font-medium hover:text-green-400"
            >
              {item.name}
            </NavLink>
          ))}
        </div>
      )}

      {showWishlist && <Wishlist />}
    </nav>
  );
}

export default Navbar;

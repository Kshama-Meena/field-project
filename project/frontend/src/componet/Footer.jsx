import React from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaFacebookF, FaInstagram, FaTwitter ,FaLeaf } from "react-icons/fa";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-gradient-to-b from-green-50 to-white border-t border-green-100">
      {/* Main Footer Content */}
      <div className="container mx-auto px-6 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Column 1: Brand & About */}
          <div>
            <Link to="/" className="flex items-center gap-3 mb-6">
              <div className="bg-green-600 text-white p-3 rounded-full shadow-md">
                <FaLeaf className="w-6 h-6" />
              </div>
              <h2 className="text-3xl font-extrabold text-green-800">
                Fresh<span className="text-green-600">Mart</span>
              </h2>
            </Link>
            <p className="text-gray-600 leading-relaxed mb-6">
              Your trusted source for fresh, organic fruits and vegetables. Farm-to-kitchen delivery with love and care.
            </p>
            {/* Social Icons */}
            <div className="flex gap-4">
              <a href="#" className="text-gray-600 hover:text-green-600 transition-colors text-xl">
                <FaFacebookF />
              </a>
              <a href="#" className="text-gray-600 hover:text-green-600 transition-colors text-xl">
                <FaInstagram />
              </a>
              <a href="#" className="text-gray-600 hover:text-green-600 transition-colors text-xl">
                <FaTwitter />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-xl font-bold text-green-800 mb-6">Quick Links</h3>
            <ul className="space-y-3 text-gray-600">
              <li>
                <Link to="/" className="hover:text-green-600 transition-colors flex items-center gap-2">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/menu" className="hover:text-green-600 transition-colors flex items-center gap-2">
                  Menu
                </Link>
              </li>
              <li>
                <Link to="/fruits" className="hover:text-green-600 transition-colors flex items-center gap-2">
                  Fruits
                </Link>
              </li>
              <li>
                <Link to="/vegetables" className="hover:text-green-600 transition-colors flex items-center gap-2">
                  Vegetables
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-green-600 transition-colors flex items-center gap-2">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Support */}
          <div>
            <h3 className="text-xl font-bold text-green-800 mb-6">Customer Support</h3>
            <ul className="space-y-3 text-gray-600">
              <li>
                <a href="#" className="hover:text-green-600 transition-colors">
                  FAQs
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-600 transition-colors">
                  Shipping & Delivery
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-600 transition-colors">
                  Returns & Refunds
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-600 transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-600 transition-colors">
                  Terms & Conditions
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h3 className="text-xl font-bold text-green-800 mb-6">Get in Touch</h3>
            <ul className="space-y-4 text-gray-600">
              <li className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-green-600 text-xl mt-1 flex-shrink-0" />
                <span>123, Fresh Street, New Delhi, India</span>
              </li>
              <li className="flex items-center gap-3">
                <FaPhoneAlt className="text-green-600 text-xl" />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-center gap-3">
                <FaEnvelope className="text-green-600 text-xl" />
                <span>support@freshmart.com</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-green-800 text-white py-6 text-center border-t border-green-700">
        <p className="text-sm md:text-base">
          © {new Date().getFullYear()} <span className="font-semibold">FreshMart</span>. All Rights Reserved.
        </p>
        <p className="text-xs mt-2 opacity-80">
          Made with ❤️ for fresh & healthy living
        </p>
      </div>
    </footer>
  );
}

export default Footer;

import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";


function Footer() {
  return (<footer className="border-t border-gray-400">
    <div className="bg-green-50">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">FreshMart</h2>
            <p className="text-black-300 text-lg sm:text-xl leading-relaxed">
              Your one-stop shop for fresh fruits and vegetables. Quality products delivered to your doorstep.
            </p>
          </div>

          <div>
            <h3 className="text-2xl sm:text-3xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3 text-black-300 text-lg sm:text-xl">
              <li><a href="/" className="hover:text-green-800 transition">Home</a></li>
              <li><a href="/menu" className="hover:text-green-800 transition">Menu</a></li>
              <li><a href="/services" className="hover:text-green-800 transition">Services</a></li>
              <li><a href="/contact" className="hover:text-green-800 transition">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-2xl sm:text-3xl font-semibold mb-4">Customer Support</h3>
            <ul className="space-y-3 text-black-300 text-lg sm:text-xl">
              <li><a href="#" className="hover:text-green-800 ">FAQs</a></li>
              <li><a href="#" className="hover:text-green-800 ">Shipping & Returns</a></li>
              <li><a href="#" className="hover:text-green-800 ">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-green-800 ">Terms & Conditions</a></li>
            </ul>
          </div>

          <div>
      <h3 className="text-2xl sm:text-3xl font-semibold mb-4">Get in Touch</h3>

      <p className="text-gray-700 text-lg sm:text-xl flex items-center gap-3">
        <FaMapMarkerAlt className="text-green-600 text-xl" />
        123, Fresh Street, New Delhi
      </p>

      <p className="text-gray-700 text-lg sm:text-xl flex items-center gap-3 mt-2">
        <FaPhoneAlt className="text-green-600 text-xl" />
        +91 98765 43210
      </p>

      <p className="text-gray-700 text-lg sm:text-xl flex items-center gap-3 mt-2">
        <FaEnvelope className="text-green-600 text-xl" />
        support@freshmart.com
      </p>
    </div>
        </div>
      </div>
    </div>

    <div className="border-t border-gray-700 py-6 text-center text-black-400 text-sm sm:text-base md:text-lg bg-green-800">

      © {new Date().getFullYear()} <span className="font-semibold text-white">FreshMart</span>. All Rights Reserved.
    </div>
  </footer>
  );
}
export default Footer;
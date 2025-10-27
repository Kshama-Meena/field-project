import React from 'react';

const Contact = () => {
  // Aapke branding colours: Dark Green (header/accent) aur Bright Orange (button)
  const brandGreen = 'bg-[#008080]'; 
  const textGreen = 'text-[#008080]';
  const borderGreen = 'border-[#008080]';
  const brandOrange = 'bg-[#FF6600]';
  const hoverOrange = 'hover:bg-[#E65C00]';

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Message Sent! Thank you for contacting us.');
    // Yahan aap form data ko API ya server par bhej sakte hain
  };

  return (
    <div className="min-h-screen py-20 px-4 md:px-10 lg:px-20 font-sans ">
      
      {/* --- HEADER SECTION (Matching Homepage) --- */}
      <div className="text-center mb-12">
        <h1 className={`text-4xl md:text-5xl font-extrabold ${textGreen} mb-3`}>
          Connect with Freshness
        </h1>
        <p className="text-lg text-gray-600">
          We're here to answer your questions about orders, products, or delivery.
        </p>
      </div>

      {/* --- CONTENT SECTION (Two-Column Layout) --- */}
      <div className="flex flex-wrap lg:flex-nowrap gap-10">
        
        {/* LEFT COLUMN: CONTACT FORM */}
        <div className="w-full lg:w-1/2 p-6 md:p-8 bg-white rounded-xl shadow-lg border border-gray-100">
          <h2 className={`text-3xl font-bold ${textGreen} mb-6`}>Send Us a Message</h2>
          
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">Your Name</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter your full name"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#008080] focus:border-[#008080] outline-none"
                required
              />
            </div>

            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="youremail@example.com"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#008080] focus:border-[#008080] outline-none"
                required
              />
            </div>
            
            <div className="mb-4">
              <label htmlFor="subject" className="block text-gray-700 font-semibold mb-2">Subject</label>
              <select
                id="subject"
                name="subject"
                className="w-full p-3 border border-gray-300 rounded-lg appearance-none bg-white focus:ring-2 focus:ring-[#008080] focus:border-[#008080] outline-none"
                required
              >
                <option value="">Select a subject</option>
                <option value="order">Order Inquiry</option>
                <option value="product">Product Question</option>
                <option value="feedback">Feedback/Suggestion</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div className="mb-6">
              <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">Your Message</label>
              <textarea
                id="message"
                name="message"
                rows="4"
                placeholder="Type your message here..."
                className="w-full p-3 border border-gray-300 rounded-lg resize-none focus:ring-2 focus:ring-[#008080] focus:border-[#008080] outline-none"
                required
              ></textarea>
            </div>
            
            {/* SUBMIT BUTTON (Matching 'Order Now' style) */}
            <button
              type="submit"
              className={`py-3 px-8 ${brandOrange} text-white font-bold rounded-full text-lg shadow-lg transition duration-300 ${hoverOrange}`}
            >
              Send Message
            </button>
          </form>
        </div>

        {/* RIGHT COLUMN: CONTACT DETAILS & SOCIALS */}
        <div className="w-full lg:w-1/2 space-y-6">
          
          {/* Support Block */}
          <div className="p-6 bg-gray-50 rounded-xl border-l-4 border-[#008080] shadow-md">
            <h3 className={`text-2xl font-bold ${textGreen} mb-2`}>Customer Support</h3>
            <p className="text-gray-700 mb-1">
              <strong className="font-semibold">Phone:</strong> +91 9876 543 210
            </p>
            <p className="text-gray-700 mb-1">
              <strong className="font-semibold">Email:</strong> <a href="mailto:support@freshdose.com" className={`underline ${textGreen} hover:text-green-700`}>support@freshdose.com</a>
            </p>
            <p className="text-sm text-gray-500 italic mt-3 pt-2 border-t border-gray-200">
              Available: Mon - Sat, 9 AM - 6 PM IST
            </p>
          </div>
          
          {/* Location Block */}
          <div className="p-6 bg-gray-50 rounded-xl border-l-4 border-[#008080] shadow-md">
            <h3 className={`text-2xl font-bold ${textGreen} mb-2`}>Our Location</h3>
            <p className="text-gray-700 mb-4">123 Fresh Lane, Green City, 400001, India</p>
            
            {/* View on Map Link (Matching 'Explore Menu' style) */}
            <a 
              href="#" 
              className={`inline-flex items-center py-2 px-6 ${textGreen} ${borderGreen} border-2 font-bold rounded-full transition duration-300 hover:${brandGreen} hover:text-white`}
            >
              View on Map <span className="ml-2">&gt;</span>
            </a>
          </div>

          {/* Social Media Block */}
          <div className="p-6 bg-gray-50 rounded-xl border-l-4 border-[#008080] shadow-md">
            <h3 className={`text-2xl font-bold ${textGreen} mb-4`}>Connect with Us</h3>
            <div className="flex space-x-4">
              {/* Social Icons (using placeholders for simplicity) */}
              <a href="#" className={`w-10 h-10 flex items-center justify-center rounded-full text-white ${brandGreen} hover:opacity-80 transition duration-300`} aria-label="Facebook">
                <i className="fab fa-facebook-f text-xl">F</i>
              </a>
              <a href="#" className={`w-10 h-10 flex items-center justify-center rounded-full text-white ${brandGreen} hover:opacity-80 transition duration-300`} aria-label="Instagram">
                <i className="fab fa-instagram text-xl">I</i>
              </a>
              <a href="#" className={`w-10 h-10 flex items-center justify-center rounded-full text-white ${brandGreen} hover:opacity-80 transition duration-300`} aria-label="Twitter">
                <i className="fab fa-twitter text-xl">X</i>
              </a>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;
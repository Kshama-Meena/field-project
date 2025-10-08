// componet/Contact.jsx

function Contact() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-green-100 to-lime-100 p-6">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8">

        <h2 className="text-3xl font-bold text-green-700 mb-6 text-center">Get in Touch</h2>
        <p className="text-center text-gray-600 mb-8">
          Have a question about your order, our products, or just want to say hello? Fill out the form below or contact us directly.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-green-800 font-medium">Your Name</label>
              <input
                type="text"
                id="name"
                placeholder="John Doe"
                className="w-full mt-2 p-3 border border-green-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-green-800 font-medium">Your Email</label>
              <input
                type="email"
                id="email"
                placeholder="you@example.com"
                className="w-full mt-2 p-3 border border-green-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
                required
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-green-800 font-medium">Message</label>
              <textarea
                id="message"
                rows="5"
                placeholder="Write your message here..."
                className="w-full mt-2 p-3 border border-green-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-green-600 text-white py-3 rounded-md hover:bg-green-700 transition duration-300"
            >
              Send Message
            </button>
          </form>

          {/* Contact Info */}
          <div className="space-y-4 text-green-800">
            <div>
              <h3 className="text-xl font-semibold mb-2">Contact Details</h3>
              <p>📍 <strong>Address:</strong> Fresh Basket, Main Road, Delhi</p>
              <p>📞 <strong>Phone:</strong> +91 98765 43210</p>
              <p>✉️ <strong>Email:</strong> support@freshbasket.com</p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">Working Hours</h3>
              <p>Mon - Sat: 8:00 AM - 8:00 PM</p>
              <p>Sunday: Closed</p>
            </div>

            {/* Optional: Embed Google Map */}
            <div className="mt-4">
              <iframe
                className="w-full h-48 rounded-md"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224345.8391983202!2d77.0688995!3d28.527582!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce39e5cb49c21%3A0x85700e9d4a154a7e!2sDelhi!5e0!3m2!1sen!2sin!4v1696432073337!5m2!1sen!2sin"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Map"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;

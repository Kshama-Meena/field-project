// // componet/Login.jsx

// function Login() {
//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-green-100 via-lime-100 to-green-200">
//       <div className="bg-white shadow-xl rounded-xl w-full sm:w-96 p-8">
        
//         {/* Logo or Icon */}
//         <div className="flex justify-center mb-6">
//           <img
//             src="/logo.png" // Replace with your logo path or use a fruit icon from assets
//             alt="Fresh Basket"
//             className="h-16"
//           />
//         </div>

//         <h2 className="text-2xl font-bold text-center text-green-700 mb-6">Welcome Back!</h2>
//         <p className="text-sm text-center text-gray-500 mb-6">Login to continue ordering fresh fruits & veggies 🍎🥬</p>

//         <form>
//           {/* Email */}
//           <div className="mb-4">
//             <label htmlFor="email" className="block text-green-800 font-medium">Email</label>
//             <input
//               type="email"
//               id="email"
//               placeholder="you@example.com"
//               className="w-full p-3 mt-2 border border-green-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
//               required
//             />
//           </div>

//           {/* Password */}
//           <div className="mb-6">
//             <label htmlFor="password" className="block text-green-800 font-medium">Password</label>
//             <input
//               type="password"
//               id="password"
//               placeholder="••••••••"
//               className="w-full p-3 mt-2 border border-green-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
//               required
//             />
//           </div>

//           {/* Submit Button */}
//           <button
//             type="submit"
//             className="w-full bg-green-600 text-white py-3 rounded-md hover:bg-green-700 transition-all duration-300"
//           >
//             Login
//           </button>
//         </form>

//         {/* Link to Signup */}
//         <p className="mt-6 text-center text-gray-600 text-sm">
//           Don't have an account?{" "}
//           <a href="/signup" className="text-green-600 hover:underline font-medium">
//             Sign Up
//           </a>
//         </p>
//       </div>
//     </div>
//   );
// }

// export default Login;
// src/components/LoginPage.jsx
import React, { useState } from 'react';
import { Search, Eye, LogIn,Leaf } from 'lucide-react'; // उदाहरण के लिए एक आइकन लाइब्रेरी का उपयोग

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const handleLogin = (e) => {
    e.preventDefault();
    console.log('Logging in with:', { email, password });
    // यहाँ वास्तविक लॉगिन लॉजिक आएगा
  };

  return (
    // मुख्य कंटेनर जो पूरे पेज को कवर करेगा
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      
      {/* लॉगिन कार्ड (सफेद बॉक्स) */}
      <div className="w-full max-w-md bg-white p-8 md:p-10 rounded-xl shadow-2xl">
        
        {/* लोगो (Logo) */}
    <div className="flex items-end justify-center mb-6 relative">
  {/* Left Leaf */}
  <Leaf className="w-10 h-10 text-green-600 rotate-[-25deg] translate-y-1" />

  {/* Right Leaf */}
  <Leaf className="w-10 h-10 text-green-500 rotate-[25deg] -translate-y-0.5 -ml-2" />
</div>

        
        {/* शीर्षक (Heading) */}
        <h1 className="text-3xl md:text-4xl font-extrabold text-center mb-2 text-green-600">
          Welcome Back!
        </h1>
        <p className="text-center text-gray-500 mb-8">
          Please log in to your account
        </p>

        {/* लॉगिन फॉर्म */}
        <form onSubmit={handleLogin}>
          
          {/* ईमेल इनपुट फील्ड */}
          <div className="mb-5">
            <label htmlFor="email" className="sr-only">Email Address</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email Address"
              required
              // Tailwind Styling for Input Field (White background, subtle border)
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition duration-150 text-gray-700"
            />
          </div>
          
          {/* पासवर्ड इनपुट फील्ड */}
          <div className="mb-6 relative">
            <label htmlFor="password" className="sr-only">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              required
              // Tailwind Styling for Input Field (Green focus border, eye icon inside)
              className="w-full p-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition duration-150 text-gray-700 pr-10"
            />
            {/* Password Eye/Search Icon - The image shows a search icon, but typically a 'show/hide' eye icon is used */}
            <button type="button" className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-green-600">
              {/* Image shows a search icon, using a generic icon for clarity */}
              <Search className="w-5 h-5" /> 
            </button>
          </div>

          {/* लॉगिन बटन (Orange Button) */}
          <button
            type="submit"
            className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 rounded-lg transition duration-200 shadow-lg flex items-center justify-center space-x-2"
          >
            <LogIn className="w-5 h-5" />
            <span>Log In</span>
          </button>
        </form>
        
        {/* Forgot Password Link */}
        <div className="text-center mt-4">
          <a href="/forgot-password" className="text-sm text-gray-500 hover:text-green-600 transition duration-150">
            Forgot Password?
          </a>
        </div>

        {/* Sign Up Link */}
        <p className="text-center mt-3 text-sm text-gray-600">
          New user? 
          <a href="/signup" className="ml-1 font-semibold text-green-600 hover:text-green-700 transition duration-150">
            Sign Up Now
          </a>
        </p>

      </div>
    </div>
  );
};

export default Login;

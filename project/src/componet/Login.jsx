// componet/Login.jsx

function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-green-100 via-lime-100 to-green-200">
      <div className="bg-white shadow-xl rounded-xl w-full sm:w-96 p-8">
        
        {/* Logo or Icon */}
        <div className="flex justify-center mb-6">
          <img
            src="/logo.png" // Replace with your logo path or use a fruit icon from assets
            alt="Fresh Basket"
            className="h-16"
          />
        </div>

        <h2 className="text-2xl font-bold text-center text-green-700 mb-6">Welcome Back!</h2>
        <p className="text-sm text-center text-gray-500 mb-6">Login to continue ordering fresh fruits & veggies 🍎🥬</p>

        <form>
          {/* Email */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-green-800 font-medium">Email</label>
            <input
              type="email"
              id="email"
              placeholder="you@example.com"
              className="w-full p-3 mt-2 border border-green-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
              required
            />
          </div>

          {/* Password */}
          <div className="mb-6">
            <label htmlFor="password" className="block text-green-800 font-medium">Password</label>
            <input
              type="password"
              id="password"
              placeholder="••••••••"
              className="w-full p-3 mt-2 border border-green-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-green-600 text-white py-3 rounded-md hover:bg-green-700 transition-all duration-300"
          >
            Login
          </button>
        </form>

        {/* Link to Signup */}
        <p className="mt-6 text-center text-gray-600 text-sm">
          Don't have an account?{" "}
          <a href="/signup" className="text-green-600 hover:underline font-medium">
            Sign Up
          </a>
        </p>
      </div>
    </div>
  );
}

export default Login;

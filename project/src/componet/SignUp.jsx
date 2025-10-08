// componet/SignUp.jsx

function SignUp() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-100 via-lime-100 to-green-200">
      <div className="bg-white shadow-xl rounded-xl w-full sm:w-96 p-8">

        {/* Logo or Image */}
        <div className="flex justify-center mb-6">
          <img
            src="/logo.png" // Optional: replace with your fruit/veggie logo path
            alt="Fresh Basket"
            className="h-16"
          />
        </div>

        <h2 className="text-2xl font-bold text-center text-green-700 mb-2">Create Account</h2>
        <p className="text-sm text-center text-gray-500 mb-6">
          Join us and get the freshest fruits & veggies delivered to your door! 🥕🍎
        </p>

        <form>
          {/* Full Name */}
          <div className="mb-4">
            <label htmlFor="name" className="block text-green-800 font-medium">Full Name</label>
            <input
              type="text"
              id="name"
              placeholder="John Doe"
              className="w-full p-3 mt-2 border border-green-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
              required
            />
          </div>

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

          {/* Sign Up Button */}
          <button
            type="submit"
            className="w-full bg-green-600 text-white py-3 rounded-md hover:bg-green-700 transition-all duration-300"
          >
            Sign Up
          </button>
        </form>

        {/* Login Redirect */}
        <p className="mt-6 text-center text-gray-600 text-sm">
          Already have an account?{" "}
          <a href="/login" className="text-green-600 hover:underline font-medium">
            Login
          </a>
        </p>
      </div>
    </div>
  );
}

export default SignUp;

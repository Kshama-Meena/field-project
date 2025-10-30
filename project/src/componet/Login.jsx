import React, { useState } from "react";
import { LogIn, Leaf } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await axios.post("http://localhost:5000/api/login", {
        email: email.trim(),
        password: password.trim(),
      });

      // ✅ Animated Success Toast
      toast.success(res.data.message || "Login successful 🎉", {
        style: {
          borderRadius: "10px",
          background: "#333",
          color: "#fff",
        },
      });

      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.user));

      setTimeout(() => navigate("/"), 1000); // chhoti delay se smooth transition
    } catch (err) {
      console.error("Login Error:", err);
      toast.error(err.response?.data?.message || "Invalid credentials ❌", {
        style: {
          borderRadius: "10px",
          background: "#f87171",
          color: "#fff",
        },
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="w-full max-w-5xl bg-white rounded-2xl shadow-2xl flex flex-col md:flex-row overflow-hidden">
        {/* Left Side - Form */}
        <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
          <div className="flex items-end justify-center mb-6 relative">
            <Leaf className="w-10 h-10 text-green-600 rotate-[-25deg] translate-y-1" />
            <Leaf className="w-10 h-10 text-green-500 rotate-[25deg] -translate-y-0.5 -ml-2" />
          </div>

          <h1 className="text-3xl md:text-4xl font-extrabold text-center mb-2 text-gray-800">
            Welcome Back!
          </h1>
          <p className="text-center text-gray-500 mb-8">
            Sign in with your Username and Password
          </p>

          <form onSubmit={handleLogin}>
            <input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full p-3 mb-4 border border-gray-300 rounded-full focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none"
            />
            <input
              type="password"
              
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full p-3 mb-2 border border-gray-300 rounded-full focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none"
            />

            <div className="text-right mb-6">
               
                Forgot Password?
               
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-black text-white py-3 rounded-full font-semibold hover:bg-gray-800 transition duration-200 flex justify-center items-center space-x-2"
            >
              <LogIn className="w-5 h-5" />
              <span>{loading ? "Logging in..." : "Login"}</span>
            </button>
          </form>

          <p className="text-center mt-8 text-sm text-gray-600">
            Did not have any account?{" "}
            <Link to="/signup" className="font-semibold text-green-600 hover:text-green-700">
              Register Now
            </Link>
          </p>
        </div>

        {/* Right Side - Image */}
        <div className="hidden md:block md:w-1/2">
          <img src="login.jpg" alt="Food" className="w-full h-full object-cover" />
        </div>
      </div>
    </div>
  );
};

export default Login;
 
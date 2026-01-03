import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

import { LogIn, Leaf } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useAuth } from "./context/AuthContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [popup, setPopup] = useState("");
  const navigate = useNavigate();
  const { login } = useAuth(); // ✅ Context se login function
  const location = useLocation();
  useEffect(() => {
    if (location.state?.message === "logoutSuccess") {
      setPopup("logoutSuccess");

      setTimeout(() => {
        setPopup("");
        // refresh pe popup dobara na aaye
        window.history.replaceState({}, document.title);
      }, 2000);
    }
  }, [location.state]);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await axios.post("http://localhost:5000/api/login", {
        email: email.trim(),
        password: password.trim(),
      });

      if (res.data.success === false) {
        setPopup("loginError");
        setTimeout(() => setPopup(""), 1500);
        return;
      }




      localStorage.setItem("token", res.data.token);

      if (res.data.user.role === "admin") {
        localStorage.setItem("admin", JSON.stringify(res.data.user));
      } else {
        localStorage.setItem("user", JSON.stringify(res.data.user));
      }

      // ✅ Inform React & Navbar instantly
      login(res.data.user, res.data.token);

      setPopup("success");

      setTimeout(() => {
        navigate(res.data.user.role === "admin" ? "/AdminLayout" : "/");
      }, 1000);

    } catch (err) {
      setPopup("loginError");
      setTimeout(() => setPopup(""), 1500);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="w-full max-w-5xl bg-white rounded-2xl shadow-2xl flex flex-col md:flex-row overflow-hidden">

        <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
          <div className="flex items-end justify-center mb-6 relative">
            <Leaf className="w-10 h-10 text-green-600 rotate-[-25deg] translate-y-1" />
            <Leaf className="w-10 h-10 text-green-500 rotate-[25deg] -translate-y-0.5 -ml-2" />
          </div>

          <h1 className="text-3xl md:text-4xl font-extrabold text-center mb-2 text-gray-800">
            Welcome Back!
          </h1>
          <p className="text-center text-gray-500 mb-8">
            Sign in with your Email and Password
          </p>

          <form onSubmit={handleLogin}>


            <input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full p-3 mb-4 border border-gray-300 rounded-full focus:ring-2 focus:ring-green-500"
            />

            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full p-3 mb-4 border border-gray-300 rounded-full focus:ring-2 focus:ring-green-500"
            />

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-black text-white py-3 rounded-full font-semibold hover:bg-gray-800 transition flex justify-center items-center"
            >
              <LogIn className="w-5 h-5 mr-2" />
              {loading ? "Logging in..." : "Login"}
            </button>

            {/* ✅ Popup Messages */}
            <div className="relative mt-3 h-12 flex justify-center">
              {popup === "success" && <div className="popup-card">✅ Login Successful!</div>}
              {popup === "loginError" && <div className="popup-card error-popup">❌ Invalid Email or Password</div>}
              {popup === "logoutSuccess" && (
                <div className="popup-card success-popup">
                  👋 Logged out successfully
                </div>
              )}

            </div>
          </form>

          <p className="text-center mt-8 text-sm text-gray-600">
            Don't have an account?{" "}
            <Link to="/signup" className="font-semibold text-green-600 hover:text-green-700">
              Register Now
            </Link>
          </p>
        </div>

        <div className="hidden md:block md:w-1/2">
          <img src="https://res.cloudinary.com/ds8w1kut5/image/upload/v1766763332/login_igf4da.png" alt="Food" className="w-full h-full object-cover" />
        </div>
      </div>
    </div>
  );
};

export default Login;

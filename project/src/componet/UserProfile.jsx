import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./AuthContext";

function UserProfile() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  if (!user) {
    navigate("/login");
    return null;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-3xl mx-auto p-6 mt-6 bg-white shadow-lg rounded-xl"
    >
      <h2 className="text-2xl font-bold mb-5 text-green-700">My Profile</h2>

      {/* User Info */}
      <div className="bg-gray-100 p-5 rounded-md mb-5">
        <p className="text-lg font-semibold">👤 {user.name}</p>
        <p className="text-sm text-gray-600">📧 {user.email}</p>
      </div>

      <button
        onClick={() => navigate("/edit-profile")}
        className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
      >
        Edit Profile
      </button>

      <button
        onClick={logout}
        className="px-4 py-2 ml-3 bg-red-600 text-white rounded-lg hover:bg-red-700"
      >
        Logout
      </button>

      <hr className="my-6" />

      {/* Order History */}
      <h3 className="text-xl font-semibold">Order History</h3>
      <div className="mt-3 bg-gray-50 p-4 rounded-md border border-gray-200">
        <p className="text-gray-600">No orders yet ✅</p>
      </div>
    </motion.div>
  );
}

export default UserProfile;
 
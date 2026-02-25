// config/db.js
import mongoose from "mongoose";
import dotenv from "dotenv";
import { fileURLToPath } from "url";
import path from "path";

// Load .env. First try default lookup, then fallback to backend/.env when started from workspace root
dotenv.config();
if (!process.env.MONGO_URL) {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  // backend/config -> ../.env points to backend/.env
  dotenv.config({ path: path.join(__dirname, "../.env") });
}

const connectDB = async () => {
  try {
    const mongoURI = process.env.MONGO_URL;

    if (!mongoURI) {
      throw new Error("MONGO_URL not found in .env file");
    }

    await mongoose.connect(mongoURI, {
      // Modern options (optional but recommended)
      serverSelectionTimeoutMS: 5000, // 5 seconds timeout
      family: 4, // IPv4 first
    });

    console.log("✅ MongoDB Connected Successfully");
  } catch (error) {
    console.error("❌ MongoDB Connection Failed:", error.message);
    process.exit(1); // Agar DB connect nahi hua to server band kar do
  }
};

export default connectDB;
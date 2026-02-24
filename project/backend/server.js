// import express from "express";
// import mongoose from "mongoose";
// import cors from "cors";
// import bcrypt from "bcryptjs";
// import jwt from "jsonwebtoken";
// import fs from "fs";
// import multer from "multer";
// import User from "./models/userModel.js";
// import productRoutes from "./routes/productRoutes.js";
// import likeRoutes from "./routes/likeRoutes.js";
// import sendMailRoute from "./routes/sendMail.js";
// import userRoutes from "./routes/userRoutes.js";
// import settingsRoutes from "./routes/settingsRoutes.js";
// import adminRoutes from "./routes/admin.js";
// import uploadRoutes from "./routes/uploadRoutes.js";
// import dotenv from "dotenv";
// import connectDB from "./config/db.js";

// const app = express();
// app.use(cors());
// app.use(express.json());
// dotenv.config();

// // ✅ Connect to MongoDB
// connectDB();

// // ✅ MongoDB Connection

// // ✅ Multer Setup for File Uploads
// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     const dir = "./uploads/";
//     if (!fs.existsSync(dir)) fs.mkdirSync(dir);
//     cb(null, dir);
//   },
//   filename: (req, file, cb) => {
//     cb(null, Date.now() + "_" + file.originalname);
//   },
// });
// const upload = multer({ storage });

// // ✅ Serve Static Uploads Folder
// app.use("/uploads", express.static("uploads"));

// // ✅ User/Admin Signup
// app.post("/api/signup", async (req, res) => {
//   try {
//     const { name, email, password, role } = req.body;

//     const exist = await User.findOne({ email: email.toLowerCase() });
//     if (exist) return res.json({ message: "Email already exists ❌" });

//     const hashedPassword = await bcrypt.hash(password, 10);

//     const user = new User({
//       name,
//       email: email.toLowerCase(),
//       password: hashedPassword,
//       role: role || "user",
//     });

//     await user.save();
//     res.json({ message: "Signup Successful ✅" });
//   } catch (error) {
//     res.json({ message: "Signup Failed", error });
//   }
// });

// // ✅ Login (User + Admin same route)
// app.post("/api/login", async (req, res) => {
//   const { email, password } = req.body;

//   const user = await User.findOne({ email: email.toLowerCase() });
//   if (!user) return res.json({ message: "User not found ❌" });

//   const isMatch = await bcrypt.compare(password, user.password);
//   if (!isMatch) return res.json({ message: "Wrong password ❌" });

//   const token = jwt.sign({ id: user._id, role: user.role }, "secret", {
//     expiresIn: "7d",
//   });

//   res.json({
//     message: `${user.role} login successful ✅`,
//     user: {
//       _id: user._id,
//       name: user.name,
//       email: user.email,
//       role: user.role,
//       avatarUrl: user.avatarUrl || null,
//     },
//     token,
//   });
// });

// // ✅ Upload Profile Image
// app.post("/api/upload-avatar/:userId", upload.single("avatar"), async (req, res) => {
//   try {
//     const { userId } = req.params;
//     const imagePath = `/uploads/${req.file.filename}`;

//     const user = await User.findByIdAndUpdate(
//       userId,
//       { avatarUrl: imagePath },
//       { new: true }
//     );

//     res.json({ success: true, message: "Avatar uploaded ✅", user });
//   } catch (error) {
//     res.status(500).json({ success: false, message: error.message });
//   }
// });

// // ✅ Remove Profile Image
// app.delete("/api/remove-avatar/:userId", async (req, res) => {
//   try {
//     const { userId } = req.params;
//     const user = await User.findById(userId);

//     if (!user) return res.status(404).json({ message: "User not found" });

//     if (user.avatarUrl && fs.existsSync("." + user.avatarUrl)) {
//       fs.unlinkSync("." + user.avatarUrl); // delete from folder
//     }

//     user.avatarUrl = null;
//     await user.save();

//     res.json({ success: true, message: "Avatar removed ✅", user });
//   } catch (error) {
//     res.status(500).json({ success: false, message: error.message });
//   }
// });
// // ✅ Get user details
// app.get("/api/user/:id", async (req, res) => {
//   try {
//     const user = await User.findById(req.params.id);
//     if (!user) return res.status(404).json({ message: "User not found" });
//     res.json(user);
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// });

// // ✅ Update user profile (name, email)
// app.put("/api/update-user/:id", async (req, res) => {
//   try {
//     const { name, email } = req.body;
//     const updatedUser = await User.findByIdAndUpdate(
//       req.params.id,
//       { name, email },
//       { new: true }
//     );
//     res.json({ message: "Profile updated", user: updatedUser });
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// });

// // ✅ Save/Update address
// app.put("/api/address/:id", async (req, res) => {
//   try {
//     const { address } = req.body;
//     const updatedUser = await User.findByIdAndUpdate(
//       req.params.id,
//       { address },
//       { new: true }
//     );
//     res.json({ message: "Address updated", user: updatedUser });
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// });


// // ✅ Other Routes
// app.use("/api/products", productRoutes);
// app.use("/api/like", likeRoutes);
// app.use("/api", sendMailRoute);
// app.use("/api/users", userRoutes);
// app.use("/api/settings", settingsRoutes);
// app.use("/api/admin", adminRoutes);
// app.use("/api/upload", uploadRoutes);

// // ✅ Start Server
// app.listen(5000, () => console.log("🚀 Server running on port 5000"));



// =================== SOCKET.IO INTEGRATION ===================
// import express from "express";
// import mongoose from "mongoose";
// import cors from "cors";
// import bcrypt from "bcryptjs";
// import jwt from "jsonwebtoken";
// import fs from "fs";
// import multer from "multer";
// import http from "http";               // <-- ADD THIS
// import { Server } from "socket.io";    // <-- ADD THIS

// import User from "./models/userModel.js";
// import productRoutes from "./routes/productRoutes.js";
// import likeRoutes from "./routes/likeRoutes.js";
// import sendMailRoute from "./routes/sendMail.js";
// import userRoutes from "./routes/userRoutes.js";
// import settingsRoutes from "./routes/settingsRoutes.js";
// import adminRoutes from "./routes/admin.js";

// const app = express();
// app.use(cors());
// app.use(express.json());

// // Create HTTP Server for Socket.io
// const server = http.createServer(app);   // <-- IMPORTANT

// // Create Socket.io Instance
// const io = new Server(server, {
//   cors: {
//     origin: "http://localhost:3000",
//     methods: ["GET", "POST"],
//   },
// });

// io.on("connection", (socket) => {
//   console.log("🟢 User connected:", socket.id);

//   socket.on("disconnect", () => {
//     console.log("🔴 User disconnected:", socket.id);
//   });
// });

// // MongoDB connection
// mongoose
//   .connect("mongodb://127.0.0.1:27017/fruitapp")
//   .then(() => console.log("✅ MongoDB Connected"))
//   .catch((err) => console.log(err));

// // Multer Storage
// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     const dir = "./uploads/";
//     if (!fs.existsSync(dir)) fs.mkdirSync(dir);
//     cb(null, dir);
//   },
//   filename: (req, file, cb) => {
//     cb(null, Date.now() + "_" + file.originalname);
//   },
// });

// const upload = multer({ storage });

// app.use("/uploads", express.static("uploads"));

// // signup, login, image upload, routes  (same code keep here ...)

// app.use("/api/products", productRoutes);
// app.use("/api/like", likeRoutes);
// app.use("/api", sendMailRoute);
// app.use("/api/users", userRoutes);
// app.use("/api/settings", settingsRoutes);
// app.use("/api/admin", adminRoutes);

// // 🚀 IMPORTANT: Start server using server.listen()
// server.listen(5000, () => {
//   console.log("🚀 Server running on port 5000 with Socket.io");
// });
// import express from "express";
// import mongoose from "mongoose";
// import cors from "cors";
// import bcrypt from "bcryptjs";
// import jwt from "jsonwebtoken";
// import fs from "fs";
// import multer from "multer";
// import http from "http";
// import { Server } from "socket.io";

// import User from "./models/userModel.js";
// import productRoutes from "./routes/productRoutes.js";
// import likeRoutes from "./routes/likeRoutes.js";
// import cartRoutes from "./routes/cartRoutes.js";
// import sendMailRoute from "./routes/sendMail.js";
// import userRoutes from "./routes/userRoutes.js";
// import settingsRoutes from "./routes/settingsRoutes.js";
// import adminRoutes from "./routes/admin.js";

// const app = express();
// app.use(cors());
// app.use(express.json());

// // ⭐ Create HTTP Server
// const server = http.createServer(app);

// // ⭐ Socket.IO Setup
// const io = new Server(server, {
//   cors: {
//     origin: "http://localhost:5173", // react vite URL
//     methods: ["GET", "POST"],
//   },
// });

// io.on("connection", (socket) => {
//   console.log("🟢 Connected:", socket.id);

//   socket.on("disconnect", () => {
//     console.log("🔴 Disconnected:", socket.id);
//   });
// });

// // ⭐ MongoDB
// mongoose.connect("mongodb://127.0.0.1:27017/fruitapp");

// // ⭐ Multer Upload
// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     const dir = "./uploads/";
//     if (!fs.existsSync(dir)) fs.mkdirSync(dir);
//     cb(null, dir);
//   },
//   filename: (req, file, cb) => {
//     cb(null, Date.now() + "_" + file.originalname);
//   },
// });
// const upload = multer({ storage });

// app.use("/uploads", express.static("uploads"));

// // ⭐ Routes
// app.use("/api/products", productRoutes);
// app.use("/api/like", likeRoutes);
// app.use("/api/cart", cartRoutes);
// app.use("/api", sendMailRoute);
// app.use("/api/users", userRoutes);
// app.use("/api/settings", settingsRoutes);
// app.use("/api/admin", adminRoutes);

// // ⭐ Start server (IMPORTANT)
// server.listen(5000, () => {
//   console.log("🚀 Server running on 5000 with socket.io");
// });
// server.js (main entry file)

import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import http from "http";
import { Server } from "socket.io";
import multer from "multer";
import fs from "fs";

// DB Connection (alag file se)
import connectDB from "./config/db.js";

// Models & Routes
import User from "./models/userModel.js";
import productRoutes from "./routes/productRoutes.js";
import likeRoutes from "./routes/likeRoutes.js";
import cartRoutes from "./routes/cartRoutes.js";          // ← Yeh line add ki (404 fix)
import sendMailRoute from "./routes/sendMail.js";
import userRoutes from "./routes/userRoutes.js";
import settingsRoutes from "./routes/settingsRoutes.js";
import adminRoutes from "./routes/admin.js";
import uploadRoutes from "./routes/uploadRoutes.js";

dotenv.config();

const app = express();

// Middleware
app.use(cors({ origin: ["http://localhost:5173", "http://localhost:3000"] }));
app.use(express.json());

// Serve uploaded images
app.use("/uploads", express.static("uploads"));

// Multer Setup (same as yours)
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const dir = "./uploads/";
    if (!fs.existsSync(dir)) fs.mkdirSync(dir);
    cb(null, dir);
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "_" + file.originalname);
  },
});
const upload = multer({ storage });

// Connect to Database (sabse pehle)
connectDB();

// ================== All Routes ==================

// Auth & User Routes (login, signup, profile, address, avatar)
app.post("/api/signup", async (req, res) => {
  try {
    const { name, email, password, role } = req.body;

    const exist = await User.findOne({ email: email.toLowerCase() });
    if (exist) return res.json({ message: "Email already exists ❌" });

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new User({
      name,
      email: email.toLowerCase(),
      password: hashedPassword,
      role: role || "user",
    });

    await user.save();
    res.json({ message: "Signup Successful ✅" });
  } catch (error) {
    res.json({ message: "Signup Failed", error });
  }
});

app.post("/api/login", async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email: email.toLowerCase() });
  if (!user) return res.json({ message: "User not found ❌" });

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) return res.json({ message: "Wrong password ❌" });

  const token = jwt.sign({ id: user._id, role: user.role }, "secret", {
    expiresIn: "7d",
  });

  res.json({
    message: `${user.role} login successful ✅`,
    user: {
      _id: user._id,
      name: user.name,
      email: user.email,
      role: user.role,
      avatarUrl: user.avatarUrl || null,
    },
    token,
  });
});

app.post("/api/upload-avatar/:userId", upload.single("avatar"), async (req, res) => {
  try {
    const { userId } = req.params;
    const imagePath = `/uploads/${req.file.filename}`;

    const user = await User.findByIdAndUpdate(
      userId,
      { avatarUrl: imagePath },
      { new: true }
    );

    res.json({ success: true, message: "Avatar uploaded ✅", user });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

app.delete("/api/remove-avatar/:userId", async (req, res) => {
  try {
    const { userId } = req.params;
    const user = await User.findById(userId);

    if (!user) return res.status(404).json({ message: "User not found" });

    if (user.avatarUrl && fs.existsSync("." + user.avatarUrl)) {
      fs.unlinkSync("." + user.avatarUrl);
    }

    user.avatarUrl = null;
    await user.save();

    res.json({ success: true, message: "Avatar removed ✅", user });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

app.get("/api/user/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).json({ message: "User not found" });
    res.json(user);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

app.put("/api/update-user/:id", async (req, res) => {
  try {
    const { name, email } = req.body;
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      { name, email },
      { new: true }
    );
    res.json({ message: "Profile updated", user: updatedUser });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

app.put("/api/address/:id", async (req, res) => {
  try {
    const { address } = req.body;
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      { address },
      { new: true }
    );
    res.json({ message: "Address updated", user: updatedUser });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Other Feature Routes
app.use("/api/products", productRoutes);
app.use("/api/like", likeRoutes);
app.use("/api/cart", cartRoutes);              // ← Ab yeh chalega (404 fix)
app.use("/api", sendMailRoute);
app.use("/api/users", userRoutes);
app.use("/api/settings", settingsRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/upload", uploadRoutes);

// Socket.IO Setup
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: ["http://localhost:5173", "http://localhost:3000"],
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  console.log("🟢 Socket connected:", socket.id);
  socket.on("disconnect", () => console.log("🔴 Disconnected:", socket.id));
});

// Start Server
const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
import express from "express";
import { registerUser, loginUser } from "../controllers/authController.js";
import { auth, adminOnly } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/signup", registerUser);
router.post("/login", loginUser);

router.get("/admin-panel", auth, adminOnly, (req, res) => {
  res.json({ message: "Welcome Admin ✅" });
});

export default router;

// routes/uploadRoutes.js
import express from "express";
import upload from "../middleware/upload.js";
import cloudinary from "../config/cloudinaryConfig.js";

const router = express.Router();

router.post("/upload", upload.single("image"), async (req, res) => {
  try {
    const uploadImage = () => {
      return new Promise((resolve, reject) => {
        cloudinary.uploader.upload_stream(
          { folder: "project_images" },
          (error, result) => {
            if (error) reject(error);
            else resolve(result);
          }
        ).end(req.file.buffer);
      });
    };

    const result = await uploadImage();

    res.json({
      imageUrl: result.secure_url
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;

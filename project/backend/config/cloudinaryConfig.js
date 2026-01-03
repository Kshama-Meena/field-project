// config/cloudinaryConfig.js
import { v2 as cloudinary } from "cloudinary";
import "dotenv/config";

cloudinary.config(); // auto reads CLOUDINARY_URL

export default cloudinary;

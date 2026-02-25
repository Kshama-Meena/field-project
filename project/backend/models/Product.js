import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  image: {
    type: String,
    required: true
  },
  prices: {
    type: Map,                    // ← Yeh important change
    of: Number,                   // value Number hoga
    required: true,
    default: {}                   // empty map allowed
  },
  unit: {
    type: String,
    required: true,
    enum: ["kg", "g", "piece", "dozen", "pack", "bunch", "box"], // aur realistic units add karo
    default: "kg"
  },
  category: {
    type: String,
    enum: ["fruit", "vegetable", "other"], // agar aur categories chahiye to add karo
    required: true
  },
  text: {
    type: String,
    trim: true
  }
}, {
  timestamps: true // optional – createdAt, updatedAt ke liye
});

const Product = mongoose.model("Product", productSchema);
export default Product;
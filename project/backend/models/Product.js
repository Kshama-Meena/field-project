import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  },
    prices: {
    "500g": {
      type: Number,
      required: true
    },
    "1kg": {
      type: Number,
      required: true
    }
  }, 
  category: {
    type: String,
    enum: ["fruit", "vegetable"],
    required: true
  },
  text: {
    type: String
  }
});

const Product = mongoose.model("Product", productSchema);
export default Product;

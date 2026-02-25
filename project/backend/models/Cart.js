import mongoose from "mongoose";

const cartSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  items: [
    {
      productId: String,
      name: String,
      price: Number,
      image: String,
      unit: { type: String, default: "kg" },
      quantity: { type: Number, default: 1 }
    }
  ]
});

export default mongoose.model("Cart", cartSchema);

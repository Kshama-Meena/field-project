import express from "express";
import Product from "../models/Product.js";

const router = express.Router();

// ✅ Get all products
router.get("/", async (req, res) => {
  const products = await Product.find();
  res.json(products);
});

// ✅ Filter by category
router.get("/:category", async (req, res) => {
  const { category } = req.params;
  const products = await Product.find({ category });
  res.json(products);
});

// ✅ Add Product (Auto increment ID)
router.post("/add", async (req, res) => {
  try {
    // find last product id
    const lastProduct = await Product.findOne().sort({ id: -1 });
    const newId = lastProduct ? lastProduct.id + 1 : 1;

    const newProduct = new Product({
      id: newId,
      category: req.body.category,
      name: req.body.name,
      price: req.body.price,
      image: req.body.image,
      text: req.body.text,
    });

    await newProduct.save();

    res.json({ success: true, message: "✅ Product added successfully!" });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

export default router;

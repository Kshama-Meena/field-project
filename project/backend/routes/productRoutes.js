import express from "express";
import Product from "../models/Product.js";


const router = express.Router();

// ✅ Get all products
router.get("/", async (req, res) => {
  const products = await Product.find();
  res.json(products);
});
router.put("/admin/edit-product/:id", async (req, res) => {
  try {
    await Product.findByIdAndUpdate(req.params.id, req.body);
    res.json({ success: true, message: "Product updated!" });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});
router.delete("/delete/:id", async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id);
    res.json({ success: true, message: "Product deleted!" });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});


// ✅ Filter by category
router.get("/:category", async (req, res) => {
  const { category } = req.params;
  const products = await Product.find({ category });
  res.json(products);
});

// ✅ Get products by array of IDs (wishlist)
router.post('/wishlist', async (req, res) => {
  try {
    const { ids } = req.body;
    if (!Array.isArray(ids) || ids.length === 0) return res.json([]);

    // Filter valid ObjectId strings to avoid CastError
    const mongoose = await import("mongoose");
    const validIds = ids.filter((id) => mongoose.Types.ObjectId.isValid(id));
    if (validIds.length === 0) return res.json([]);

    const products = await Product.find({ _id: { $in: validIds } });
    res.json(products);
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// ✅ Add Product (Auto increment ID)
router.post("/admin/add-product", async (req, res) => {
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

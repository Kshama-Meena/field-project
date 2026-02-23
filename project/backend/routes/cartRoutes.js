import express from "express";
import Cart from "../models/Cart.js";
import mongoose from "mongoose";

const router = express.Router();

// GET cart (return empty if not exists)
router.get("/:userId", async (req, res) => {
  try {
    const { userId } = req.params;

    // Agar userId valid ObjectId nahi hai to error
    if (!mongoose.Types.ObjectId.isValid(userId)) {
      return res.status(400).json({ error: "Invalid user ID" });
    }

    let cart = await Cart.findOne({ userId });

    // Agar cart nahi mila to naya bana do (empty cart)
    if (!cart) {
      cart = new Cart({
        userId,
        items: [],
      });
      await cart.save();
    }

    res.status(200).json(cart); // hamesha 200 + cart object (items array ke saath)
  } catch (error) {
    console.error("GET CART ERROR:", error);
    res.status(500).json({ error: "Server error while loading cart" });
  }
});

// ADD to cart
router.post("/add", async (req, res) => {
  try {
    const { userId, productId, name, price, image } = req.body;

    if (!userId || !productId) {
      return res.status(400).json({ error: "userId and productId required" });
    }

    let cart = await Cart.findOne({ userId });

    if (!cart) {
      cart = new Cart({ userId, items: [] });
    }

    const existing = cart.items.find((item) => item.productId === productId);

    if (existing) {
      existing.quantity += 1;
    } else {
      cart.items.push({
        productId,
        name,
        price: Number(price),
        image,
        quantity: 1,
      });
    }

    await cart.save();
    res.status(200).json(cart);
  } catch (error) {
    console.error("ADD TO CART ERROR:", error);
    res.status(500).json({ error: "Error adding to cart" });
  }
});

// Increase quantity
router.put("/increase/:userId/:productId", async (req, res) => {
  try {
    const { userId, productId } = req.params;

    const cart = await Cart.findOne({ userId });

    if (!cart) {
      return res.status(404).json({ error: "Cart not found" });
    }

    const item = cart.items.find((i) => i.productId === productId);
    if (item) {
      item.quantity += 1;
      await cart.save();
      return res.status(200).json(cart);
    }

    res.status(404).json({ error: "Item not found in cart" });
  } catch (error) {
    console.error("INCREASE ERROR:", error);
    res.status(500).json({ error: "Server error" });
  }
});

// Decrease quantity
router.put("/decrease/:userId/:productId", async (req, res) => {
  try {
    const { userId, productId } = req.params;

    const cart = await Cart.findOne({ userId });

    if (!cart) return res.status(404).json({ error: "Cart not found" });

    const itemIndex = cart.items.findIndex((i) => i.productId === productId);

    if (itemIndex === -1) {
      return res.status(404).json({ error: "Item not found" });
    }

    if (cart.items[itemIndex].quantity > 1) {
      cart.items[itemIndex].quantity -= 1;
    } else {
      cart.items.splice(itemIndex, 1);
    }

    await cart.save();
    res.status(200).json(cart);
  } catch (error) {
    console.error("DECREASE ERROR:", error);
    res.status(500).json({ error: "Server error" });
  }
});

// Delete item
router.delete("/delete/:userId/:productId", async (req, res) => {
  try {
    const { userId, productId } = req.params;

    const cart = await Cart.findOne({ userId });

    if (!cart) return res.status(404).json({ error: "Cart not found" });

    cart.items = cart.items.filter((item) => item.productId !== productId);

    await cart.save();
    res.status(200).json(cart);
  } catch (error) {
    console.error("DELETE ERROR:", error);
    res.status(500).json({ error: "Server error" });
  }
});

export default router;
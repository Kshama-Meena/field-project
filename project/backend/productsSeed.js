import mongoose from "mongoose";
import Product from "./models/Product.js";
import dotenv from "dotenv";

dotenv.config();

// MongoDB Connection
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => {
    console.error("❌ MongoDB Connection Error:", err);
    process.exit(1);
  });

// Updated products with realistic units + prices (Bhopal/MP ~2025-26 ke around)
const products = [
  // Vegetables (mostly kg based)
  { id: 1, category: "vegetable", name: "Potato", prices: { "500g": 30, "1kg": 45 }, unit: "kg", image: "https://res.cloudinary.com/ds8w1kut5/image/upload/v1766763548/Potato_b2c16u.png", text: "Fresh & Organic" },
  { id: 2, category: "vegetable", name: "Cucumber", prices: { "500g": 30, "1kg": 55 }, unit: "kg", image: "https://res.cloudinary.com/ds8w1kut5/image/upload/v1766763265/Cucumber_mfhjbm.jpg", text: "Cool & Crisp" },
  { id: 3, category: "vegetable", name: "Tomato", prices: { "500g": 35, "1kg": 65 }, unit: "kg", image: "https://res.cloudinary.com/ds8w1kut5/image/upload/v1766763402/tameto_etdsdb.jpg", text: "Juicy & Red" },
  { id: 4, category: "vegetable", name: "Matar", prices: { "500g": 55, "1kg": 100 }, unit: "kg", image: "https://res.cloudinary.com/ds8w1kut5/image/upload/v1766763347/Matar_qj1ooh.jpg", text: "Sweet & Green" },
  { id: 5, category: "vegetable", name: "Red Chilli", prices: { "500g": 40, "1kg": 75 }, unit: "kg", image: "https://res.cloudinary.com/ds8w1kut5/image/upload/v1767435938/Red_Chilli_makoh3.jpg", text: "Hot & Spicy" },
  { id: 6, category: "vegetable", name: "Lady’s Finger", prices: { "500g": 40, "1kg": 75 }, unit: "kg", image: "https://res.cloudinary.com/ds8w1kut5/image/upload/v1766763319/lady_ttodqt.jpg", text: "Soft & Fresh" },
  { id: 7, category: "vegetable", name: "Bell Peppers", prices: { "500g": 60, "1kg": 110 }, unit: "kg", image: "https://res.cloudinary.com/ds8w1kut5/image/upload/v1766763221/BellPeppers_plawqg.jpg", text: "Colorful & Crisp" },
  { id: 8, category: "vegetable", name: "Cauliflower", prices: { "1 piece": 50, "2 piece": 90 }, unit: "piece", image: "https://res.cloudinary.com/ds8w1kut5/image/upload/v1766763544/cauliflower_w2oww9.jpg", text: "Pure & Natural" },
  { id: 9, category: "vegetable", name: "Onion", prices: { "500g": 20, "1kg": 40 }, unit: "kg", image: "https://res.cloudinary.com/ds8w1kut5/image/upload/v1766763352/Onion_yo50oq.jpg", text: "Sharp & Fresh" },
  { id: 10, category: "vegetable", name: "Green Chilli", prices: { "500g": 25, "1kg": 45 }, unit: "kg", image: "https://res.cloudinary.com/ds8w1kut5/image/upload/v1767435901/Green_chilli_zkbqvf.jpg", text: "Hot & Bold" },

  // Fruits (mix of kg, piece, dozen, pack)
  { id: 11, category: "fruit", name: "Papaya", prices: { "1 piece": 70, "half piece": 40 }, unit: "piece", image: "https://res.cloudinary.com/ds8w1kut5/image/upload/v1766763361/Papaya1_m5xjnn.jpg", text: "Sweet & Healthy" },
  { id: 12, category: "fruit", name: "Kiwi", prices: { "1 pack": 120, "2 pack": 220 }, unit: "pack", image: "https://res.cloudinary.com/ds8w1kut5/image/upload/v1766763313/kiwi1_copy_ah9kom.jpg", text: "Tangy & Fresh" },
  { id: 13, category: "fruit", name: "Pomegranate", prices: { "500g": 75, "1kg": 140 }, unit: "kg", image: "https://res.cloudinary.com/ds8w1kut5/image/upload/v1766763390/Pomegranate_zhazjd.jpg", text: "Juicy Seeds" },
  { id: 14, category: "fruit", name: "Banana", prices: { "1 dozen": 50, "2 dozen": 90 }, unit: "dozen", image: "https://res.cloudinary.com/ds8w1kut5/image/upload/v1766763218/Banana_fkvk4b.jpg", text: "Soft & Sweet" },
  { id: 15, category: "fruit", name: "Stroberi", prices: { "1 pack": 140, "2 pack": 260 }, unit: "pack", image: "https://res.cloudinary.com/ds8w1kut5/image/upload/v1766763397/stroberi_uuauol.jpg", text: "Fresh & Sweet" },
  { id: 16, category: "fruit", name: "Apple", prices: { "500g": 85, "1kg": 160, "2kg": 300 }, unit: "kg", image: "https://res.cloudinary.com/ds8w1kut5/image/upload/v1772008838/Apple_ghfot3.jpg", text: "Crunchy & Sweet" },
  { id: 17, category: "fruit", name: "Mango", prices: { "1kg": 180, "2kg": 340, "5kg box": 800 }, unit: "kg", image: "https://res.cloudinary.com/ds8w1kut5/image/upload/v1766763345/mango_jwcvqi.jpg", text: "King of Fruits" },
  { id: 18, category: "fruit", name: "Grapes", prices: { "500g": 75, "1kg": 140 }, unit: "kg", image: "https://res.cloudinary.com/ds8w1kut5/image/upload/v1766763301/grapes1_padukh.png", text: "Sweet & Juicy" },
  { id: 19, category: "fruit", name: "Orange", prices: { "1kg": 90, "2kg": 170 }, unit: "kg", image: "https://res.cloudinary.com/ds8w1kut5/image/upload/v1766763352/o_yiezlp.jpg", text: "Citrus Fresh" },
  { id: 20, category: "fruit", name: "Cherry", prices: { "1 pack": 180 }, unit: "pack", image: "https://res.cloudinary.com/ds8w1kut5/image/upload/v1766763248/cherry_fq1kpu.jpg", text: "Bright & Sweet" },
  { id: 21, category: "fruit", name: "Pear", prices: { "500g": 85, "1kg": 160 }, unit: "kg", image: "https://res.cloudinary.com/ds8w1kut5/image/upload/v1766763366/Pear_rgh4pi.jpg", text: "Soft & Crisp" },
  { id: 22, category: "fruit", name: "Custard Apple", prices: { "1 piece": 110, "2 piece": 200 }, unit: "piece", image: "https://res.cloudinary.com/ds8w1kut5/image/upload/v1766763538/c1_pje6iw.jpg", text: "Creamy & Sweet" },
  { id: 23, category: "fruit", name: "Watermelon", prices: { "small": 70, "medium": 120 }, unit: "piece", image: "https://res.cloudinary.com/ds8w1kut5/image/upload/v1766763408/Watermelon_rarbun.jpg", text: "Juicy & Fresh" },
  { id: 24, category: "fruit", name: "Dragon Fruit", prices: { "1 piece": 170, "2 piece": 320 }, unit: "piece", image: "https://res.cloudinary.com/ds8w1kut5/image/upload/v1766763271/Dragon_bxpmja.jpg", text: "Exotic & Fresh" },
];

// Safe seeding with upsert (no duplicates)
async function seedProducts() {
  try {
    console.log("🌱 Starting product seeding... Total:", products.length);

    for (const product of products) {
      const query = { name: product.name, category: product.category };
      const updated = await Product.findOneAndUpdate(
        query,
        product,
        { upsert: true, new: true, setDefaultsOnInsert: true }
      );

      // Better printing of prices Map
      const pricesStr = Array.from(updated.prices.entries())
        .map(([key, val]) => `${key}: ₹${val}`)
        .join(" / ");

      console.log(`✅ ${updated.name} (${updated.category}) - Unit: ${updated.unit} - Prices: ${pricesStr || "—"}`);
    }

    console.log("🎉 All products seeded/updated successfully!");
  } catch (error) {
    console.error("❌ Error during seeding:", error.message);
  } finally {
    await mongoose.connection.close();
    console.log("MongoDB connection closed.");
  }
}

seedProducts();
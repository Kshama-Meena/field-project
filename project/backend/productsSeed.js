import mongoose from "mongoose";
import Product from "./models/Product.js";

mongoose.connect("mongodb://127.0.0.1:27017/fruitapp")
  .then(() => console.log("DB Connected"))
  .catch(err => console.log(err));


const products = [
  { id: 1, category: "vegetable", name: "Potato", price: 110, image: "Potato.jpg", text: "Fresh & Organic" },
  { id: 2, category: "vegetable", name: "Cucumber", price: 90, image: "Cucumber.jpg", text: "Cool & Crisp" },
  { id: 3, category: "vegetable", name: "Tomato", price: 50, image: "tameto.jpg", text: "Juicy & Red" },
  { id: 4, category: "vegetable", name: "Matar", price: 120, image: "Matar.jpg", text: "Sweet & Green" },
  { id: 5, category: "vegetable", name: "Chilli", price: 99, image: "Chilli.jpg", text: "Hot & Spicy" },
  { id: 6, category: "vegetable", name: "Lady’s Finger", price: 80, image: "lady.jpg", text: "Soft & Fresh" },
  { id: 7, category: "vegetable", name: "Bell Peppers", price: 130, image: "BellPeppers.jpg", text: "Colorful & Crisp" },
  { id: 8, category: "vegetable", name: "Cauliflower", price: 70, image: "cauliflower.jpg", text: "Pure & Natural" },
  { id: 9, category: "vegetable", name: "Onion", price: 100, image: "Onion.jpg", text: "Sharp & Fresh" },
  { id: 10, category: "vegetable", name: "Red Chilli", price: 140, image: "RedChilli.jpg", text: "Hot & Bold" },

  { id: 11, category: "fruit", name: "Papaya", price: 110, image: "Papaya1.jpg", text: "Sweet & Healthy" },
  { id: 12, category: "fruit", name: "Kiwi", price: 90, image: "kiwi1.jpg", text: "Tangy & Fresh" },
  { id: 13, category: "fruit", name: "Granatalma", price: 50, image: "Granatalma.jpg", text: "Juicy Seeds" },
  { id: 14, category: "fruit", name: "Banana", price: 120, image: "Banana.jpg", text: "Soft & Sweet" },
  { id: 15, category: "fruit", name: "Stroberi", price: 99, image: "stroberi.jpg", text: "Fresh & Sweet" },
  { id: 16, category: "fruit", name: "Apple", price: 80, image: "Apple.jpg", text: "Crunchy & Sweet" },
  { id: 17, category: "fruit", name: "Mango", price: 130, image: "mango.jpg", text: "King of Fruits" },
  { id: 18, category: "fruit", name: "Grapes", price: 70, image: "grapes1.jpg", text: "Sweet & Juicy" },
  { id: 19, category: "fruit", name: "Orange", price: 80, image: "o.jpg", text: "Citrus Fresh" },

  { id: 20, category: "fruit", name: "Cherry", price: 140, image: "cherry.jpg", text: "Bright & Sweet" },
  { id: 21, category: "fruit", name: "Pear", price: 99, image: "Pear.jpg", text: "Soft & Crisp" },
  { id: 22, category: "fruit", name: "Custard Apple", price: 80, image: "c1.jpg", text: "Creamy & Sweet" },
  { id: 23, category: "fruit", name: "Watermelon", price: 130, image: "Sandía.jpg", text: "Juicy & Fresh" },
  { id: 24, category: "fruit", name: "Raspberry", price: 70, image: "Raspberry.jpg", text: "Tangy Sweet" },
  { id: 25, category: "fruit", name: "Dragon Fruit", price: 100, image: "Dragon1.jpg", text: "Exotic & Fresh" },
  { id: 26, category: "fruit", name: "Dragon Fruit", price: 100, image: "p1.jpg", text: "Exotic & Fresh" }
];






async function insertProducts() {
  await Product.insertMany(products);
  console.log("✅ Products Inserted");
  mongoose.connection.close();
}

insertProducts();

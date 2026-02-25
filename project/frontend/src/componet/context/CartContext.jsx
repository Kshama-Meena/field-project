
import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";
import { useAuth } from "./AuthContext";
import toast from "react-hot-toast";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const { user } = useAuth();

  const userId = user?._id || user?.id;

  // Load cart when user changes (login/logout)
  useEffect(() => {
    if (userId) {
      loadCart();
    } else {
      setCart([]); // clear cart on logout
    }
  }, [userId]);

  const loadCart = async () => {
    if (!userId) return;
    try {
      const res = await axios.get(`http://localhost:5000/api/cart/${userId}`);
      setCart(res.data.items || []);
    } catch (error) {
      console.error("Failed to load cart:", error);
      toast.error("Couldn't load your cart");
    }
  };

  const addToCart = async (product) => {
    if (!userId) {
      toast.error("Please login to add items");
      return;
    }

    const productId = product._id || product.productId || product.id;

    if (!productId) {
      console.error("Product missing ID:", product);
      toast.error("Cannot add this item");
      return;
    }

    // Prefer the explicitly-selected weight if provided
    const unit = product.selectedWeight || product.unit || "kg";

    // Optimistic update (instant feedback) - treat productId+unit as unique key
    setCart((prev) => {
      const exists = prev.find((item) => item.productId === productId && item.unit === unit);
      if (exists) {
        return prev.map((item) =>
          item.productId === productId && item.unit === unit
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [
        ...prev,
        {
          productId,
          name: product.name,
          price: product.price,
          image: product.image,
          unit,
          selectedWeight: product.selectedWeight || null,
          quantity: 1,
        },
      ];
    });

    try {
      const res = await axios.post("http://localhost:5000/api/cart/add", {
        userId,
        productId,
        name: product.name,
        price: product.price,
        image: product.image,
        unit, // send selected weight/unit to server
      });

      // Sync with server response
      setCart(res.data.items || []);
      toast.success("Added to cart!");
    } catch (error) {
      console.error("Add to cart failed:", error);
      toast.error("Failed to add item");
      loadCart(); // rollback on error
    }
  };

  const changeQuantity = async (productId, delta, unit = "kg") => {
    if (!userId) return;

    // Optimistic
    setCart((prev) =>
      prev.map((item) =>
        item.productId === productId && item.unit === unit
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item
      )
    );

    try {
      const endpoint = delta > 0 ? "increase" : "decrease";
      const res = await axios.put(
        `http://localhost:5000/api/cart/${endpoint}/${userId}/${productId}?unit=${encodeURIComponent(unit)}`
      );
      setCart(res.data.items || []);
    } catch (error) {
      console.error(`Quantity ${delta > 0 ? "increase" : "decrease"} failed:`, error);
      loadCart(); // rollback
    }
  };

  const addQuantity = (productId, unit) => changeQuantity(productId, 1, unit);
  const removeQuantity = (productId, unit) => changeQuantity(productId, -1, unit);

  const removeFromCart = async (productId, unit = "kg") => {
    if (!userId) return;

    // Optimistic remove
    setCart((prev) => prev.filter((item) => !(item.productId === productId && item.unit === unit)));

    try {
      const res = await axios.delete(
        `http://localhost:5000/api/cart/delete/${userId}/${productId}?unit=${encodeURIComponent(unit)}`
      );
      setCart(res.data.items || []);
      toast.success("Item removed");
    } catch (error) {
      console.error("Remove failed:", error);
      toast.error("Failed to remove item");
      loadCart();
    }
  };

  const value = {
    cart,
    loadCart,
    addToCart,
    addQuantity,
    removeQuantity,
    removeFromCart,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export const useCart = () => useContext(CartContext);

// import { createContext, useContext, useState } from "react";
// import axios from "axios";
// import { useAuth } from "./AuthContext"; // AuthContext se current user
// import toast from "react-hot-toast";

// const CartContext = createContext();

// export const CartProvider = ({ children }) => {
//   const [cart, setCart] = useState([]);
//   const { user } = useAuth(); // logged-in user

//   // Get current userId safely
//   const userId = user?._id || user?.id; 

//   // Load cart
//   const loadCart = async () => {
//     if (!userId) return; // user not logged in
//     try {
//       const res = await axios.get(`http://localhost:5000/api/cart/${userId}`);
//       setCart(res.data.items || []);
//     } catch (error) {
//       console.error("LOAD CART ERROR:", error);
//     }
//   };

//   // Add to cart
//   const addToCart = async (product) => {
//     if (!userId) {
//       alert("Please login first!");
//       return;
//     }
//     try {
//       const res = await axios.post("http://localhost:5000/api/cart/add", {
//         userId,
//         productId: product.productId || product._id,
//         name: product.name,
//         price: product.price,
//         image: product.image,
//       });
//       setCart(res.data.items);
//       toast.success("item  added to your basket!!");
//     } catch (error) {
//       console.error("ADD TO CART ERROR:", error);
//     }
//   };

//   // Increase quantity
//   const addQuantity = async (productId) => {
//     if (!userId) return;
//     try {
//       const res = await axios.put(
//         `http://localhost:5000/api/cart/increase/${userId}/${productId}`
//       );
//       setCart(res.data.items);
//     } catch (error) {
//       console.error("INCREASE ERROR:", error);
//     }
//   };

//   // Decrease quantity
//   const removeQuantity = async (productId) => {
//     if (!userId) return;
//     try {
//       const res = await axios.put(
//         `http://localhost:5000/api/cart/decrease/${userId}/${productId}`
//       );
//       setCart(res.data.items);
//     } catch (error) {
//       console.error("DECREASE ERROR:", error);
//     }
//   };

//   // Remove item completely
//   const removeFromCart = async (productId) => {
//     if (!userId) return;
//     try {
//       const res = await axios.delete(
//         `http://localhost:5000/api/cart/delete/${userId}/${productId}`
//       );
//       setCart(res.data.items);
//     } catch (error) {
//       console.error("REMOVE ERROR:", error);
//     }
//   };

//   return (
//     <CartContext.Provider
//       value={{
//         cart,
//         loadCart,
//         addToCart,
//         addQuantity,
//         removeQuantity,
//         removeFromCart,
//       }}
//     >
//       {children}
//     </CartContext.Provider>
//   );
// };

// export const useCart = () => useContext(CartContext);
// context/CartContext.jsx
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

    // Optimistic update (instant feedback)
    setCart((prev) => {
      const exists = prev.find((item) => item.productId === productId);
      if (exists) {
        return prev.map((item) =>
          item.productId === productId
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

  const changeQuantity = async (productId, delta) => {
    if (!userId) return;

    // Optimistic
    setCart((prev) =>
      prev.map((item) =>
        item.productId === productId
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item
      )
    );

    try {
      const endpoint = delta > 0 ? "increase" : "decrease";
      const res = await axios.put(
        `http://localhost:5000/api/cart/${endpoint}/${userId}/${productId}`
      );
      setCart(res.data.items || []);
    } catch (error) {
      console.error(`Quantity ${delta > 0 ? "increase" : "decrease"} failed:`, error);
      loadCart(); // rollback
    }
  };

  const addQuantity = (productId) => changeQuantity(productId, 1);
  const removeQuantity = (productId) => changeQuantity(productId, -1);

  const removeFromCart = async (productId) => {
    if (!userId) return;

    // Optimistic remove
    setCart((prev) => prev.filter((item) => item.productId !== productId));

    try {
      const res = await axios.delete(
        `http://localhost:5000/api/cart/delete/${userId}/${productId}`
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
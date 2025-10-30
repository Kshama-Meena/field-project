import React, { createContext, useContext, useState } from "react";
import AddToCartMessage from "./AddToCartMessage";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [showMessage, setShowMessage] = useState(false);

  const addToCart = (item) => {
    // agar item already cart me hai to uska quantity badhao (optional)
    const existingItem = cartItems.find((i) => i.id === item.id);
    if (existingItem) {
      setCartItems((prev) =>
        prev.map((i) =>
          i.id === item.id ? { i, quantity: i.quantity + 1 } : i
        )
      );
    } else {
      setCartItems((prev) => [...prev, { ...item, quantity: 1 }]);
    }

    // popup message dikhana
    setShowMessage(true);
    setTimeout(() => setShowMessage(false), 1500);
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart }}>
      {children}
      <AddToCartMessage visible={showMessage} />
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);

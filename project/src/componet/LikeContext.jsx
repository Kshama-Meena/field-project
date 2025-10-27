import { createContext, useContext, useState, useEffect } from "react";

const LikeContext = createContext();
export const LikeProvider = ({ children }) => {
  const [likedItems, setLikedItems] = useState(() => {
          const savedLikes = localStorage.getItem("likedItems");
          return savedLikes ? JSON.parse(savedLikes) : [];
  });

  // Load from localStorage
useEffect(() => {
  if (typeof window !== "undefined") {
    try {
      const savedLikes = localStorage.getItem("likedItems");
      if (savedLikes) setLikedItems(JSON.parse(savedLikes));
    } catch (e) {
      console.error("Failed to load liked items:", e);
      setLikedItems([]);
    }
  }
}, []);

useEffect(() => {
  if (typeof window !== "undefined") {
    localStorage.setItem("likedItems", JSON.stringify(likedItems));
  }
}, [likedItems]);


const toggleLike = (product) => {
  setLikedItems((prev) => {
    const exists = prev.find(
      (item) => item.id === product.id && item.category === product.category
    );
    if (exists) {
      return prev.filter(
        (item) => !(item.id === product.id && item.category === product.category)
      );
    }
    return [...prev, product];
  });
};



  const isLiked = (product) =>
  likedItems.some(
    (item) => item.id === product.id && item.category === product.category
  );

  return (
    <LikeContext.Provider value={{ likedItems, toggleLike, isLiked }}>
      {children}
    </LikeContext.Provider>
  );
};

export const useLike = () => useContext(LikeContext);

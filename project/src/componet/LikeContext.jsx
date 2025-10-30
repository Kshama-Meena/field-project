import { createContext, useContext, useState, useEffect } from "react";

const LikeContext = createContext();

export const LikeProvider = ({ children }) => {
  const [likedItems, setLikedItems] = useState(() => {
    const savedLikes = localStorage.getItem("likedItems");
    return savedLikes ? JSON.parse(savedLikes) : [];
  });

  const [popupMessage, setPopupMessage] = useState("");

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

  // Save to localStorage
  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("likedItems", JSON.stringify(likedItems));
    }
  }, [likedItems]);

  // Toggle Like function
  const toggleLike = (product) => {
    setLikedItems((prev) => {
      const exists = prev.find(
        (item) => item.id === product.id && item.category === product.category
      );
      if (exists) {
        showPopup("💔 Removed from Favorites");
        return prev.filter(
          (item) =>
            !(item.id === product.id && item.category === product.category)
        );
      } else {
        showPopup("💚 Added to Favorites!");
        return [...prev, product];
      }
    });
  };

  const isLiked = (product) =>
    likedItems.some(
      (item) => item.id === product.id && item.category === product.category
    );

  // Popup handler
  const showPopup = (message) => {
    setPopupMessage(message);
    setTimeout(() => setPopupMessage(""), 2000);
  };

  return (
    <LikeContext.Provider value={{ likedItems, toggleLike, isLiked }}>
      {children}

      {/* Tailwind Popup */}
      {popupMessage && (
        <div className="fixed bottom-6 right-6 bg-white text-green-600 font-medium shadow-lg rounded-lg px-5 py-3 flex items-center gap-2 border border-green-400 animate-fade-in-out">
          {popupMessage}
        </div>
      )}
    </LikeContext.Provider>
  );
};

export const useLike = () => useContext(LikeContext);

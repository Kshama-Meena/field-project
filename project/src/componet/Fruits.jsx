// import React, { useState } from "react";

// function Fruits() {
//   const products = [
//     { id: 1, name: "Papaya", price: "$110.00", image: "Papaya1.jpg" },
//     { id: 2, name: "Kiwi", price: "$90.00", image: "kiwi1.jpg" },
//     { id: 3, name: "Granatalma", price: "$50.00", image: "Gránátalma.jpg" },
//     { id: 4, name: "Banana", price: "$120.00", image: "Banana.jpg" },
//     { id: 5, name: "Stroberi", price: "$99.00", image: "stroberi.jpg" },
//     { id: 6, name: "Apple", price: "$80.00", image: "Apple.jpg" },
//     { id: 7, name: "Mango", price: "$130.00", image: "mango.jpg" },
//     { id: 8, name: "Grapes", price: "$70.00", image: "grapes1.jpg" },
//     { id: 9, name: "Orange", price: "$100.00", image: "o.jpg" },
//     { id: 10, name: "Cherry", price: "$140.00", image: "cherry.jpg" },
//     { id: 11, name: "Pear", price: "$99.00", image: "Pear.jpg" },
//     { id: 12, name: "Custard Apple", price: "$80.00", image: "c1.jpg" },
//     { id: 13, name: "Watermelon", price: "$130.00", image: "Sandía.jpg" },
//     { id: 14, name: "Raspberry", price: "$70.00", image: "Raspberry.jpg" },
//     { id: 15, name: "Dragon Fruit", price: "$100.00", image: "Dragon1.jpg" },
//     { id: 16, name: "Dragon Fruit", price: "$100.00", image: "p1.jpg" },
//   ];

//   const [likedItems, setLikedItems] = useState([]); // liked fruits store होंगे

//   // Toggle Like Button
//   const toggleLike = (id) => {
//     if (likedItems.includes(id)) {
//       setLikedItems(likedItems.filter((itemId) => itemId !== id)); // unlike
//     } else {
//       setLikedItems([...likedItems, id]); // like
//     }
//   };

//   // Add to Cart Function
//   const handleAddToCart = (item) => {
//     alert(item.name + " added to cart!");
//   };

//   return (
//     <div className="w-full max-w-8xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 p-6">
//       {products.map((item) => (
//         <div
//           key={item.id}
//           className="bg-white w-full rounded-xl shadow-md p-6 flex flex-row items-center hover:scale-105 transition-transform mt-10"
//         >
//           {/* Image */}
//           <img
//             src={item.image}
//             alt={item.name}
//             className="w-32 h-32 object-contain mr-6"
//           />

//           {/* Text + Button */}
//           <div className="flex flex-col items-start">
//             <h3 className="font-semibold text-xl">{item.name}</h3>
//             <p className="text-green-600 font-extrabold text-lg">{item.price}</p>

//             {/* Buttons row */}
//             <div className="flex gap-4 mt-4">
//               {/* Add to Cart */}
//               <button
//                 onClick={() => handleAddToCart(item)}
//                 className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-400 transition-colors"
//               >
//                 Add to Cart
//               </button>

//               {/* Like Button ❤️ */}
//               <button
//                 onClick={() => toggleLike(item.id)}
//                 className="text-2xl"
//               >
//                 {likedItems.includes(item.id) ? "❤️" : "🤍"}
//               </button>
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default Fruits;


import { FaShoppingCart } from 'react-icons/fa';

function Fruits() {

  const products = [
    { id: 1, name: "Papaya", price: "$110.00", image: "Papaya1.jpg" },
    { id: 2, name: "Kiwi", price: "$90.00", image: "kiwi1.jpg" },
    { id: 3, name: "Granatalma", price: "$50.00", image: "Gránátalma.jpg" },
    { id: 4, name: "Banana", price: "$120.00", image: "Banana.jpg" },
    { id: 5, name: "Stroberi", price: "$99.00", image: "stroberi.jpg" },
    { id: 6, name: "Apple", price: "$80.00", image: "Apple.jpg" },
    { id: 7, name: "Mango", price: "$130.00", image: "mango.jpg" },
    { id: 8, name: "Grapes", price: "$70.00", image: "grapes1.jpg" },
    { id: 9, name: "Orange", price: "$100.00", image: "o.jpg" },
    { id: 10, name: "Cherry", price: "$140.00", image: "cherry.jpg" },
    { id: 11, name: "Pear", price: "$99.00", image: "Pear.jpg" },
    { id: 12, name: "Custard Apple", price: "$80.00", image: "c1.jpg" },
    { id: 13, name: "watermelon", price: "$130.00", image: "Sandía.jpg" },
    { id: 14, name: " Raspberry", price: "$70.00", image: "Raspberry.jpg" },
    { id: 15, name: "Dragon Fruit", price: "$100.00", image: "Dragon1.jpg" },
    { id: 16, name: "Dragon Fruit", price: "$100.00", image: "p1.jpg" }

  ];
  return (
    <>
      <section
        className="relative w-full h-[95vh] bg-contain bg-right bg-no-repeat bg-fixed bg-white"
        style={{
          backgroundImage: "url('frutsh.jpg')",
          backgroundSize: 'contain',
          backgroundPosition: 'right',
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 flex items-center h-full px-6 md:px-16">
          <div className="max-w-lg md:max-w-xl lg:ml-20 text-left">
            <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-snug drop-shadow-xl">
              Naturally <span className="text-yellow-400">Sweet</span> <br />
              & <span className="text-green-300">Organically</span> Fresh
            </h1>
            <p className="mt-4 text-gray-100 text-xl md:text-2xl font-semibold leading-relaxed">
              Experience the finest seasonal produce. We deliver farm-to-kitchen freshness
              with guaranteed organic quality and taste.
            </p>
            <button className="mt-6 px-10 py-4 bg-green-500 text-white font-bold text-lg rounded-xl shadow-2xl hover:bg-green-600 hover:scale-105 transition-transform duration-300">
              Shop Fresh Today
            </button>
          </div>
        </div>
      </section>


      <div className="bg-[#fdf6ee] min-h-screen py-12 px-4 md:px-6 lg:px-8">
            {/* 🍎 Products Heading 🍎 */}
            <h2 className="text-4xl font-extrabold text-gray-800 text-center mb-10">
                Seasonal <span className="text-yellow-600">Freshness</span>
            </h2>

            {/* Grid Container: यह मुख्य रिस्पॉन्सिव हिस्सा है */}
            <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
                {products.map((item) => (
                    <div
                        key={item.id}
                        className="bg-white rounded-2xl shadow-lg p-4 sm:p-6 text-center relative hover:shadow-2xl transition-all duration-300 group"
                    >
                        {/* 🥭 Product Image: w-32 h-32 से w-40 h-40 तक का साइज़ है */}
                        <img
                            src={item.image}
                            alt={item.name}
                            // w-32 h-32: छोटे स्क्रीन पर साइज़ 
                            // md:w-40 md:h-40: मध्यम स्क्रीन पर साइज़ (यह रिस्पॉन्सिव साइज़िंग है)
                            className="w-32 h-32 md:w-40 md:h-40 object-contain mx-auto mt-4 transition-transform duration-300 group-hover:scale-110"
                        />
                        <h3 className="mt-4 text-base md:text-xl font-bold text-gray-800">
                            {item.name}
                        </h3>
                        <p className="text-xs md:text-sm text-gray-500 border-b border-gray-200 pb-2">
                            {item.subtext || "Premium Quality"} 
                        </p>
                        <div className="flex justify-center items-center gap-2 mt-3">
                            {item.oldPrice && (
                                <span className="text-gray-400 line-through text-xs md:text-sm">
                                    {item.oldPrice}
                                </span>
                            )}
                            <span className="text-yellow-600 font-extrabold text-base md:text-lg">
                                {item.price}
                            </span>
                        </div>
                        {/* 🛒 Add to Cart Button 🛒 */}
                        <button className="mt-5 bg-yellow-400 hover:bg-yellow-500 text-gray-800 font-bold text-sm md:text-base py-2.5 px-6 rounded-full flex items-center justify-center gap-2 mx-auto transition-transform duration-300 group-hover:scale-105 shadow-md">
                            Add to Cart <FaShoppingCart className="text-base" />
                        </button>
                    </div>
                ))}
            </div>

            {/* Browse All Products Button */}
            <div className="text-center mt-12">
                <button className="bg-yellow-400 text-gray-800 font-extrabold py-3 px-10 rounded-full border-2 border-yellow-600 hover:bg-yellow-500 hover:scale-105 transition-transform duration-300 shadow-xl">
                    Browse All Products
                </button>
            </div>
        </div>
      {/* <section className="mx-auto px-6 md:px-12 mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 w-full relative">
        <div
          className="rounded-2xl p-8 flex flex-col justify-center shadow-lg transform transition-transform duration-300 hover:scale-105 h-96 md:h-[450px] bg-cover bg-center"
          style={{ backgroundImage: "url('background1.jpg')" }}
        >
          <h2 className="text-2xl md:text-3xl font-bold text-green-300 drop-shadow-lg">
            Fresh Vegetable & Fruit Basket
          </h2>
          <p className="mt-3 text-black drop-shadow-md">
            Fresh, handpicked and delivered to your doorstep.
          </p>
        </div>
        <div
          className="rounded-2xl p-8 flex flex-col justify-center items-end shadow-lg transform transition-transform duration-300 hover:scale-105 h-96 md:h-[450px] bg-cover bg-center"
          style={{ backgroundImage: "url('foddebg.jpg')" }}
        >
          <h2 className="text-2xl md:text-3xl font-bold text-green-300 drop-shadow-lg text-right">
            Best Cuisine from Around the World

          </h2>
          <p className="mt-3 text-black drop-shadow-md text-right">
            Delicious recipes & premium ingredients available every day.
          </p>
        </div>
      </section> */}
    </>
  );
}
export default Fruits; 
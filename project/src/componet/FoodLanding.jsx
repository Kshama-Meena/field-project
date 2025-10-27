// import { useState } from "react";
// import { ShoppingCart, Star, Search } from "lucide-react";

// export default function FoodLanding() {
//   const [quantity, setQuantity] = useState(2);

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-200">
//       <div className="max-w-7xl w-full bg-white rounded-3xl shadow-lg p-8 relative overflow-hidden">

//         {/* Black Circle Background covering Navbar + Right section */}
//         <div className="absolute right-0 top-0 bottom-0 w-[500px] bg-gray-900 rounded-l-full"></div>

//         {/* Navbar */}
//         {/* <div className="flex justify-between items-center mb-10 relative z-10">
//           <h1 className="text-2xl font-bold text-red-500">foco</h1>
//           <nav className="flex gap-8 text-gray-700 font-medium">
//             <a href="#">Home</a>
//             <a href="#">Menu</a>
//             <a href="#">Service</a>
//             <a href="#">Shop</a>
//           </nav>
//           <div className="flex gap-4 items-center">
//             <Search className="text-gray-500" />
//             <button className="px-5 py-2 rounded-full border">sign in</button>
//             <button className="px-5 py-2 rounded-full bg-yellow-400">login</button>
//           </div>
//         </div> */}
//         <div className="flex">
//           {/* Left Section */}
//           <div className="flex-1 pr-10 relative z-10">
//             <h1 className="text-5xl font-bold text-gray-900 leading-tight">
//               Order your <br /> <span className="text-black">favourite Foods</span>
//             </h1>
//             <p className="mt-4 text-gray-500 max-w-md">
//               Fresh and tasty seafood curry sit amet, consectetur adipiscing elit. 
//               Curabitur accumsan auctor pulvinar.
//             </p>

//             {/* Price */}
//             <p className="mt-6 text-gray-500">
//               Total order:{" "}
//               <span className="text-2xl font-bold text-black">$24.30</span>
//             </p>

//             {/* Quantity + Buy */}
//             <div className="mt-4 flex items-center gap-4">
//               <div className="flex items-center border rounded-lg px-4 py-2 gap-2">
//                 <button
//                   onClick={() => setQuantity(Math.max(1, quantity - 1))}
//                   className="text-lg font-bold"
//                 >
//                   -
//                 </button>
//                 <span>{quantity}</span>
//                 <button
//                   onClick={() => setQuantity(quantity + 1)}
//                   className="text-lg font-bold"
//                 >
//                   +
//                 </button>
//               </div>
//               <button className="bg-black text-white px-6 py-3 rounded-full flex items-center gap-2">
//                 Buy Now <ShoppingCart size={18} />
//               </button>
//             </div>

//             {/* Food Options */}
//             <div className="mt-12 flex gap-8">
//               <div className="flex flex-col items-center">
//                 <img
//                   src="https://cdn-icons-png.flaticon.com/512/3075/3075977.png"
//                   alt="burger"
//                   className="w-16 h-16"
//                 />
//                 <p>Burger</p>
//                 <span className="text-green-600 font-bold">$3.25</span>
//               </div>

//               <div className="flex flex-col items-center">
//                 <img
//                   src="https://cdn-icons-png.flaticon.com/512/1046/1046784.png"
//                   alt="cake"
//                   className="w-16 h-16"
//                 />
//                 <p>Cake</p>
//                 <span className="text-green-600 font-bold">$2.25</span>
//               </div>

//               <div className="flex flex-col items-center">
//                 <img
//                   src="https://cdn-icons-png.flaticon.com/512/590/590836.png"
//                   alt="salad"
//                   className="w-16 h-16"
//                 />
//                 <p>Salad</p>
//                 <span className="text-green-600 font-bold">$5.25</span>
//               </div>
//             </div>
//           </div>

//           {/* Right Section */}
//           <div className="flex-1 flex items-center justify-center relative z-10">
//             {/* Salad Image */}
//             <img
//               src="https://i.ibb.co/h1GpFpt/salad-bowl.jpg" 
//               alt="food"
//               className="w-[420px] h-[420px] object-cover rounded-full shadow-xl"
//             />

//             {/* Badge */}
//             <div className="absolute bottom-14 right-16 bg-orange-500 text-white px-6 py-3 rounded-2xl flex flex-col items-center shadow-md">
//               <p className="text-lg font-semibold">Salad</p>
//               <div className="flex items-center gap-1">
//                 <Star size={16} fill="yellow" className="text-yellow-400" />
//                 <span>4.7</span>
//               </div>
//               <span className="text-sm">10–18 mins</span>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
 function FoodLanding() {
  const [quantity, setQuantity] = useState(2); 

  return (
    // 🎨 Change 1: Main background ko light/off-white kiya, aur z-index diya
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-6 relative overflow-hidden z-0">
      
      
      <div 
        className="absolute inset-0 bg-repeat opacity-30" 
        style={{ 
          backgroundImage: "url('/leaf-pattern.png')", // <== Replace with your actual leaf pattern image path
          backgroundColor: '#f9f9f9', // Very light background to make it clean
        }}
      ></div>

      <div className="max-w-7xl w-full p-12 flex flex-col md:flex-row items-center gap-12 relative overflow-hidden z-10 bg-white/80 rounded-3xl shadow-xl">
        
        {/* Left Content */}
        <div className="flex-1 z-10">
          {/* 🎨 Change 3: Text color ko dark kiya (black/gray-900) */}
          <h1 className="text-5xl font-extrabold text-gray-900 leading-tight lg:text-7xl">
            Order your <br />
            <span className="text-orange-500">favourite Fruits</span>
            <span className="text-green-600 block lg:inline-block ml-0 lg:ml-4">Fresh Vegetable</span>
          </h1>
          <p className="mt-4 text-gray-600 max-w-md text-lg">
            Fresh and organic fruits & vegetables delivered straight to your door.  
            <span className="font-semibold text-gray-800"> Healthy, Tasty, and Super Fresh!</span>
          </p>

          {/* CTA Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <button className="flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-full shadow-lg text-white bg-orange-500 hover:bg-orange-600 transition duration-300 transform hover:scale-105">
              Order Now
              <ShoppingCart className="ml-2 w-5 h-5" />
            </button>
            <button className="flex items-center justify-center px-8 py-3 border border-gray-300 text-base font-medium rounded-full text-gray-700 hover:bg-gray-100 transition duration-300">
              Explore Menu
              <ChevronRight className="ml-2 w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Right Image Section */}
        <div className="flex-1 relative mt-10 md:mt-0 flex justify-center items-center">

          {/* 🟢 Change 4: Circular Background ko light green/olive se light brown/orange kiya jaisa ki image mein hai */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-orange-100 rounded-full z-0 opacity-80"></div>

          {/* Image */}
          <img
            src="hero.png" 
            alt="Fresh Bowl"
            // Border color ko light kiya
            className="object-cover w-full max-w-sm md:max-w-lg mx-auto rounded-3xl z-10 transform rotate-1 transition-transform duration-500 border-8 border-white" 
            style={{ boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.2)' }} 
          />

          {/* 🌟 Rating Badge */}
          <div className="absolute -bottom-6 md:bottom-10 right-0 md:right-10 bg-white p-4 rounded-xl shadow-2xl flex items-center gap-3 z-20 transform rotate-2 hover:rotate-0 transition-transform duration-300">
            <div className="flex items-center gap-1 text-yellow-500">
              <Star className="w-5 h-5 fill-yellow-500" />
              <Star className="w-5 h-5 fill-yellow-500" />
              <Star className="w-5 h-5 fill-yellow-500" />
              <Star className="w-5 h-5 fill-yellow-500" />
              <Star className="w-5 h-5 text-gray-300" /> 
            </div>
            <div>
              <p className="text-xl font-bold text-gray-900">4.5 Stars</p>
              <p className="text-sm text-gray-500">2.5k Reviews</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default function Menu() {


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
    { id: 15, name: "Dragon Fruit", price: "$100.00", image: "Dragon1.jpg" }
  ];
  const products1 = [
    { id: 1, name: "Potato", price: "$110.00", image: "Potato.jpg" },
    { id: 2, name: "Cucumber", price: "$90.00", image: "Cucumber.jpg" },
    { id: 3, name: "Tameto", price: "$50.00", image: "tameto.jpg" },
    { id: 4, name: "Matar", price: "$120.00", image: "Matar.jpg" },
    { id: 5, name: "Stroberi", price: "$99.00", image: "stroberi.jpg" },
    { id: 6, name: "Lady’sFinger", price: "$80.00", image: "Lady’sFinger.jpg" },
    { id: 7, name: "Mango", price: "$130.00", image: "mango.jpg" },
    { id: 8, name: "Grapes", price: "$70.00", image: "grapes1.jpg" },
    { id: 9, name: "Orange", price: "$100.00", image: "o.jpg" },
    { id: 10, name: "Cherry", price: "$140.00", image: "cherry.jpg" },
    { id: 11, name: "Pear", price: "$99.00", image: "Pear.jpg" },
    { id: 12, name: "Custard Apple", price: "$80.00", image: "c1.jpg" },
    { id: 13, name: "watermelon", price: "$130.00", image: "Sandía.jpg" },
    { id: 14, name: " Raspberry", price: "$70.00", image: "Raspberry.jpg" },
    { id: 15, name: "Dragon Fruit", price: "$100.00", image: "Dragon1.jpg" }
  ];
  return (
    <>
       <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6 max-w-6xl mx-auto mt-20">
      {/* Yellow Box */}
      <div className="bg-yellow-400 text-white  shadow-lg p-6 flex flex-col justify-center items-start hover:scale-105 transition-transform">
        <h2 className="text-2xl font-bold mb-2">Fresh & Healthy</h2>
        <p className="mb-4">Shop Now</p>
        <button className="bg-white text-yellow-600 font-semibold px-4 py-2 rounded-full hover:bg-yellow-100">
          Explore
        </button>
      </div>
      {/* Green Box */}
      <div className="bg-green-500 text-white  shadow-lg p-6 flex flex-col justify-center items-start hover:scale-105 transition-transform">
        <h2 className="text-2xl font-bold mb-2">Fresh & Healthy</h2>
        <p className="mb-4">Shop Now</p>
        <button className="bg-white text-green-600 font-semibold px-4 py-2 rounded-full hover:bg-green-100">
          Explore
        </button>
      </div>
      {/* Red Box */}
      <div className="bg-red-500 text-white  shadow-lg p-6 flex flex-col justify-center items-start hover:scale-105 transition-transform">
        <h2 className="text-2xl font-bold mb-2">Fresh Food</h2>
        <p className="mb-4">Shop Now</p>
        <button className="bg-white text-red-600 font-semibold px-4 py-2 rounded-full hover:bg-red-100">
          Explore
        </button>
      </div>
    </div>
  <div className="w-full max-w-8xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-10 p-6">
  {products.map((item) => (
    <div
      key={item.id}
      className="bg-white w-full rounded-xl shadow-md p-8 flex flex-col items-center hover:scale-105 transition-transform mt-10"
    >
      <img
        src={item.image}
        alt={item.name}
        className="w-40 h-40 object-contain mb-4"
      />
      <h3 className="font-semibold text-2xl">{item.name}</h3>
      <p className="text-green-600 font-extrabold text-2xl">{item.price}</p>
      <button className="mt-4 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-400 transition-colors w-full">
        Add to Cart
      </button>
    </div> 
  ))}
</div>

<section className="mx-auto px-6 md:px-12 mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 w-full relative">
  {/* ✅ Left Box - Vegetables & Fruits */}
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

  {/* ✅ Right Box - Cuisine / Offers */}
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
</section>

<div className="w-full max-w-8xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-10 p-6">
  {products1.map((item) => (
    <div
      key={item.id}
      className="bg-white w-full rounded-xl shadow-md p-8 flex flex-col items-center hover:scale-105 transition-transform mt-10"
    >
      <img
        src={item.image}
        alt={item.name}
        className="w-40 h-40 object-contain mb-4"
      />
      <h3 className="font-semibold text-2xl">{item.name}</h3>
      <p className="text-green-600 font-extrabold text-2xl">{item.price}</p>
      <button className="mt-4 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-400 transition-colors w-full">
        Add to Cart
      </button>
    </div> 
  ))}
</div>
 

    </>
   
  );
}

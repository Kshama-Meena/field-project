import { BrowserRouter as Router, Routes, Route, Outlet } from "react-router-dom";
import Navbar from "./componet/Navbar";
import Footer from "./componet/Footer";
import Home from "./componet/Home";
import Menu from "./componet/Menu";
import Services from "./componet/Services";
import Contact from "./componet/Contact";
import Vegetable from "./componet/Vegetable";
import Fruits from "./componet/Fruits";
import Login from "./componet/Login";
import SignUp from "./componet/SignUp";
import Wishlist from "./componet/Wishlist";
import { LikeProvider } from "./componet/LikeContext";
import CartPage from "./componet/CartPage";
import { CartProvider } from "./componet/CartContext";
import { Toaster } from "react-hot-toast";


// ✅ Layout jisme Navbar + Footer dono hain
function MainLayout() {
  return (
    <>
      <Navbar />
      <div className="pt-[30px] md:pt-[8px] min-h-screen bg-gray-50">
        <Outlet />
      </div>
      <Footer />
    </>
  );
}

// ✅ Layout jisme sirf Navbar (Footer nahi)
function NoFooterLayout() {
  return (
    <>
      <Navbar />
      <div className="pt-[30px] md:pt-[8px] min-h-screen bg-gray-50">
        <Outlet />
      </div>
    </>
  );
}

function App() {
  return (
    
    <LikeProvider>
      <CartProvider>
        <Router>
          <Routes>
            {/* ✅ Footer ke sath wale pages */}
            <Route element={<MainLayout />}>
              <Route path="/" element={<Home />} />
              <Route path="/menu" element={<Menu />} />
              <Route path="/vegetables" element={<Vegetable />} />
              <Route path="/fruits" element={<Fruits />} />
              <Route path="/services" element={<Services />} />
              <Route path="/contact" element={<Contact />} />
            </Route>

            {/* 🚫 Footer bina wale pages */}
            <Route element={<NoFooterLayout />}>
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/wishlist" element={<Wishlist />} />
              <Route path="/cart" element={<CartPage />} />
            </Route>
          </Routes>
        </Router>
         <Toaster position="top-center" reverseOrder={false} />
      </CartProvider>
    </LikeProvider>
  );
}

export default App;

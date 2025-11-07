import { BrowserRouter as Router, Routes, Route, useLocation, Outlet } from "react-router-dom";
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
import { AnimatePresence } from "framer-motion";
import PageTransition from "./componet/PageTransition";
import { AuthProvider } from "./componet/AuthContext";
import  UserProfile  from "./componet/UserProfile"// ✅ Import Auth Context
import AddProduct from "./componet/AddProduct";
import AdminLayout from "./componet/AdminLayout";

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

// ✅ Route Transition Wrapper
function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes key={location.pathname} location={location}>
        
        {/* ✅ Footer Pages */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<PageTransition><Home /></PageTransition>} />
          <Route path="/menu" element={<PageTransition><Menu /></PageTransition>} />
          <Route path="/vegetables" element={<PageTransition><Vegetable /></PageTransition>} />
          <Route path="/fruits" element={<PageTransition><Fruits /></PageTransition>} />
          <Route path="/services" element={<PageTransition><Services /></PageTransition>} />
          <Route path="/contact" element={<PageTransition><Contact /></PageTransition>} />
        </Route>

        {/* ❌ Without Footer */}
        <Route element={<NoFooterLayout />}>
          <Route path="/login" element={<PageTransition><Login /></PageTransition>} />
          <Route path="/signup" element={<PageTransition><SignUp /></PageTransition>} />
          <Route path="/wishlist" element={<PageTransition><Wishlist /></PageTransition>} />
          <Route path="/cart" element={<PageTransition><CartPage /></PageTransition>} />
          <Route path="/profile" element={<PageTransition><UserProfile /></PageTransition>} />


        </Route>
<Route path="/add-product" element={<AddProduct />} />
           <Route path="/AdminLayout" element={<AdminLayout />} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <AuthProvider>
    <LikeProvider>
      <CartProvider>
        <Router>
          <AnimatedRoutes />
        </Router>
        <Toaster position="top-center" reverseOrder={false} />
      </CartProvider>
    </LikeProvider>
    </AuthProvider>
  );
}

export default App;

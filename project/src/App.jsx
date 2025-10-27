import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./componet/Navbar";
import Home from "./componet/Home";
import Menu from "./componet/Menu";
import Services from "./componet/Services";
import Contact from "./componet/Contact";
import Vegetable from "./componet/Vegetable";
import Fruits from "./componet/Fruits";
import Login from "./componet/Login";
import SignUp from "./componet/SignUp";
import Footer from "./componet/Footer";
import Wishlist from "./componet/Wishlist";
import { LikeProvider } from "./componet/LikeContext";   // ✅ Import context

function App() {
  return (
    <LikeProvider>
      <Router>
        <Navbar />
     <div className="pt-[30px] md:pt-[8px] min-h-screen bg-gray-50">

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/vegetables" element={<Vegetable />} />
          <Route path="/fruits" element={<Fruits />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/wishlist" element={<Wishlist />} />
        </Routes>
        </div>

        <Footer />
      </Router>
 
    </LikeProvider>
  );
}

// export default App;
// import Menu from "./componet/Menu";
// import AdminLayout from "./componet/AdminLayout";
// function App() {
//   return (
//     <AdminLayout />
//   );
// }

export default App;
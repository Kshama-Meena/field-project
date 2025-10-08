import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./componet/Navbar";
import Home from "./componet/Home";
import Menu from "./componet/Menu";
import Services from "./componet/Services";
import Contact from "./componet/Contact";
import Vegetables from "./componet/Vegetable";
import Fruits from "./componet/Fruits";
import Login from "./componet/Login";      // ✅ Import Login
import SignUp from "./componet/SignUp";    // ✅ Import SignUp

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/vegetable" element={<Vegetables />} />
        <Route path="/fruits" element={<Fruits />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />      {/* ✅ Login Route */}
        <Route path="/signup" element={<SignUp />} />    {/* ✅ SignUp Route */}
      </Routes>
    </Router>
  );
}

export default App;

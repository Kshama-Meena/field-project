// import Navbar from "./componet/Navbar"
// function App(){
//   return(
//     <>
    
//     <Navbar/>
    
//     </>
//   )
// }
// export default App

// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Navbar from "./componet/Navbar"
// import Menu from "./componet/Menu";

// function App() {
//   return (
//     <Router>
//       <Navbar />
//       <Routes>
//         {/* Abhi sirf Menu page ka route rakha hai */}
//         <Route path="/menu" element={<Menu />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;



import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./componet/Navbar";
import Home from "./componet/Home";
import Menu from "./componet/Menu";
import Services from "./componet/Services";
import Contact from "./componet/Contact";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;

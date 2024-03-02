import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Home from './components/Home'
import Nav from "./components/Nav";
// import Cart from "./pages/Cart";
// import { useState } from "react";
// import CartItemCard from "./components/CartItemCard";

function App() {
  
  // const [cart,setCart] = useState([]);

  return (

    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
      {/* <Nav />
      <Routes>
        <Route path="/cart" element={<Cart/>} />
      </Routes>

      <Footer /> */}
    </BrowserRouter>
  );
}

export default App;

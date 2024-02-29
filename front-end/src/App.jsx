import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
// import Home from './components/Home'
import Nav from "./components/Nav";
import Cart from "./pages/Cart";
// import CartItemCard from "./components/CartItemCard";

function App() {
  return (
    <BrowserRouter>
      {/* <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        
      </Routes>
  
      <Footer /> */}
      <Nav />
      <Routes>
        <Route path="/cart" element={<Cart/>} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;

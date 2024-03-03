import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from './components/Footer'
import Home from './components/Home'
import SignUp from './pages/SignUp'
import SignIn from './pages/SignIn'
import Nav from './components/Nav'
import SingleProductDetails from "./components/SingleProductDetails";
import Shop from "./components/Shop";

function App() {
  

  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/sign-up" element={<SignUp/>} />
        <Route path="/sign-in" element={<SignIn/>} /> */}
        <Route path="/product-details/:id" element={<SingleProductDetails/>} />
        <Route path="/shop" element={<Shop/>} />

      </Routes>
      
   
      <Footer />
    </BrowserRouter>
  )
}

export default App;
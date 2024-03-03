import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from './components/Footer'
import Home from './components/Home'
// import SignUp from './pages/SignUp'
// import SignIn from './pages/SignIn'
import Nav from './components/Nav'
<<<<<<< HEAD
import Items from "./pages/Items";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
=======
import SingleProductDetails from "./components/SingleProductDetails";
import Shop from "./components/Shop";
import CheckOut from "./pages/CheckOut";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "./style.css"
>>>>>>> 270467eaf5b26054335d2ac714ff083a2ed3f3aa

function App() {
  

  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/sign-up" element={<SignUp/>} /> */}
        {/* <Route path="/sign-in" element={<SignIn/>} /> */}
        <Route path="/product-details/:id" element={<SingleProductDetails/>} />
        <Route path="/shop" element={<Shop/>} />
        <Route path="/checkout" element={<CheckOut/>} />

      </Routes>
<<<<<<< HEAD
      <Items/>
      <AboutUs/>
      <ContactUs/>
=======
      
>>>>>>> 270467eaf5b26054335d2ac714ff083a2ed3f3aa
   
      <Footer />
    </BrowserRouter>
  )
}

export default App;
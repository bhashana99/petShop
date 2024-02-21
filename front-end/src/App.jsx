import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from './components/Footer'
import Home from './components/Home'
import SignUp from './pages/SignUp'
import Nav from './components/Nav'

function App() {
  

  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-up" element={<SignUp/>} />
      </Routes>
   
      <Footer />
    </BrowserRouter>
  )
}

export default App

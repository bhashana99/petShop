import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from './components/Footer'
import Home from './components/Home'
import Nav from './components/Nav'

function App() {
  

  return (
    <BrowserRouter>
      <Nav />
      <Home />
      <Footer />
    </BrowserRouter>
  )
}

export default App

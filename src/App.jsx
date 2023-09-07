import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./Pages/Home"
import Features from "./Pages/Features"
import Price from './Pages/Price';
import Login from './Pages/Login';
import Drop from './Pages/Drop';
import Contact from './Pages/Contact';
import Navbar from "./Components/Navbar";

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/feature" element={<Features />} />
      <Route path="/price" element={<Price />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/login" element={<Login />} />
      <Route path="/drop" element={<Drop />} />
      <Route path="/side" element={<Navbar />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App

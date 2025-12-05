import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import Navbar from "./components/navbar"; 
import Home from "./components/Home";  
import About from "./components/About";
import Contact from "./components/Contact";  
import Product from "./components/Product";  
import Cart from "./components/Cart";
import Footer from './components/Footer'

export default function App() {
  return (
    <CartProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/product" element={<Product/>} />
          <Route path="/cart" element={<Cart/>} />
        </Routes>
        <Footer/>
      </Router>
    </CartProvider>
  );
}

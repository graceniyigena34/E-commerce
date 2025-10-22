import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar"; 
import Home from "./components/Home";  
import About from "./components/About";
import Contact from "./components/Contact";  
import Footer from './components/Footer'

export default function App() {
  return (
    <Router>
     
        {/* Navbar */}
        <Navbar />

        
          <Routes>
            <Route path="/" element={<Home />} />
            
             <Route path="about" element={<About/>} />
             <Route path="contact" element={<Contact/>} />
          </Routes>
           <Footer/>
      
     
    </Router>
  );
}

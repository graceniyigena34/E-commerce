import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar"; // Make sure file is Navbar.jsx
import Home from "./components/Home";  
import About from "./components/About";   // Make sure file is Home.jsx

export default function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-gray-50">
        {/* Navbar */}
        <Navbar />

        {/* Main Page Content */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            
             <Route path="about" element={<About/>} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

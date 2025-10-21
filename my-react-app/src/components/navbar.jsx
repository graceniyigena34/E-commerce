import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md p-4">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold text-blue-600">ShopEase</div>
        <div className="flex gap-6">
          <Link to="/" className="hover:text-blue-600">Home</Link>
          <Link to="/product" className="hover:text-blue-600">Products</Link>
          <Link to="/about" className="hover:text-blue-600">About</Link>
          <Link to="/contact" className="hover:text-blue-600">Contact</Link>
        </div>
      </div>
    </nav>
  );
}

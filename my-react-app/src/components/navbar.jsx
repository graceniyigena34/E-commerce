import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function Navbar() {
  const { getTotalItems } = useCart();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  return (
    <nav className="bg-white shadow-md p-4 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <div className="text-xl sm:text-2xl font-bold text-blue-600">GraceMart</div>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex gap-4 lg:gap-6 items-center">
          <Link to="/" className="hover:text-blue-600 transition-colors text-sm lg:text-base">Home</Link>
          <Link to="/about" className="hover:text-blue-600 transition-colors text-sm lg:text-base">About</Link>
          <Link to="/product" className="hover:text-blue-600 transition-colors text-sm lg:text-base">Products</Link>
          <Link to="/contact" className="hover:text-blue-600 transition-colors text-sm lg:text-base">Contact</Link>
          <Link to="/cart" className="hover:text-blue-600 relative transition-colors text-sm lg:text-base">
            Cart
            {getTotalItems() > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                {getTotalItems()}
              </span>
            )}
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden flex flex-col space-y-1 p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span className={`block w-6 h-0.5 bg-gray-600 transition-transform ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-gray-600 transition-opacity ${isMenuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-gray-600 transition-transform ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden mt-4 pb-4 border-t border-gray-200">
          <div className="flex flex-col space-y-3 pt-4">
            <Link to="/" className="hover:text-blue-600 transition-colors py-2" onClick={() => setIsMenuOpen(false)}>Home</Link>
            <Link to="/about" className="hover:text-blue-600 transition-colors py-2" onClick={() => setIsMenuOpen(false)}>About</Link>
            <Link to="/product" className="hover:text-blue-600 transition-colors py-2" onClick={() => setIsMenuOpen(false)}>Products</Link>
            <Link to="/contact" className="hover:text-blue-600 transition-colors py-2" onClick={() => setIsMenuOpen(false)}>Contact</Link>
            <Link to="/cart" className="hover:text-blue-600 relative transition-colors py-2 flex items-center" onClick={() => setIsMenuOpen(false)}>
              Cart
              {getTotalItems() > 0 && (
                <span className="ml-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {getTotalItems()}
                </span>
              )}
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}

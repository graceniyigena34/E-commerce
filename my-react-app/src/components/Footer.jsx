import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-200 py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {/* Company Info */}
          <div className="text-center sm:text-left">
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">GraceMart</h2>
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
              Your one-stop online store for quality electronics, accessories, and tech essentials at affordable prices.
            </p>
            <div className="flex justify-center sm:justify-start space-x-4 mt-4">
              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors cursor-pointer">
                <span className="text-white text-sm font-bold">f</span>
              </div>
              <div className="w-8 h-8 bg-blue-400 rounded-full flex items-center justify-center hover:bg-blue-500 transition-colors cursor-pointer">
                <span className="text-white text-sm font-bold">t</span>
              </div>
              <div className="w-8 h-8 bg-pink-600 rounded-full flex items-center justify-center hover:bg-pink-700 transition-colors cursor-pointer">
                <span className="text-white text-sm font-bold">i</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-center sm:text-left">
            <h2 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4">Quick Links</h2>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/product" className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/cart" className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base">
                  Shopping Cart
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="text-center sm:text-left sm:col-span-2 lg:col-span-1">
            <h2 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4">Contact Info</h2>
            <div className="space-y-2 sm:space-y-3">
              <p className="text-gray-400 text-sm sm:text-base flex items-center justify-center sm:justify-start">
                <span className="mr-2">📧</span>
                support@gracemart.com
              </p>
              <p className="text-gray-400 text-sm sm:text-base flex items-center justify-center sm:justify-start">
                <span className="mr-2">📞</span>
                +250 788 123 456
              </p>
              <p className="text-gray-400 text-sm sm:text-base flex items-center justify-center sm:justify-start">
                <span className="mr-2">📍</span>
                KG 123 Street, Kigali, Rwanda
              </p>
              <p className="text-gray-400 text-sm sm:text-base flex items-center justify-center sm:justify-start">
                <span className="mr-2">🕰️</span>
                Mon - Fri: 9AM - 6PM
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-gray-700">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <p className="text-gray-500 text-xs sm:text-sm text-center sm:text-left">
              &copy; {new Date().getFullYear()} GraceMart. All rights reserved.
            </p>
            <div className="flex space-x-4 sm:space-x-6 text-xs sm:text-sm">
              <a href="#" className="text-gray-500 hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-500 hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-500 hover:text-white transition-colors">Return Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

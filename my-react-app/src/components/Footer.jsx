import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-200 py-8 px-6 sm:px-12 md:px-24">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
       
        <div>
          <h2 className="text-xl font-bold text-white mb-4">GraceMart</h2>
          <p className="text-gray-400 text-sm">
            Your one-stop online store for fashion, electronics, and home essentials.
          </p>
        </div>

      
        <div>
          <h2 className="text-xl font-bold text-white mb-4">Quick Links</h2>
          <ul className="space-y-2">
            <li>
              <a href="/" className="hover:text-indigo-500 transition">
                Home
              </a>
            </li>
            <li>
              <a href="/about" className="hover:text-indigo-500 transition">
                About
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-indigo-500 transition">
                Contact
              </a>
            </li>
            <li>
              <a href="/products" className="hover:text-indigo-500 transition">
                Products
              </a>
            </li>
          </ul>
        </div>

        
        <div>
          <h2 className="text-xl font-bold text-white mb-4">Contact</h2>
          <p className="text-gray-400 text-sm">
            Email: support@gracemart.com
          </p>
          <p className="text-gray-400 text-sm">Phone: +250 788 123 456</p>
          <p className="text-gray-400 text-sm">KG 123 Street, Kigali, Rwanda</p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-8 text-center text-gray-500 text-sm border-t border-gray-700 pt-4">
        &copy; {new Date().getFullYear()} GraceMart. All rights reserved.
      </div>
    </footer>
  );
}

import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  const featuredProducts = [
    { id: 1, name: "Wireless Headphones", price: "$59", image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=300&fit=crop" },
    { id: 2, name: "Smart Watch", price: "$129", image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=300&fit=crop" },
    { id: 3, name: "Gaming Mouse", price: "$39", image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400&h=300&fit=crop" },
    { id: 4, name: "Bluetooth Speaker", price: "$79", image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&h=300&fit=crop" },
  ];

  return (
    <div className="flex flex-col items-center justify-center w-full">
      {/* Hero Section */}
      <section className="w-full bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 text-white py-16 sm:py-20 lg:py-24 text-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold mb-4 sm:mb-6 leading-tight">
            Welcome to <span className="text-yellow-300">GraceMart</span> 🛍️
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed opacity-90">
            Discover amazing deals on quality electronics, accessories, and tech essentials. Shop with confidence!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              to="/product"
              className="bg-white text-blue-600 px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold text-base sm:text-lg hover:bg-gray-100 hover:scale-105 shadow-lg transition-all duration-300 w-full sm:w-auto"
            >
              Shop Now
            </Link>
            <Link
              to="/about"
              className="border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold text-base sm:text-lg hover:bg-white hover:text-blue-600 transition-all duration-300 w-full sm:w-auto"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full bg-gray-50 py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <div className="text-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="text-3xl sm:text-4xl mb-4">🚚</div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2 text-gray-800">Free Shipping</h3>
              <p className="text-gray-600 text-sm sm:text-base">Free delivery on orders over $50</p>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="text-3xl sm:text-4xl mb-4">🔒</div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2 text-gray-800">Secure Payment</h3>
              <p className="text-gray-600 text-sm sm:text-base">100% secure payment processing</p>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow sm:col-span-2 lg:col-span-1">
              <div className="text-3xl sm:text-4xl mb-4">🎧</div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2 text-gray-800">24/7 Support</h3>
              <p className="text-gray-600 text-sm sm:text-base">Round-the-clock customer service</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 w-full bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-gray-800">
              Featured Products
            </h2>
            <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto">
              Check out our most popular items, carefully selected for quality and value
            </p>
          </div>
          
          <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {featuredProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white border border-gray-200 rounded-xl sm:rounded-2xl p-4 sm:p-6 flex flex-col items-center shadow-md hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 group"
              >
                <div className="relative overflow-hidden rounded-lg sm:rounded-xl mb-4 w-full">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-40 sm:h-48 md:h-56 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-base sm:text-lg lg:text-xl font-semibold mb-2 text-center text-gray-800 line-clamp-2">
                  {product.name}
                </h3>
                <p className="text-blue-600 font-bold text-lg sm:text-xl lg:text-2xl mb-4">{product.price}</p>
                <Link 
                  to="/product" 
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium w-full text-center"
                >
                  View Details
                </Link>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-8 sm:mt-12">
            <Link
              to="/product"
              className="inline-block bg-blue-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold text-base sm:text-lg hover:bg-blue-700 transition-colors shadow-lg"
            >
              View All Products
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="w-full bg-gray-800 text-white py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">Stay Updated</h2>
          <p className="text-gray-300 text-base sm:text-lg mb-6 sm:mb-8">
            Subscribe to our newsletter for exclusive deals and new product announcements
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

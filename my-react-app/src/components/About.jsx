import React from "react";

export default function About() {
  return (
    <div className="bg-gray-50 min-h-screen py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <section className="text-center mb-8 sm:mb-12 lg:mb-16">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-4 sm:mb-6">
          About GraceMart
        </h1>
        <p className="text-gray-600 max-w-3xl mx-auto text-base sm:text-lg lg:text-xl leading-relaxed">
          Welcome to <span className="font-semibold text-blue-600">GraceMart</span> — 
          your trusted online destination for premium electronics, accessories, and tech essentials. 
          We're passionate about delivering exceptional products at unbeatable prices, 
          backed by outstanding customer service and lightning-fast delivery.
        </p>
      </section>

      {/* Mission Section */}
      <section className="bg-white p-6 sm:p-8 lg:p-10 rounded-xl sm:rounded-2xl shadow-md max-w-4xl mx-auto mb-8 sm:mb-12 lg:mb-16">
        <div className="text-center mb-6">
          <div className="text-4xl sm:text-5xl lg:text-6xl mb-4">🎯</div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-800 mb-4">
            Our Mission
          </h2>
        </div>
        <p className="text-gray-600 text-base sm:text-lg lg:text-xl leading-relaxed text-center">
          Our mission is to revolutionize online shopping by making it simple, reliable, and enjoyable. 
          We strive to connect people with the products they love while ensuring uncompromising quality, 
          affordability, and trust in every single transaction.
        </p>
      </section>

      {/* Why Choose Us Section */}
      <section className="max-w-6xl mx-auto">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-800 text-center mb-8 sm:mb-12">
          Why Choose GraceMart?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6 sm:gap-8">
          <div className="bg-white p-6 sm:p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 text-center">
            <div className="text-3xl sm:text-4xl mb-4">✨</div>
            <h3 className="font-bold text-blue-600 mb-3 text-lg sm:text-xl">Quality Products</h3>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              Every item is carefully curated and tested to ensure exceptional durability, style, and performance.
            </p>
          </div>
          
          <div className="bg-white p-6 sm:p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 text-center">
            <div className="text-3xl sm:text-4xl mb-4">💰</div>
            <h3 className="font-bold text-blue-600 mb-3 text-lg sm:text-xl">Best Prices</h3>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              Enjoy competitive pricing and exclusive deals without ever compromising on quality. Maximum value guaranteed!
            </p>
          </div>
          
          <div className="bg-white p-6 sm:p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 text-center">
            <div className="text-3xl sm:text-4xl mb-4">🚀</div>
            <h3 className="font-bold text-blue-600 mb-3 text-lg sm:text-xl">Fast Delivery</h3>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              Lightning-fast and secure delivery service that brings your orders straight to your doorstep in record time.
            </p>
          </div>
          
          <div className="bg-white p-6 sm:p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 text-center sm:col-span-2 lg:col-span-2 xl:col-span-1">
            <div className="text-3xl sm:text-4xl mb-4">🎧</div>
            <h3 className="font-bold text-blue-600 mb-3 text-lg sm:text-xl">24/7 Support</h3>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              Our dedicated support team is available around the clock to assist with any questions or concerns.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-blue-600 text-white py-12 sm:py-16 px-6 sm:px-8 rounded-2xl max-w-6xl mx-auto mt-12 sm:mt-16">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 text-center">
          <div>
            <div className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2">10K+</div>
            <div className="text-blue-100 text-sm sm:text-base">Happy Customers</div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2">500+</div>
            <div className="text-blue-100 text-sm sm:text-base">Products</div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2">99%</div>
            <div className="text-blue-100 text-sm sm:text-base">Satisfaction Rate</div>
          </div>
          <div className="col-span-2 lg:col-span-1">
            <div className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2">24/7</div>
            <div className="text-blue-100 text-sm sm:text-base">Customer Support</div>
          </div>
        </div>
      </section>
    </div>
  );
}
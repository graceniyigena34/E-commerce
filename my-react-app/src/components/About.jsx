import React from "react";

export default function About() {
  return (
    <div className="bg-gray-50 min-h-screen py-12 px-6 md:px-20">
  
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">About Us</h1>
        <p className="text-gray-600 max-w-2xl mx-auto text-lg">
          Welcome to <span className="font-semibold text-indigo-600">GraceMart</span> — 
          your one-stop online store for high-quality fashion, electronics, and home essentials. 
          We’re passionate about offering top products at affordable prices, 
          with excellent customer service and fast delivery.
        </p>
      </section>

    
      <section className="bg-white p-8 rounded-2xl shadow-md max-w-3xl mx-auto mb-12">
        <h2 className="text-2xl font-semibold text-gray-800 mb-3">Our Mission</h2>
        <p className="text-gray-600 text-lg">
          Our mission is to make online shopping simple, reliable, and enjoyable. 
          We aim to connect people with the products they love while ensuring quality, 
          affordability, and trust in every transaction.
        </p>
      </section>

   
      <section className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold text-gray-800 text-center mb-6">Why Choose Us</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
            <h3 className="font-bold text-indigo-600 mb-2">Quality Products</h3>
            <p className="text-gray-600">
              We carefully select every item to ensure durability, style, and performance.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
            <h3 className="font-bold text-indigo-600 mb-2">Affordable Prices</h3>
            <p className="text-gray-600">
              Get the best deals without compromising on quality. Value for every coin!
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
            <h3 className="font-bold text-indigo-600 mb-2">Fast Delivery</h3>
            <p className="text-gray-600">
              Enjoy quick and secure delivery right to your doorstep.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
            <h3 className="font-bold text-indigo-600 mb-2">Excellent Support</h3>
            <p className="text-gray-600">
              Our friendly team is here 24/7 to assist with your questions and orders.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

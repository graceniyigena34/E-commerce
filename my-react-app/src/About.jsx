import React from "react";

export default function About() {
  return (
    <div className="px-6 md:px-12 py-12 max-w-5xl mx-auto">
      <section className="mb-12 text-center">
        <h1 className="text-4xl font-bold mb-4">About ShopEase</h1>
        <p className="text-lg text-gray-700">
          ShopEase is your one-stop destination for quality products across Electronics, Fashion, and Accessories.
          Our mission is to provide our customers with the best shopping experience — convenient, reliable, and affordable.
        </p>
      </section>
      <section>
        <h2 className="text-3xl font-semibold mb-6 text-center">Why Choose Us</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition-all duration-300">
            <h3 className="text-xl font-bold mb-2">High Quality Products</h3>
            <p className="text-gray-600">We carefully select our products to ensure top-notch quality and durability.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition-all duration-300">
            <h3 className="text-xl font-bold mb-2">Affordable Prices</h3>
            <p className="text-gray-600">Get the best deals without compromising on quality.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition-all duration-300">
            <h3 className="text-xl font-bold mb-2">Fast & Reliable Shipping</h3>
            <p className="text-gray-600">We ensure your orders are delivered quickly and safely.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition-all duration-300">
            <h3 className="text-xl font-bold mb-2">Excellent Customer Service</h3>
            <p className="text-gray-600">Our support team is always ready to help with any questions or concerns.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

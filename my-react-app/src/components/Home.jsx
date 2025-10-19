import React from "react";
import { Link } from "react-router-dom"; // Import Link

function Home() {
  return (
    <section className="flex flex-col items-center justify-center text-center py-16 bg-gray-50">
      <h1 className="text-5xl font-bold text-gray-800 mb-4">
        Welcome to ShopSmart 🛍️
      </h1>
      <p className="text-lg text-gray-600 mb-8 max-w-lg">
        Your one-stop shop for quality products at the best prices.
      </p>
      <Link
        to="/products"
        className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
      >
        Start Shopping
      </Link>
    </section>
  );
}

export default Home;

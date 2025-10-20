// src/components/Home.jsx
import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  const products = [
    { id: 1, name: "Leather Bag", price: "$79", image: "https://images.unsplash.com/photo-1473188588951-666fce8e7c68?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGVhdGhlciUyMGJhZ3xlbnwwfHwwfHx8MA%3D%3D&fm=jpg&q=60&w=3000" },
    { id: 2, name: "Smart Watch", price: "$129", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRN93Rj9WUiK3G8T8ifCzsbpKC2esoiSPQA9A&s" },
    { id: 3, name: "Headphones", price: "$59", image: "https://media.istockphoto.com/id/1372906882/photo/modern-blue-wireless-headphones-isolated-on-white-background-with-clipping-path.jpg?s=612x612&w=0&k=20&c=0k-2JFElEQ0QTvXsgtLx3i2JotQo_Eb8aEwyN-BOZjA=" },
    { id: 4, name: "Sneakers", price: "$99", image: "https://media.istockphoto.com/id/1688015574/photo/white-sneaker-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=gz8bGn7h_eaF4uJGJjdZYYhJDrrigHAygo2Vi8tZjH8=" },
    { id: 5, name: "Sunglasses", price: "$49", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqnql-l_C7j9TPCfjB1zxms3zROQmJLg7iQw&s" },
    { id: 6, name: "Backpack", price: "$69", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKdMm1EShTe-Kxm_WvdhvHeA0g-c0iaR4-4A&s" },
    { id: 7, name: "Perfume", price: "$39", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKBuj0Vc283kv4g_OFORX1RFcPdHgmKAiLaQ&s" },
    { id: 8, name: "Laptop", price: "$899", image: "https://images.pexels.com/photos/40185/mac-freelancer-macintosh-macbook-40185.jpeg?cs=srgb&dl=pexels-pixabay-40185.jpg&fm=jpg" },
  ];

  return (
    <div className="flex flex-col items-center justify-center w-full">
      {/* Hero Section */}
      <section className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-20 sm:py-24 text-center px-6 md:px-12">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6">
          Welcome to ShopSmart 🛍️
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl mb-8 max-w-3xl mx-auto">
          Your one-stop shop for quality products at the best prices.
        </p>
        <Link
          to="/products"
          className="bg-white text-blue-600 px-8 py-4 sm:px-10 sm:py-5 rounded-lg font-semibold text-lg sm:text-xl hover:bg-gray-100 shadow-lg transition-all duration-300"
        >
          Shop Now
        </Link>
      </section>

      {/* Featured Products Section */}
      <section className="py-12 sm:py-16 px-6 md:px-12 w-full max-w-7xl">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-12 text-center">
          Featured Products
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="border rounded-2xl p-4 sm:p-6 flex flex-col items-center bg-white shadow hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300"
            >
              <img
                src={product.image}
                alt={product.name}
                className="mb-4 w-full h-48 sm:h-56 md:h-60 object-cover rounded-xl"
              />
              <h3 className="text-lg sm:text-xl font-semibold mb-2 text-center text-gray-800">{product.name}</h3>
              <p className="text-blue-600 font-bold text-center text-lg sm:text-xl">{product.price}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

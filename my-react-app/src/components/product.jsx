// src/components/ProductCard.jsx
import React from "react";

export default function ProductCard({ name, price, image, onAddToCart }) {
  return (
    <div className="border rounded-2xl p-4 sm:p-6 flex flex-col items-center bg-white shadow hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
      <img
        src={image}
        alt={name}
        className="mb-4 w-full h-48 sm:h-56 md:h-60 object-cover rounded-xl"
      />
      <h3 className="text-lg sm:text-xl font-semibold mb-2 text-center text-gray-800">{name}</h3>
      <p className="text-blue-600 font-bold text-center text-lg sm:text-xl">{price}</p>
      <button
        onClick={() => onAddToCart(name)}
        className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-all duration-300"
      >
        Add to Cart
      </button>
    </div>
  );
}

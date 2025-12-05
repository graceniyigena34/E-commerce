import React from "react";
import { useCart } from "../context/CartContext";

function ProductCard({ product }) {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(product);
  };

  return (
    <div className="bg-white rounded-xl sm:rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex flex-col h-full">
      <div className="relative overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-40 xs:h-44 sm:h-48 md:h-52 lg:h-56 object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
      
      <div className="p-3 sm:p-4 flex flex-col justify-between flex-grow">
        <div className="flex-grow">
          <h3 className="text-sm sm:text-base lg:text-lg font-semibold text-gray-800 mb-2 line-clamp-2">
            {product.name}
          </h3>
          <p className="text-blue-600 font-bold text-lg sm:text-xl mb-3">
            ${product.price}
          </p>
        </div>

        <button 
          onClick={handleAddToCart}
          className="w-full bg-blue-600 text-white py-2 sm:py-3 px-4 rounded-lg sm:rounded-xl hover:bg-blue-700 active:bg-blue-800 transition-colors duration-200 font-medium text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ProductCard;


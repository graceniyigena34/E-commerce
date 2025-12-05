import React from 'react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

export default function Cart() {
  const { items, removeFromCart, updateQuantity, getTotalPrice } = useCart();

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 py-8 sm:py-12 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-6 sm:mb-8">Your Cart</h1>
          <div className="bg-white rounded-xl p-8 sm:p-12 shadow-md">
            <div className="text-6xl sm:text-8xl mb-4">🛒</div>
            <p className="text-gray-600 text-lg sm:text-xl mb-6">Your cart is empty</p>
            <Link 
              to="/product" 
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
            >
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8 sm:py-12 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-6 sm:mb-8 text-center">Your Cart</h1>
        
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <div className="p-4 sm:p-6">
            {items.map((item) => (
              <div key={item.id} className="flex flex-col sm:flex-row sm:items-center justify-between border-b py-4 sm:py-6 last:border-b-0 gap-4">
                <div className="flex items-center space-x-3 sm:space-x-4">
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-16 h-16 sm:w-20 sm:h-20 object-cover rounded-lg flex-shrink-0" 
                  />
                  <div className="flex-grow min-w-0">
                    <h3 className="font-semibold text-gray-800 text-sm sm:text-base truncate">{item.name}</h3>
                    <p className="text-blue-600 font-bold text-lg sm:text-xl">${item.price}</p>
                    <p className="text-gray-500 text-sm sm:hidden">Subtotal: ${(item.price * item.quantity).toFixed(2)}</p>
                  </div>
                </div>
                
                <div className="flex items-center justify-between sm:justify-end sm:space-x-6">
                  <div className="flex items-center space-x-2 sm:space-x-3">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="bg-gray-200 hover:bg-gray-300 w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center transition-colors font-bold text-gray-700"
                    >
                      -
                    </button>
                    <span className="px-3 sm:px-4 py-1 bg-gray-100 rounded-lg font-medium min-w-[3rem] text-center">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="bg-gray-200 hover:bg-gray-300 w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center transition-colors font-bold text-gray-700"
                    >
                      +
                    </button>
                  </div>
                  
                  <div className="flex flex-col items-end space-y-2">
                    <p className="hidden sm:block text-gray-600 font-medium">${(item.price * item.quantity).toFixed(2)}</p>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-red-600 hover:text-red-800 text-sm font-medium transition-colors"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="bg-gray-50 p-4 sm:p-6">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
              <div className="text-center sm:text-left">
                <p className="text-gray-600 text-sm">Total Items: {items.reduce((total, item) => total + item.quantity, 0)}</p>
                <p className="text-2xl sm:text-3xl font-bold text-gray-800">Total: ${getTotalPrice().toFixed(2)}</p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
                <Link 
                  to="/product" 
                  className="px-6 py-3 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors font-medium text-center"
                >
                  Continue Shopping
                </Link>
                <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium">
                  Checkout
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
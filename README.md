## E-Commerce Web App (React + TypeScript)

A modern and responsive E-commerce frontend application built using React, TypeScript, and Vite.
This project includes product browsing, product details, cart management, and a clean UI — all running on static data.

## Features and Functionality

Product listing page

Product details page

Add to Cart / Remove from Cart

Update quantity in cart

Search and filter products

Client-side routing with React Router

Shopping cart stored in local state or Context API

Responsive layout for mobile & desktop

Static mock product data (no backend required)

## Tech Stack

React 18

TypeScript

Vite

React Router v6

Context API / Redux (optional)

Tailwind CSS or custom CSS

ESLint + Prettier (optional)

## Installation & Setup
1. Clone the repository
git clone : https://github.com/graceniyigena34/E-commerce
cd my-react-app
2. Install packages
npm install
3. Start the development server
npm run dev
4. Build for production
npm run build
 Example Product Data (products.ts)
export const products = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: 79.99,
    image: "/images/headphones.jpg",
    description: "High-quality wireless Bluetooth headphones."
  },
  {
    id: 2,
    name: "Smart Watch",
    price: 129.99,
    image: "/images/smartwatch.jpg",
    description: "Fitness tracking and notification features."
  }
];

 Cart Logic (Context API Example)
interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

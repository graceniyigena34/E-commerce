import React from "react";

export default function Contact() {
  return (
    <div className="flex flex-col items-center p-6 bg-gray-50 min-h-screen">
      <h1 className="text-4xl font-bold mb-6 text-gray-800">Contact Us</h1>

      {/* Company Details */}
      <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-md mb-8">
        <h2 className="text-2xl font-semibold mb-4">Company Details</h2>
        <p className="mb-2"><strong>Email:</strong> info@company.com</p>
        <p className="mb-2"><strong>Phone:</strong> +1 (123) 456-7890</p>
        <p className="mb-2"><strong>Address:</strong> 123 Main Street, City, Country</p>
      </div>

      {/* Feedback Form */}
      <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-md">
        <h2 className="text-2xl font-semibold mb-4">Send us a Message</h2>
        <form className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Your Name"
            className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <textarea
            placeholder="Your Message"
            rows="5"
            className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
          <button
            type="button"
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}



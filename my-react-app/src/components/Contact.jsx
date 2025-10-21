import React from "react";

export default function Contact() {
  return (
    <div className="bg-gray-50 min-h-screen py-12 px-6 md:px-20">
      {/* Page Title */}
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Contact Us</h1>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          Have questions, feedback, or need support? We’d love to hear from you!
          Reach out using the details below or fill out the contact form.
        </p>
      </section>

      {/* Contact Information */}
      <section className="bg-white rounded-2xl shadow-md p-8 max-w-3xl mx-auto mb-12">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
          Company Contact Details
        </h2>
        <div className="space-y-4 text-gray-700 text-lg">
          <p>
            <span className="font-semibold text-indigo-600">Email:</span>{" "}
            support@gracemart.com
          </p>
          <p>
            <span className="font-semibold text-indigo-600">Phone:</span>{" "}
            +250 788 123 456
          </p>
          <p>
            <span className="font-semibold text-indigo-600">Address:</span>{" "}
            KG 123 Street, Kigali, Rwanda
          </p>
        </div>
      </section>

      {/* Feedback Form */}
      <section className="bg-white rounded-2xl shadow-md p-8 max-w-3xl mx-auto">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
          Send Us a Message
        </h2>
        <form className="space-y-6">
          <div>
            <label className="block text-gray-700 mb-2 font-medium">
              Name
            </label>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-2 font-medium">
              Email
            </label>
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-2 font-medium">
              Message
            </label>
            <textarea
              placeholder="Write your message here..."
              rows="5"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-600 text-white font-semibold py-3 rounded-lg hover:bg-indigo-700 transition"
          >
            Send Message
          </button>
        </form>
      </section>
    </div>
  );
}

import React from "react";

export default function Contact() {
  return (
    <div className="bg-gray-50 min-h-screen py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8">
      {/* Page Title */}
      <section className="text-center mb-8 sm:mb-12 lg:mb-16">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-4 sm:mb-6">
          Contact Us
        </h1>
        <p className="text-gray-600 text-base sm:text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed">
          Have questions, feedback, or need support? We'd love to hear from you!
          Reach out using the details below or fill out our contact form.
        </p>
      </section>

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
        {/* Contact Information */}
        <section className="bg-white rounded-xl sm:rounded-2xl shadow-md p-6 sm:p-8 lg:p-10">
          <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-6 sm:mb-8 text-center lg:text-left">
            Get In Touch
          </h2>
          <div className="space-y-6 sm:space-y-8">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <span className="text-blue-600 text-xl">📧</span>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 text-lg mb-1">Email</h3>
                <p className="text-gray-600">support@gracemart.com</p>
                <p className="text-sm text-gray-500 mt-1">We'll respond within 24 hours</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <span className="text-blue-600 text-xl">📞</span>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 text-lg mb-1">Phone</h3>
                <p className="text-gray-600">+250 788 123 456</p>
                <p className="text-sm text-gray-500 mt-1">Mon - Fri: 9AM - 6PM</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <span className="text-blue-600 text-xl">📍</span>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 text-lg mb-1">Address</h3>
                <p className="text-gray-600">KG 123 Street</p>
                <p className="text-gray-600">Kigali, Rwanda</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <span className="text-blue-600 text-xl">🕒</span>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 text-lg mb-1">Business Hours</h3>
                <p className="text-gray-600">Monday - Friday: 9:00 AM - 6:00 PM</p>
                <p className="text-gray-600">Saturday: 10:00 AM - 4:00 PM</p>
                <p className="text-gray-600">Sunday: Closed</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="bg-white rounded-xl sm:rounded-2xl shadow-md p-6 sm:p-8 lg:p-10">
          <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-6 sm:mb-8 text-center lg:text-left">
            Send Us a Message
          </h2>
          <form className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              <div>
                <label className="block text-gray-700 mb-2 font-medium text-sm sm:text-base">
                  First Name *
                </label>
                <input
                  type="text"
                  placeholder="John"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors text-sm sm:text-base"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2 font-medium text-sm sm:text-base">
                  Last Name *
                </label>
                <input
                  type="text"
                  placeholder="Doe"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors text-sm sm:text-base"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-gray-700 mb-2 font-medium text-sm sm:text-base">
                Email Address *
              </label>
              <input
                type="email"
                placeholder="john.doe@example.com"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors text-sm sm:text-base"
                required
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-2 font-medium text-sm sm:text-base">
                Subject *
              </label>
              <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors text-sm sm:text-base">
                <option value="">Select a subject</option>
                <option value="general">General Inquiry</option>
                <option value="support">Technical Support</option>
                <option value="order">Order Issue</option>
                <option value="return">Return/Refund</option>
                <option value="partnership">Partnership</option>
              </select>
            </div>

            <div>
              <label className="block text-gray-700 mb-2 font-medium text-sm sm:text-base">
                Message *
              </label>
              <textarea
                placeholder="Please describe your inquiry in detail..."
                rows="5"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-vertical text-sm sm:text-base"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white font-semibold py-3 sm:py-4 rounded-lg hover:bg-blue-700 active:bg-blue-800 transition-colors duration-200 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Send Message
            </button>
          </form>
        </section>
      </div>
    </div>
  );
}
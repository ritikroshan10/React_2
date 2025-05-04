import React from "react";

const Contact = () => {
  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-[1200px] mx-auto px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900">Contact Us</h2>
          <p className="text-gray-600 mt-2">We’d love to hear from you! Fill out the form or reach out directly.</p>
        </div>

        <div className="grid grid-cols-2 gap-10">
          <form className="bg-white p-8 rounded-2xl shadow-lg space-y-6">
            <div>
              <label className="block text-gray-700 font-medium mb-1">Name</label>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-1">Email</label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-1">Message</label>
              <textarea
                rows="5"
                placeholder="Your message..."
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-indigo-600 text-white font-semibold py-3 rounded-lg hover:bg-indigo-700 transition"
            >
              Send Message
            </button>
          </form>

          <div className="p-8 bg-white rounded-2xl shadow-lg space-y-6">
            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Email</h4>
              <p className="text-gray-600">contact@yourcompany.com</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Phone</h4>
              <p className="text-gray-600">+1 (555) 123-4567</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Address</h4>
              <p className="text-gray-600">123 Innovation Street, Suite 100<br />San Francisco, CA 94110</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Working Hours</h4>
              <p className="text-gray-600">Mon - Fri : 9:00 AM – 6:00 PM</p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

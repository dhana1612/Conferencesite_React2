import React, { useState } from "react";

export default function ContactUsForm() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 3000);
      setFormData({ name: "", email: "", message: "" });
    }
  };

  return (
    <div className="flex justify-center items-center py-20 bg-gray-100 ">
      <div className="bg-white/60 backdrop-blur-xl shadow-2xl rounded-3xl p-8 max-w-lg w-full border border-gray-200">
        <h2 className="text-center text-3xl md:text-4xl font-bold px-2 md:pe-10 mb-12 text-indigo-900">Contact Us</h2>

        {submitted && (
          <div className="bg-green-500 text-white text-center py-2 rounded-md mb-4">
            Thank you! Your message has been sent.
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-gray-700 font-medium">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 mt-2 rounded-xl border border-gray-300 bg-white shadow-sm text-gray-700 focus:ring-2 focus:ring-blue-400 transition"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 mt-2 rounded-xl border border-gray-300 bg-white shadow-sm text-gray-700 focus:ring-2 focus:ring-blue-400 transition"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="4"
              className="w-full px-4 py-2 mt-2 rounded-xl border border-gray-300 bg-white shadow-sm text-gray-700 focus:ring-2 focus:ring-blue-400 transition resize-none"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold py-3 rounded-xl hover:from-blue-700 hover:to-indigo-700 transition duration-300 shadow-md"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}

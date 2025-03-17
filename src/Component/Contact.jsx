import React, { useState } from "react";
import { motion } from "framer-motion";
import { MailOpen, PhoneCall, MapPin, Send } from "lucide-react";
import MapSection from "./MapSection";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
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
    <>
      <section className="py-25 bg-gradient-to-b from-indigo-100 to-purple-200" id="contact">
      <div className="container mx-auto px-3 md:px-12 max-w-8xl">
        <motion.h2
          className="text-center text-4xl font-extrabold mb-12 text-indigo-900 tracking-wide"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          📩 Get in Touch
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left: Contact Details */}
          <motion.div
            className="bg-white shadow-xl rounded-2xl p-8 space-y-6 border border-gray-200"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-semibold mb-4 text-indigo-900">📞 Contact Information</h3>
            {[
              { icon: MailOpen, title: "Email", info: "contact@iccnds2024.org" },
              { icon: PhoneCall, title: "Phone", info: "+91 123 456 7890" },
              { icon: MapPin, title: "Location", info: "Chennai, Tamil Nadu, India" },
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-4 p-4 rounded-lg border border-gray-300 hover:bg-gray-100 transition duration-300">
                <item.icon className="w-8 h-8 text-indigo-600" />
                <div>
                  <h4 className="text-2xl font-semibold text-indigo-900">{item.title}</h4>
                  <p className="text-gray-700 text-xl">{item.info}</p>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Right: Contact Form */}
          <motion.div
            className="bg-white shadow-xl p-8 rounded-2xl border border-gray-200"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            {submitted && (
              <motion.div
                className="bg-green-500 text-white text-center py-3 rounded-lg mb-6 shadow-lg"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                ✅ Your message has been received. We will contact you soon.
              </motion.div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="text-xl">
                <label className="block text-lg font-medium text-indigo-900">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 mt-2 border border-gray-300 rounded-lg bg-gray-100 text-gray-900 outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              <div>
                <label className="block text-lg font-medium text-indigo-900">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 mt-2 border border-gray-300 rounded-lg bg-gray-100 text-gray-900 outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              <div>
                <label className="block text-lg font-medium text-indigo-900">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-4 py-3 mt-2 border border-gray-300 rounded-lg bg-gray-100 text-gray-900 outline-none focus:ring-2 focus:ring-indigo-500"
                ></textarea>
              </div>

              <motion.button
                type="submit"
                className="w-full bg-indigo-600 text-white font-semibold py-3 rounded-lg flex items-center justify-center gap-2 hover:bg-indigo-500 transition duration-300 shadow-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Send className="w-5 h-5" /> Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
      </section>
    </>
  );
}

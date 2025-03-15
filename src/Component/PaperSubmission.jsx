import React, { useState } from "react";
import { Upload, CheckCircle } from "lucide-react";

export default function PaperSubmission() {
  const [formData, setFormData] = useState({
    title: "",
    authorName: "",
    phone: "",
    email: "",
    institution: "",
    category: "Academicians",
    file: null,
  });

  const [filePreview, setFilePreview] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData({ ...formData, file });
      setFilePreview(file.name);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormData({
      title: "",
      authorName: "",
      phone: "",
      email: "",
      institution: "",
      category: "Academicians",
      file: null,
    });
    setFilePreview(null);
  };

  return (
    <section className="py-16 bg-gray-100" id="paper-submission">
      <div className="container mx-auto px-16">
        <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">Paper Submission</h2>

        <div className="grid md:grid-cols-3 gap-12">
          {/* Payment Instructions - 30% width */}
          <div className="md:col-span-1 bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Payment Instructions</h3>
            <ul className="space-y-3 text-gray-700 text-xl">
              <li className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-green-600" />
                <span>Conference Fee: $50 for Students, $100 for Professionals</span>
              </li>
              <li className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-green-600" />
                <span>Accepted Payments: Credit Card, PayPal, Bank Transfer</span>
              </li>
              <li className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-green-600" />
                <span>Complete payment before submission</span>
              </li>
              <li className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-green-600" />
                <span>Upload payment receipt along with paper</span>
              </li>
            </ul>
          </div>

          {/* Paper Submission Form - 70% width */}
          <div className="md:col-span-2 bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Submit Your Paper</h3>

            {submitted && (
              <div className="bg-green-600 text-white text-center py-2 rounded-md mb-4">
                ✅ Your paper has been successfully submitted!
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="title"
                  placeholder="Paper Title"
                  value={formData.title}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border rounded-md focus:ring-2 focus:ring-indigo-500 outline-none transition"
                />

                <input
                  type="text"
                  name="authorName"
                  placeholder="Author Full Name"
                  value={formData.authorName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border rounded-md focus:ring-2 focus:ring-indigo-500 outline-none transition"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="tel"
                  name="phone"
                  placeholder="Mobile Number"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border rounded-md focus:ring-2 focus:ring-indigo-500 outline-none transition"
                />

                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border rounded-md focus:ring-2 focus:ring-indigo-500 outline-none transition"
                />
              </div>

              <input
                type="text"
                name="institution"
                placeholder="Institution Name"
                value={formData.institution}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border rounded-md focus:ring-2 focus:ring-indigo-500 outline-none transition"
              />

              <select
                name="category"
                value={formData.category}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border rounded-md focus:ring-2 focus:ring-indigo-500 outline-none transition"
              >
                <option value="Academicians">Academicians</option>
                <option value="Researchers">Researchers</option>
                <option value="Students">Students</option>
                <option value="Industry Professionals">Industry Professionals</option>
              </select>

              {/* File Upload */}
              <div className="border border-dashed border-gray-400 rounded-md p-4 text-center hover:bg-gray-100 transition">
                <label className="cursor-pointer">
                  <Upload className="w-8 h-8 mx-auto text-indigo-600" />
                  <p className="text-gray-600">Click or Drag to Upload Paper</p>
                  <input
                    type="file"
                    accept=".pdf,.doc,.docx"
                    onChange={handleFileChange}
                    required
                    className="hidden"
                  />
                </label>
                {filePreview && <p className="text-sm text-indigo-700 mt-2">{filePreview}</p>}
              </div>

              <button
                type="submit"
                className="w-full bg-indigo-600 text-white font-semibold py-3 rounded-md hover:bg-indigo-500 transition duration-300"
              >
                Submit Paper
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

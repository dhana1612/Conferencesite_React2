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
    <section className="py-20 bg-[#EDE7F6]" id="paper-submission">
      <div className="container mx-auto px-4 md:px-12">
        <h2 className="text-5xl font-extrabold text-gray-900 text-center mb-12 tracking-tight">
          Paper Submission
        </h2>

        <div className="grid md:grid-cols-3 gap-12">
          {/* Payment Instructions */}
          <div className="md:col-span-1 bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
            <h3 className="text-2xl font-semibold text-[#673AB7] mb-4">Payment Instructions</h3>
            <ul className="space-y-4 text-gray-700 text-xl">
              {[
                "Conference Fee: $50 for Students, $100 for Professionals",
                "Accepted Payments: Credit Card, PayPal, Bank Transfer",
                "Complete payment before submission",
                "Upload payment receipt along with paper",
              ].map((text, index) => (
                <li key={index} className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                  <span>{text}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Paper Submission Form */}
          <div className="md:col-span-2 bg-white p-10 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
            <h3 className="text-3xl font-semibold text-[#3F51B5] mb-6">Submit Your Paper</h3>

            {submitted && (
              <div className="bg-green-600 text-white text-center py-2 rounded-lg mb-4 text-lg">
                ✅ Your paper has been successfully submitted!
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6 text-lg">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  type="text"
                  name="title"
                  placeholder="Paper Title"
                  value={formData.title}
                  onChange={handleChange}
                  required
                  className="w-full px-5 py-3 border rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none transition bg-gray-50"
                />

                <input
                  type="text"
                  name="authorName"
                  placeholder="Author Full Name"
                  value={formData.authorName}
                  onChange={handleChange}
                  required
                  className="w-full px-5 py-3 border rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none transition bg-gray-50"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  type="tel"
                  name="phone"
                  placeholder="Mobile Number"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-5 py-3 border rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none transition bg-gray-50"
                />

                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-5 py-3 border rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none transition bg-gray-50"
                />
              </div>

              <input
                type="text"
                name="institution"
                placeholder="Institution Name"
                value={formData.institution}
                onChange={handleChange}
                required
                className="w-full px-5 py-3 border rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none transition bg-gray-50"
              />

              <select
                name="category"
                value={formData.category}
                onChange={handleChange}
                required
                className="w-full px-5 py-3 border rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none transition bg-white"
              >
                <option value="Academicians">Academicians</option>
                <option value="Researchers">Researchers</option>
                <option value="Students">Students</option>
                <option value="Industry Professionals">Industry Professionals</option>
              </select>

              {/* File Upload */}
              <div className="border border-dashed border-gray-400 rounded-lg p-6 text-center hover:bg-gray-100 transition">
                <label className="cursor-pointer flex flex-col items-center">
                  <Upload className="w-10 h-10 text-indigo-600 mb-2" />
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
                className="w-full bg-indigo-600 text-white font-semibold py-4 rounded-lg hover:bg-indigo-500 transition duration-300 text-xl"
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

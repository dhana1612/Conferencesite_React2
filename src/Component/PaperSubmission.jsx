import React, { useState } from "react";
import axios from "axios";
import { Upload, CheckCircle } from "lucide-react";

export default function PaperSubmission() {
  const [formData, setFormData] = useState({
    Papertitle: '',
    AuthorFullName: '',
    AuthorMobile: '',
    AuthorEmail: '',
    AuthorInstitution: '',
    AuthorCategory: '',
    PaperFile: null,
  });

  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'file' ? files[0] : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const submissionData = new FormData();

    for (const key in formData) {
      submissionData.append(key, formData[key]);
    }

    try {
      const response = await axios.post('https://iccnds.com/iccnds_paper_Submission.php', submissionData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      setMessage(response.data.message);
    } catch (error) {
      setMessage('Submission failed. Please try again.');
    }
  };

  return (
    <section className="py-25 bg-[#EDE7F6]" id="paper-submission">
      <div className="container mx-auto px-4 md:px-12">
        <h2 className="text-center text-2xl md:text-3xl lg:text-4xl font-extrabold mb-12 text-indigo-900 tracking-wide">
          Paper Submission
        </h2>

        <div className="grid xl:grid-cols-2 gap-12">
          {/* Payment Instructions */}
          <div className="bg-white p-10 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
            <h3 className="text-2xl font-semibold text-[#673AB7] mb-4">Payment Instructions</h3>
            <ul className="space-y-6 text-gray-700 text-xl">
              {["Conference Fee: $50 for Students, $100 for Professionals",
                "Accepted Payments: Credit Card, PayPal, Bank Transfer",
                "Complete payment before submission",
                "Upload payment receipt along with paper",].map((text, index) => (
                <li key={index} className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                  <span>{text}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Paper Submission Form */}
          <div className="bg-white p-10 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
            <h3 className="text-2xl font-semibold text-[#3F51B5] mb-6">Submit Your Paper</h3>
            {message && <div className="alert alert-info">{message}</div>}

            <form onSubmit={handleSubmit} className="space-y-6 text-lg">

              <input 
                type="text" 
                name="Papertitle" 
                placeholder="Paper Title" 
                value={formData.Papertitle} 
                onChange={handleChange} 
                required
                className="w-full px-5 py-3 border rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none transition bg-gray-50" 
              />
              {/* Paper Title and Author Full Name */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                <input 
                  type="text" 
                  name="AuthorFullName" 
                  placeholder="Author Full Name" 
                  value={formData.AuthorFullName} 
                  onChange={handleChange} 
                  required
                  className="w-full px-5 py-3 border rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none transition bg-gray-50" 
                />

                <input 
                  type="text" 
                  name="AuthorMobile" 
                  placeholder="Mobile Number" 
                  value={formData.AuthorMobile} 
                  onChange={handleChange} 
                  required
                  className="w-full px-5 py-3 border rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none transition bg-gray-50" 
                />    
              </div>

              {/* Mobile Number and Email Address */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">


                <input 
                  type="email" 
                  name="AuthorEmail" 
                  placeholder="Email Address" 
                  value={formData.AuthorEmail} 
                  onChange={handleChange} 
                  required
                  className="w-full px-5 py-3 border rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none transition bg-gray-50" 
                />


              <input 
                type="text" 
                name="AuthorInstitution" 
                placeholder="Institution Name" 
                value={formData.AuthorInstitution} 
                onChange={handleChange} 
                required
                className="w-full px-5 py-3 border rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none transition bg-gray-50" 
              />
              </div>

              {/* Institution Name */}


              {/* Category Dropdown */}
              <select 
                name="AuthorCategory" 
                value={formData.AuthorCategory} 
                onChange={handleChange} 
                required
                className="w-full px-5 py-3 border rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none transition bg-white"
              >
                <option value="">-- Select Category --</option>
                <option value="Academicians">Academicians</option>
                <option value="Researchers">Researchers</option>
                <option value="Students">Students</option>
                <option value="Industry Professionals">Industry Professionals</option>
              </select>

              {/* File Upload Section */}
              <div className="border border-dashed border-gray-400 rounded-lg p-6 text-center hover:bg-gray-100 transition">
                <label className="cursor-pointer flex flex-col items-center">
                  <Upload className="w-10 h-10 text-indigo-600 mb-2" />
                  <p className="text-gray-600">Click or Drag to Upload Paper</p>
                  <input 
                    type="file" 
                    name="PaperFile"
                    accept=".pdf,.doc,.docx"
                    onChange={handleChange}
                    required 
                    className="hidden" 
                  />
                </label>
              </div>

              {/* Submit Button */}
              <button 
                type="submit" 
                className="w-full bg-indigo-600 text-white font-semibold py-4 rounded-lg hover:bg-indigo-500 transition duration-300 text-xl cursor-pointer "
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

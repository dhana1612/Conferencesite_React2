import React from "react";
import { Facebook, Twitter, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-indigo-900 to-purple-900 text-white py-12 ">
      <div className="container mx-auto px-16">
        <div className="grid md:grid-cols-4 gap-25">
          {/* Left Section - Conference Info */}
          <div>
            <h2 className="text-3xl font-bold tracking-wide">ICCNDS 2024</h2>
            <p className="text-gray-300 mt-3 text-2xl">
              International Conference on Computing, Networking, and Data Science
            </p>
          </div>

          {/* Middle Section - Navigation */}
          <div className="space-y-3">
            <h3 className="text-2xl font-semibold">Quick Links</h3>
            {["About", "Call for Papers", "Important Dates", "Speakers", "Contact"].map((item, index) => (
              <a 
                key={index} 
                href={`#${item.toLowerCase().replace(/\s+/g, '-')}`} 
                className="text-gray-300 hover:text-white transition-all duration-300 block text-xl"
              >
                {item}
              </a>
            ))}
          </div>

            {/* Middle Section - Navigation */}
          <div className="space-y-3">
            <h3 className="text-2xl font-semibold">Quick Links</h3>
            {["About", "Call for Papers", "Important Dates", "Speakers", "Contact"].map((item, index) => (
              <a 
                key={index} 
                href={`#${item.toLowerCase().replace(/\s+/g, '-')}`} 
                className="text-gray-300 hover:text-white transition-all duration-300 block text-xl"
              >
                {item}
              </a>
            ))}
          </div>

          {/* Right Section - Contact & Socials */}
          <div>
            <h3 className="text-2xl font-semibold">Get in Touch</h3>
            <p className="text-gray-300 mt-2 text-xl">contact@iccnds2024.org</p>
            <p className="text-gray-300 text-xl">+91 123 456 7890</p>

            {/* Social Icons */}
            <div className="flex space-x-4 mt-5">
              {[Facebook, Twitter, Linkedin, Mail].map((Icon, index) => (
                <a 
                  key={index} 
                  href="#" 
                  className="w-12 h-12 flex items-center justify-center bg-white/10 rounded-full transition transform hover:scale-110 hover:bg-purple-600 shadow-lg hover:shadow-purple-700"
                >
                  <Icon className="w-6 h-6 text-white" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="border-t border-gray-600 mt-12 pt-6 text-center text-gray-300 text-xl">
          © {new Date().getFullYear()} ICCNDS 2024. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}

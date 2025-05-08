import React from "react";
import { Facebook, Twitter, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-indigo-900 to-purple-900 text-white py-12 pb-0" id="contact">
      <div className="container mx-auto px-16">
        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-10 md:gap-25">
          {/* Left Section - Conference Info */}
          <div>
            <h2 className="text-xl lg:text-2xl font-bold tracking-wide  text-purple-500">ICCNDS 2025</h2>
            <p className="text-gray-300 mt-3 text-xl lg:text-xl">
              International Conference on Computing, Networking, and Data Science
            </p>
          </div>

          {/* Middle Section - Navigation */}
          <div className="space-y-3">
            <h3 className="text-xl lg:text-2xl font-semibold  text-purple-500">General</h3>
            {[
              { name: "About the Conference", id: "about" },
              { name: "Scope of Conference", id: "scope" },
              { name: "Technical Committee", id: "organizingCommittee" },
              { name: "Editoral Board", id: "Editorial" },
            ].map((item, index) => (
              <a
                key={index}
                href={`#${item.id}`}
                className="text-gray-300 hover:text-white transition-all duration-300 block text-lg"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Middle Section - Navigation */}
          <div className="space-y-3">
            <h3 className="text-xl lg:text-2xl font-semibold  text-purple-500">Conference Information</h3>
            {[
              { name: "Conference Tracks", id: "ConferenceTracks" },
              { name: "Registration Details", id: "important-dates" },
              { name: "Paper Submission", id: "paper-submission" },
            ].map((item, index) => (
              <a
                key={index}
                href={`#${item.id}`}
                className="text-gray-300 hover:text-white transition-all duration-300 block text-lg"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Right Section - Contact & Socials */}
          <div>
            <h3 className="text-xl md:text-2xl font-semibold text-purple-500">Get in Touch</h3>
            <p className="text-gray-300 mt-2 text-lg md:text-lg">Chennai</p>
            <p className="text-gray-300 mt-2 text-lg md:text-lg">iccnds2025@.org</p>
            <p className="text-gray-300 text-lg mt-2 md:text-lg">+91 123 456 7890</p>
            

            {/* Social Icons */}
            {/* <div className="flex space-x-4 mt-5">
              {[Facebook, Twitter, Linkedin, Mail].map((Icon, index) => (
                <a 
                  key={index} 
                  href="#" 
                  className="w-12 h-12 flex items-center justify-center bg-white/10 rounded-full transition transform hover:scale-110 hover:bg-purple-600 shadow-lg hover:shadow-purple-700"
                >
                  <Icon className="w-6 h-6 text-white" />
                </a>
              ))}
            </div> */}
          </div>
        </div>

        {/* Copyright Section */}
        <div className="border-t border-gray-600 mt-12 py-6 text-center text-gray-300 text-lg lg:text-xl">
          <a 
            href="https://www.iccnds2025.org" 
            target="" 
            rel="noopener noreferrer" 
            className="hover:text-white transition-all duration-300"
          >
            © {new Date().getFullYear()} ICCNDS. All Rights Reserved.
          </a>
        </div>
      </div>
    </footer>
  );
}

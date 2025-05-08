import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false);
  const [authorDropdownOpen, setAuthorDropdownOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const observer = new IntersectionObserver(
      (entries) => {
        let found = false;
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
            found = true;
          }
        });

        if (!found) setActiveSection("home");
      },
      { threshold: 0.6 }
    );

    sections.forEach((section) => observer.observe(section));

    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  return (
    <nav
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-indigo-900/90 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center h-23">
          {/* Logo */}
          <a href="/" className="flex items-center space-x-3">
            <img
              src="\images\logo1.png"
              alt="ICCNDS 2025 Logo"
              className="h-23 w-auto"
            />
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-10">
            <a
              href="/"
              className={`text-2xl font-medium transition duration-300 ${
                activeSection === "home" ? "text-yellow-400" : "text-white/80 hover:text-white"
              }`}
            >
              Home
            </a>
            <div className="relative group">
              <button
                className={`text-2xl font-medium transition duration-300 flex items-center space-x-2 ${
                  ["about", "scope", "organizingCommittee", "Editorial"].includes(activeSection)
                    ? "text-yellow-400"
                    : "text-white/80 hover:text-white"
                }`}
              >
                <span>About Us</span>
                <span className="text-sm">▼</span>
              </button>
              <div className="absolute hidden group-hover:block bg-indigo-900/95 shadow-lg rounded-md mt-2 mb-0 whitespace-nowrap">
                <a
                  href="#about"
                  className={`block px-4 py-2 ${
                    activeSection === "about" ? "bg-yellow-400 text-black" : "text-white hover:bg-indigo-700"
                  }`}
                >
                  About the Conference
                </a>
                <a
                  href="#scope"
                  className={`block px-4 py-2 ${
                    activeSection === "scope" ? "bg-yellow-400 text-black" : "text-white hover:bg-indigo-700"
                  }`}
                >
                  Scope of Conference
                </a>
                <a
                  href="#organizingCommittee"
                  className={`block px-4 py-2 ${
                    activeSection === "organizingCommittee" ? "bg-yellow-400 text-black" : "text-white hover:bg-indigo-700"
                  }`}
                >
                  Technical Committee
                </a>
                <a
                  href="#Editorial"
                  className={`block px-4 py-2 ${
                    activeSection === "Editorial" ? "bg-yellow-400 text-black" : "text-white hover:bg-indigo-700"
                  }`}
                >
                  Editorial Board
                </a>
              </div>
            </div>
            <div className="relative group">
              <button
                className={`text-2xl font-medium transition duration-300 flex items-center space-x-2 ${
                  ["ConferenceTracks", "important-dates", "paper-submission"].includes(activeSection)
                    ? "text-yellow-400"
                    : "text-white/80 hover:text-white"
                }`}
              >
                <span>Author's Desk</span>
                <span className="text-sm">▼</span>
              </button>
              <div className="absolute hidden group-hover:block bg-indigo-900/95 shadow-lg rounded-md mt-2 mb-0 whitespace-nowrap">
                <a
                  href="#ConferenceTracks"
                  className={`block px-4 py-2 ${
                    activeSection === "ConferenceTracks" ? "bg-yellow-400 text-black" : "text-white hover:bg-indigo-700"
                  }`}
                >
                  Conference Tracks
                </a>
                <a
                  href="#important-dates"
                  className={`block px-4 py-2 ${
                    activeSection === "important-dates" ? "bg-yellow-400 text-black" : "text-white hover:bg-indigo-700"
                  }`}
                >
                  Key Dates
                </a>
                <a
                  href="#paper-submission"
                  className={`block px-4 py-2 ${
                    activeSection === "paper-submission" ? "bg-yellow-400 text-black" : "text-white hover:bg-indigo-700"
                  }`}
                >
                  Paper Submission
                </a>
              </div>
            </div>
            <a
              href="#KeyInvitees"
              className={`text-2xl font-medium transition duration-300 ${
                activeSection === "KeyInvitees" ? "text-yellow-400" : "text-white/80 hover:text-white"
              }`}
            >
              Key Invitees
            </a>
            <a
              href="#contact"
              className={`text-2xl font-medium transition duration-300 ${
                activeSection === "contact" ? "text-yellow-400" : "text-white/80 hover:text-white"
              }`}
            >
              Contact Us
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-white focus:outline-none" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="fixed top-0 right-0 h-screen w-64 bg-indigo-900/95 text-white shadow-lg md:hidden">
          <button className="absolute top-5 right-5 text-white" onClick={() => setMenuOpen(false)}>
            <X size={32} />
          </button>

          <div className="flex flex-col items-start mt-16 space-y-6 pl-4">
            <a
              href="/"
              className={`text-lg font-medium transition duration-300 ${
                activeSection === "home" ? "text-yellow-400" : "text-white/90 hover:text-white"
              }`}
              onClick={() => setMenuOpen(false)}
            >
              Home
            </a>

            {/* About Us in Mobile */}
            <div className="text-lg font-medium text-white/90 hover:text-white">
              <button
                className="w-full text-left flex items-center space-x-2"
                onClick={() => setAboutDropdownOpen(!aboutDropdownOpen)}
              >
                <span>About Us</span>
                <span className="text-sm">{aboutDropdownOpen ? "▲" : "▼"}</span>
              </button>
              {aboutDropdownOpen && (
                <div className="pl-4 whitespace-nowrap">
                  <a
                    href="#about"
                    className={`block py-1 ${
                      activeSection === "about" ? "text-yellow-400" : "text-white/90 hover:text-white"
                    }`}
                  >
                    About the Conference
                  </a>
                  <a
                    href="#scope"
                    className={`block py-1 ${
                      activeSection === "scope" ? "text-yellow-400" : "text-white/90 hover:text-white"
                    }`}
                  >
                    Scope of Conference
                  </a>
                  <a
                    href="#organizingCommittee"
                    className={`block py-1 ${
                      activeSection === "organizingCommittee" ? "text-yellow-400" : "text-white/90 hover:text-white"
                    }`}
                  >
                    Technical Committee
                  </a>
                  <a
                    href="#Editorial"
                    className={`block py-1 ${
                      activeSection === "Editorial" ? "text-yellow-400" : "text-white/90 hover:text-white"
                    }`}
                  >
                    Editorial Board
                  </a>
                </div>
              )}
            </div>

            {/* Author's Desk in Mobile */}
            <div className="text-lg font-medium text-white/90 hover:text-white">
              <button
                className="w-full text-left flex items-center space-x-2"
                onClick={() => setAuthorDropdownOpen(!authorDropdownOpen)}
              >
                <span>Author's Desk</span>
                <span className="text-sm">{authorDropdownOpen ? "▲" : "▼"}</span>
              </button>
              {authorDropdownOpen && (
                <div className="pl-4 whitespace-nowrap">
                  <a
                    href="#ConferenceTracks"
                    className={`block py-1 ${
                      activeSection === "ConferenceTracks" ? "text-yellow-400" : "text-white/90 hover:text-white"
                    }`}
                  >
                    Conference Tracks
                  </a>
                  <a
                    href="#important-dates"
                    className={`block py-1 ${
                      activeSection === "important-dates" ? "text-yellow-400" : "text-white/90 hover:text-white"
                    }`}
                  >
                    Key Dates
                  </a>
                  <a
                    href="#paper-submission"
                    className={`block py-1 ${
                      activeSection === "paper-submission" ? "text-yellow-400" : "text-white/90 hover:text-white"
                    }`}
                  >
                    Paper Submission
                  </a>
                </div>
              )}
            </div>

            <a
              href="#KeyInvitees"
              className={`text-lg font-medium transition duration-300 ${
                activeSection === "KeyInvitees" ? "text-yellow-400" : "text-white/90 hover:text-white"
              }`}
              onClick={() => setMenuOpen(false)}
            >
              Key Invitees
            </a>
            <a
              href="#contact"
              className={`text-lg font-medium transition duration-300 ${
                activeSection === "contact" ? "text-yellow-400" : "text-white/90 hover:text-white"
              }`}
              onClick={() => setMenuOpen(false)}
            >
              Contact Us
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

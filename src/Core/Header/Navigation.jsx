import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
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
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <a href="/" className="flex items-center space-x-3">
            <img
              src="/logo.png" // Change this to your logo's actual path
              alt="ICCNDS 2025 Logo"
              className="h-12 w-auto" // Adjust size as needed
            />
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-4">
            {["home", "about", "speakers", "Author's Desk", "contact"].map((id) => (
              <a
                key={id}
                href={id === "home" ? "/" : `#${id}`}
                className={`text-2xl font-medium transition duration-300 ${
                  activeSection === id ? "text-yellow-400" : "text-white/80 hover:text-white"
                }`}
              >
                {id.replace("-", " ").replace(/\b\w/g, (l) => l.toUpperCase())}
              </a>
            ))}
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

          <div className="flex flex-col items-center mt-16 space-y-6">
            {["home", "about", "speakers", "Author's Desk", "contact"].map((id) => (
              <a
                key={id}
                href={id === "home" ? "/" : `#${id}`}
                className={`text-lg font-medium transition duration-300 ${
                  activeSection === id ? "text-yellow-400" : "text-white/90 hover:text-white"
                }`}
                onClick={() => setMenuOpen(false)}
              >
                {id.replace("-", " ").replace(/\b\w/g, (l) => l.toUpperCase())}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}

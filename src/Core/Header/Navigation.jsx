import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
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
          <div className="text-2xl font-extrabold text-white tracking-wide">
            ICCNDS <span className="text-purple-300">2024</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            {["Home","About", "Call for Papers", "Important Dates", "Speakers", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                className="text-2xl font-medium text-white/80 hover:text-white transition duration-300"
              >
                {item}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu (Slide-In) */}
      <div
        className={`fixed top-0 right-0 h-screen w-64 bg-indigo-900/95 text-white shadow-lg transform ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out md:hidden`}
      >
        <button
          className="absolute top-5 right-5 text-white"
          onClick={() => setMenuOpen(false)}
        >
          <X size={32} />
        </button>

        <div className="flex flex-col items-center mt-16 space-y-6">
          {["Home","About", "Call for Papers", "Important Dates", "Speakers", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
              className="text-lg font-medium text-white/90 hover:text-white transition duration-300"
              onClick={() => setMenuOpen(false)}
            >
              {item}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}

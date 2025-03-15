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
            <a href="#" className="text-2xl font-medium text-white/80 hover:text-white transition duration-300">Home</a>
            <a href="#about" className="text-2xl font-medium text-white/80 hover:text-white transition duration-300">About</a>
            <a href="#call-for-papers" className="text-2xl font-medium text-white/80 hover:text-white transition duration-300">Call for Papers</a>
            <a href="#important-dates" className="text-2xl font-medium text-white/80 hover:text-white transition duration-300">Important Dates</a>
            <a href="#speakers" className="text-2xl font-medium text-white/80 hover:text-white transition duration-300">Speakers</a>
            <a href="#contact" className="text-2xl font-medium text-white/80 hover:text-white transition duration-300">Contact</a>
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
            <a href="#" className="text-lg font-medium text-white/90 hover:text-white transition duration-300">Home</a>
            <a href="#about" className="text-lg font-medium text-white/90 hover:text-white transition duration-300" onClick={() => setMenuOpen(false)}>About</a>
            <a href="#call-for-papers" className="text-lg font-medium text-white/90 hover:text-white transition duration-300" onClick={() => setMenuOpen(false)}>Call for Papers</a>
            <a href="#important-dates" className="text-lg font-medium text-white/90 hover:text-white transition duration-300" onClick={() => setMenuOpen(false)}>Important Dates</a>
            <a href="#speakers" className="text-lg font-medium text-white/90 hover:text-white transition duration-300" onClick={() => setMenuOpen(false)}>Speakers</a>
            <a href="#contact" className="text-lg font-medium text-white/90 hover:text-white transition duration-300" onClick={() => setMenuOpen(false)}>Contact</a>
          </div>
        </div>
      )}
    </nav>
  );
}

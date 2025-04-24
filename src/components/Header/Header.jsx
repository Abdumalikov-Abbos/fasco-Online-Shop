import React, { useState } from "react";
import Button from "../../Ui/Button";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="pt-[52px] px-4 mx-auto max-w-fasco-container">
      <div className="flex justify-between items-center">
        <h3 className="text-4xl sm:text-5xl volkhov-bold">FASCO</h3>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-8 lg:gap-12 text-base lg:text-lg items-center">
          <a href="#home" className="link">Home</a>
          <a href="#deals" className="link">Deals</a>
          <a href="#new-arrivals" className="link">New Arrivals</a> {/* Updated */}
          <a href="#packages" className="link">Packages</a>
          <a href="#signin" className="link">Sign in</a>
          <a href="#"><Button title="Sign Up" /></a>
        </nav>

        <button className="md:hidden text-3xl text-midNight" onClick={toggleMenu}>
          {isMenuOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden mt-6 flex flex-col items-center gap-4 bg-white py-6 shadow-md rounded-lg">
          <a href="#home" className="link text-lg">Home</a>
          <a href="#deals" className="link text-lg">Deals</a>
          <a href="#new-arrivals" className="link text-lg">New Arrivals</a> {/* Updated */}
          <a href="#packages" className="link text-lg">Packages</a>
          <a href="#signin" className="link text-lg">Sign in</a>
          <a href="#" className="w-full px-4"><Button title="Sign Up" /></a>
        </div>
      )}
    </header>
  );
}

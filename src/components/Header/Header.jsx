// import React, { useState } from "react";
// import Button from "../../Ui/Button";

// export default function Header() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   return (
//     <div className="pt-[52px] mx-auto max-w-fasco-container">
//       <div className="flex justify-between items-center">
//         {/* Brand Name */}
//         <div>
//           <h3 className="text-5xl volkhov-bold">FASCO</h3>
//         </div>

//         {/* Desktop Navigation */}
//         <nav className="hidden md:flex gap-12 text-lg items-center">
//           <a href="/" className="link">Home</a>
//           <a href="/" className="link">Deals</a>
//           <a href="/" className="link">New Arrivals</a>
//           <a href="/" className="link">Packages</a>
//           <a href="/" className="link">Sign in</a>
//           <a href="/"><Button title="Sign Up" /></a>
//         </nav>

//         {/* Mobile Navigation */}
//         <button className="md:hidden text-2xl" onClick={toggleMenu}>
//           &#9776;
//         </button>
//       </div>

//       {/* Mobile Menu Dropdown */}
//       {isMenuOpen && (
//         <div className="md:hidden flex flex-col items-center mt-4 space-y-4">
//           <a href="/" className="link">Home</a>
//           <a href="/" className="link">Deals</a>
//           <a href="/" className="link">New Arrivals</a>
//           <a href="/" className="link">Packages</a>
//           <a href="/" className="link">Sign in</a>
//           <a href="/"><Button title="Sign Up" /></a>
//         </div>
//       )}
//     </div>
//   );
// }


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
        {/* Brand Name */}
        <div>
          <h3 className="text-4xl sm:text-5xl volkhov-bold">FASCO</h3>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-8 lg:gap-12 text-base lg:text-lg items-center">
          <a href="/" className="link">Home</a>
          <a href="/" className="link">Deals</a>
          <a href="/" className="link">New Arrivals</a>
          <a href="/" className="link">Packages</a>
          <a href="/" className="link">Sign in</a>
          <a href="/"><Button title="Sign Up" /></a>
        </nav>

        {/* Hamburger Icon (Mobile) */}
        <button className="md:hidden text-3xl text-midNight" onClick={toggleMenu}>
          {isMenuOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden mt-6 flex flex-col items-center gap-4 bg-white py-6 shadow-md rounded-lg transition-all duration-300 ease-in-out">
          <a href="/" className="link text-lg">Home</a>
          <a href="/" className="link text-lg">Deals</a>
          <a href="/" className="link text-lg">New Arrivals</a>
          <a href="/" className="link text-lg">Packages</a>
          <a href="/" className="link text-lg">Sign in</a>
          <a href="/" className="w-full px-4"><Button title="Sign Up" /></a>
        </div>
      )}
    </header>
  );
}

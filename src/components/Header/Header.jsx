// src/components/Header.js
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../features/auth/authSlice';
import Button from '../../Ui/Button';
import { Link } from 'react-router-dom';
import Purchased from '../Purchased/Purchased';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, isAuthenticated } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <header className="pt-[52px] px-4 mx-auto max-w-fasco-container">
      <div className="flex justify-between items-center">
        <h3 className="text-4xl sm:text-5xl volkhov-bold">FASCO</h3>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-8 lg:gap-12 text-base lg:text-lg items-center">
          <Link to="/" className="link">Home</Link>
          <a href="#deals" className="link">Deals</a>
          <a href="#new-arrivals" className="link">New Arrivals</a>
          <a href="#packages" className="link">Packages</a>
          <Link to="/contacts" className="link">Contact</Link>
          <Link to={"/purchased"} className='link'>Purchased</Link>
          
          {isAuthenticated ? (
            <div className="flex items-center gap-4">
              <span className="text-midNight">Welcome, {user?.name}</span>
              <button 
                onClick={handleLogout}
                className="text-ligthSky font-medium border-2 rounded-lg border-ligthSky pt-1 pb-1 pr-4 pl-4 hover:bg-ligthSky hover:text-white duration-500"
              >
                Logout
              </button>
            </div>
          ) : (
            <>
              <Link to="/signin" className="link">Sign in</Link>
              <Link to="/register">
                {/* <button title="Sign Up" /> */}
                <button className='text-ligthSky font-medium border-2 rounded-lg border-ligthSky pt-1 pb-1 pr-4 pl-4 hover:bg-ligthSky hover:text-white duration-500'>Sign Up</button>
              </Link>
              
            </>
          )}
        </nav>

        <button
          className="md:hidden text-3xl text-midNight"
          onClick={toggleMenu}
        >
          {isMenuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden mt-6 flex flex-col items-center gap-4 bg-white py-6 shadow-md rounded-lg">
          <Link to="/" className="link text-lg">Home</Link>
          <a href="#deals" className="link text-lg">Deals</a>
          <a href="#new-arrivals" className="link text-lg">New Arrivals</a>
          <a href="#packages" className="link text-lg">Packages</a>
          <Link to="/contacts" className="link text-lg">Contact</Link>
          
          {isAuthenticated ? (
            <div className="flex flex-col items-center gap-4 w-full px-4">
              <span className="text-midNight">Welcome, {user?.name}</span>
              <button 
                onClick={handleLogout}
                className="text-ligthSky font-medium border-2 rounded-lg border-ligthSky pt-1 pb-1 pr-4 pl-4 hover:bg-ligthSky hover:text-white duration-500 w-full"
              >
                Logout
              </button>
            </div>
          ) : (
            <>
              <Link to="/signin" className="link text-lg">Sign in</Link>
              <div className="w-full px-4">
                <Link to="/register">
                  <Button title="Sign Up" />
                </Link>
                
              </div>
            </>
          )}
        </div>
      )}
    </header>
  );
}




// // src/components/Header.js
// import React, { useState, useEffect } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { logout } from '../../features/auth/authSlice';
// import { Link, useLocation } from 'react-router-dom';
// import { motion } from 'framer-motion';
// import Button from '../../Ui/Button';

// export default function Header() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [isScrolled, setIsScrolled] = useState(false);
//   const { user, isAuthenticated } = useSelector((state) => state.auth);
//   const dispatch = useDispatch();
//   const location = useLocation();

//   const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

//   const handleLogout = () => {
//     dispatch(logout());
//   };

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 50);
//     };
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   useEffect(() => {
//     setIsMenuOpen(false); // Close menu when route changes
//   }, [location.pathname]);

//   return (
//     <motion.header
//       initial={{ y: -80, opacity: 0 }}
//       animate={{ y: 0, opacity: 1 }}
//       transition={{ duration: 0.6, ease: 'easeOut' }}
//       className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
//         isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
//       }`}
//     >
//       <div className="pt-4 px-4 mx-auto max-w-fasco-container">
//         <div className="flex justify-between items-center">
//           <Link to="/">
//             <h3 className="text-4xl sm:text-5xl volkhov-bold text-midNight">FASCO</h3>
//           </Link>

//           {/* Desktop Nav */}
//           <nav className="hidden md:flex gap-8 lg:gap-12 text-base lg:text-lg items-center">
//             <Link to="/" className="link">Home</Link>
//             <a href="#deals" className="link">Deals</a>
//             <a href="#new-arrivals" className="link">New Arrivals</a>
//             <a href="#packages" className="link">Packages</a>
//             <Link to="/contacts" className="link">Contact</Link>

//             {isAuthenticated ? (
//               <div className="flex items-center gap-4">
//                 <span className="text-midNight">Welcome, {user?.name}</span>
//                 <button
//                   onClick={handleLogout}
//                   className="text-ligthSky font-medium border-2 rounded-lg border-ligthSky pt-1 pb-1 px-4 hover:bg-ligthSky hover:text-white transition-all duration-300"
//                 >
//                   Logout
//                 </button>
//               </div>
//             ) : (
//               <>
//                 <Link to="/signin" className="link">Sign in</Link>
//                 <Link to="/register">
//                   <Button title="Sign Up" />
//                 </Link>
//               </>
//             )}
//           </nav>

//           {/* Mobile Toggle */}
//           <button
//             className="md:hidden text-3xl text-midNight"
//             onClick={toggleMenu}
//           >
//             {isMenuOpen ? "✕" : "☰"}
//           </button>
//         </div>

//         {/* Mobile Nav */}
//         {isMenuOpen && (
//           <motion.div
//             initial={{ opacity: 0, y: -10 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0 }}
//             className="md:hidden mt-4 flex flex-col items-center gap-4 bg-white py-6 px-4 shadow-lg rounded-lg"
//           >
//             <Link to="/" className="link text-lg">Home</Link>
//             <a href="#deals" className="link text-lg">Deals</a>
//             <a href="#new-arrivals" className="link text-lg">New Arrivals</a>
//             <a href="#packages" className="link text-lg">Packages</a>
//             <Link to="/contacts" className="link text-lg">Contact</Link>

//             {isAuthenticated ? (
//               <div className="flex flex-col items-center gap-3 w-full">
//                 <span className="text-midNight">Welcome, {user?.name}</span>
//                 <button
//                   onClick={handleLogout}
//                   className="text-ligthSky font-medium border-2 rounded-lg border-ligthSky pt-1 pb-1 px-4 hover:bg-ligthSky hover:text-white transition-all duration-300 w-full"
//                 >
//                   Logout
//                 </button>
//               </div>
//             ) : (
//               <>
//                 <Link to="/signin" className="link text-lg">Sign in</Link>
//                 <Link to="/register" className="w-full">
//                   <Button title="Sign Up" />
//                 </Link>
//               </>
//             )}
//           </motion.div>
//         )}
//       </div>
//     </motion.header>
//   );
// }

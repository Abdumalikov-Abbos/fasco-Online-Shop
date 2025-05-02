// src/components/Header.js
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../features/auth/authSlice';
import Button from '../../Ui/Button';
import { Link } from 'react-router-dom';

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
                <Button title="Sign Up" />
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
import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { images } from '../data/data';

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className={`navbar navbar-expand-lg ${theme === 'dark' ? 'navbar-dark bg-dark' : 'navbar-light bg-light'} shadow`}>
      <div className="container">
        <a className="navbar-brand" href="/">📷 Photo Gallery</a>
        <span className="ms-auto me-3">Photos: {images.length}</span>
        <button
          onClick={toggleTheme}
          className={`btn ${theme === 'dark' ? 'btn-outline-light' : 'btn-outline-dark'}`}
        >
          {theme === 'dark' ? '🌞 Light Mode' : '🌙 Dark Mode'}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;

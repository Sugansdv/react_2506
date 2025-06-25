import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { images } from '../data/data';

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className={`navbar navbar-expand-lg bg-danger shadow`}>
      <div className="container">
        <a className="navbar-brand" href="/">Photo Gallery</a>
      </div>
    </nav>
  );
};

export default Navbar;

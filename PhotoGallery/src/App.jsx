import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Gallery from './components/Gallery';
import { ThemeProvider, useTheme } from './context/ThemeContext';

const AppContent = () => {
  const { theme } = useTheme();

  useEffect(() => {
    document.body.className = theme === 'dark' ? 'dark-mode' : 'light-mode';
  }, [theme]);

  return (
    <>
      <Navbar />
      <div className="container py-4">
        <Gallery />
      </div>
    </>
  );
};

const App = () => {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
};

export default App;

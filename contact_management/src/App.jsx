import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import ContactList from './components/ContactList';

const Home = () => (
  <div className="container mt-4 text-center">
    <h2>Welcome to the Contact Management App</h2>
  </div>
);

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contacts" element={<ContactList />} />
      </Routes>
    </Router>
  );
}

export default App;

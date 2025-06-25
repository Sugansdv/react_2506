import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import JobList from './components/JobList';

const Home = () => (
  <div className="container mt-5">
    <h2>Welcome to the Job Board</h2>
    <p>Explore remote job listings from real companies.</p>
  </div>
);

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<JobList />} />
      </Routes>
    </Router>
  );
}

export default App;

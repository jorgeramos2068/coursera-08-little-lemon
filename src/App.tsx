import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './components/Home';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/menu"
          element={
            <div className="container mt-5">
              <h1>Menu Page</h1>
              <p>Coming soon...</p>
            </div>
          }
        />
        <Route
          path="/about"
          element={
            <div className="container mt-5">
              <h1>About Page</h1>
              <p>Coming soon...</p>
            </div>
          }
        />
        <Route
          path="/contact"
          element={
            <div className="container mt-5">
              <h1>Contact Page</h1>
              <p>Coming soon...</p>
            </div>
          }
        />
      </Routes>
    </div>
  );
}

export default App;

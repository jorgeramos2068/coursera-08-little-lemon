import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import HomePage from './pages/HomePage';
import './App.css';

export const App: React.FC = () => {
  return (
    <main className="app">
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/menu"
          element={
            <section>
              <h1>Menu Page</h1>
              <p>Coming soon...</p>
            </section>
          }
        />
        <Route
          path="/about"
          element={
            <main className="container mt-5">
              <section>
                <h1>About Page</h1>
                <p>Coming soon...</p>
              </section>
            </main>
          }
        />
        <Route
          path="/contact"
          element={
            <section>
              <h1>Contact Page</h1>
              <p>Coming soon...</p>
            </section>
          }
        />
      </Routes>
    </main>
  );
};

export default App;

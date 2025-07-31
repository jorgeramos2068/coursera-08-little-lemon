import React from 'react';
import { Link } from 'react-router';
import { Cherry } from 'lucide-react';

const Navigation: React.FC = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark" role="navigation" aria-label="Main navigation">
      <div className="container">
        <Link className="navbar-brand" to="/" aria-label="Little Lemon Home">
          <Cherry size={24} color="#FFD700" className="me-2" aria-hidden="true" />
          Little Lemon
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation menu"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto" role="menubar">
            <li className="nav-item" role="none">
              <Link className="nav-link" to="/" role="menuitem">
                Home
              </Link>
            </li>
            <li className="nav-item" role="none">
              <Link className="nav-link" to="/booking" role="menuitem">
                Book a table
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;

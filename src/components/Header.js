import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="navbar">
      <div className="navbar-container">
        <Link to="/" className="brand-title">
          ProductStore
        </Link>
        <nav className="nav-links">
          <Link to="/" className="nav-link">
            Home
          </Link>
          <Link to="/products" className="nav-link">
            Products
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;

import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="home-container">
      <h1 className="home-title">Welcome to ProductStore</h1>
      <p className="home-subtitle">Manage and explore products for your needs.</p>
      <Link to="/products" className="btn-primary">
        View products
      </Link>
    </div>
  );
}

export default Home;

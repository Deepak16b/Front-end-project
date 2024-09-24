import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <header className="header">
        <h1>Welcome to Our Online Retail Store</h1>
      </header>
      <nav className="nav">
        <Link to="/login" className="nav-item">Login</Link>
        <Link to="/register" className="nav-item">Register</Link>
        <Link to="/products" className="nav-item">Products</Link>
        <Link to="/cart" className="nav-item cart">🛒 Cart</Link>
      </nav>
      <main className="main-content">
        <h2>Shop the Best Products!</h2>
        <p>Explore a wide range of products from various sellers. Enjoy great deals and offers!</p>
        <button className="shop-now-btn">
          <Link to="/products" className="shop-now-link">Shop Now</Link>
        </button>
      </main>
      <footer className="footer">
        <p>&copy; 2024 Online Retail Store. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default Home;

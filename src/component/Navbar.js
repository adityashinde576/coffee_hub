import React from "react";
import { Link } from "react-router-dom";
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">☕ CoffeeHub</div>

      <ul className="nav-links">
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/menu">Menu</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>

      {/* Buttons group */}
      <div className="nav-buttons">
        <Link to="/login"><button className="order-btn">Login</button></Link>
        <Link to="/signup"><button className="order-btn">Sign Up</button></Link>
      </div>
    </nav>
  );
}

export default Navbar;

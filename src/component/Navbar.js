import React from "react";
import { NavLink } from "react-router-dom";  // 👈 NavLink use
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top shadow-sm">
      <div className="container-fluid">

        {/* 🔥 Coffee cup icon + CoffeeHub text */}
        <NavLink className="navbar-brand" to="/Coffee">
          <i className="fas fa-mug-hot"></i> CoffeeHub
        </NavLink>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <NavLink className="nav-link" to="/Home">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/About">About</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/Contact">Contact Us</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/Menu">Menu</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/Order">Order</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/cart">Cart</NavLink>
            </li>
          </ul>

          {/* Buttons on right side */}
          <div className="d-flex">
            <NavLink to="/SignUP">
              <button className="order">Sign In</button>
            </NavLink>
            <NavLink to="/Login">
              <button className="order ms-2">Login</button>
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

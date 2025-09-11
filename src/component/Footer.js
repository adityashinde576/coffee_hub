import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Left Section */}
        <div className="footer-about">
          <h3>☕ CoffeeHub</h3>
          <p>Your daily dose of coffee and happiness!</p>
        </div>

        {/* Middle Section */}
        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/home">Home</a></li>
            <li><a href="/menu">Menu</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        {/* Right Section */}
        <div className="footer-contact">
          <h4>Contact Us</h4>
          <p>📍 Main Street, Pune</p>
          <p>📞 +91 98765 43210</p>
          <p>📧 contact@coffeehub.com</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} CoffeeHub | Developed by Aditya Shinde</p>
      </div>
    </footer>
  );
}

export default Footer;

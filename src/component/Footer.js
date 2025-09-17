import React from "react";
import { Link } from "react-router-dom";
import { FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa6"; // 👈 FontAwesome 6 import
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer" aria-label="Site Footer">
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
            <li><Link to="/home">Home</Link></li>
            <li><Link to="/menu">Menu</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* Right Section */}
        <div className="footer-contact">
          <h4>Contact Us</h4>
          <address>
            <p>📍 Main Street, Pune</p>
            <p>📞 +91 98765 43210</p>
            <p>📧 contact@coffeehub.com</p>
          </address>
          <div className="footer-social">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram size={20} />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebook size={20} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter size={20} />
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} CoffeeHub | Developed by{" "}
          <a
            href="https://www.linkedin.com/in/aditya-shinde-123456789/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Aditya Shinde
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;

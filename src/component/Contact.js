import React, { useState } from "react";
import "./Contact.css";

function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="contact-page">
      <div className="contact-container">
        <h1 className="contact-title">☕ Contact Our Coffee Shop</h1>
        <p className="contact-subtitle">
          We'd love to hear from you! Whether it's feedback, questions, or just a hello.
        </p>

        <div className="contact-content">
          {/* Left Side: Info */}
          <div className="contact-info">
            <h3>📍 Address</h3>
            <p>123 Coffee Street, Nashik, India</p>

            <h3>📞 Phone</h3>
            <p>+91 9876543210</p>

            <h3>✉ Email</h3>
            <p>coffeeshop@example.com</p>

            <div className="map-container">
              <iframe
                title="Google Map Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29992.664820957143!2d73.7051588364082!3d20.00502658612165!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bddeb985ff32cdd%3A0x29b768633c516692!2sShri%20Someshwar%20Mahadev%20Mandir!5e0!3m2!1sen!2sin!4v1757588007797!5m2!1sen!2sin"
                width="100%"
                height="200"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          {/* Right Side: Form */}
          <div className="contact-form">
            <h2>Send us a message</h2>
            <form onSubmit={handleSubmit}>
              <label htmlFor="name">Your Name</label>
              <input id="name" type="text" placeholder="Your Name" required />

              <label htmlFor="email">Your Email</label>
              <input id="email" type="email" placeholder="Your Email" required />

              <label htmlFor="message">Your Message</label>
              <textarea id="message" placeholder="Your Message" rows="4" required></textarea>

              <button type="submit" aria-label="Send Message">Send Message</button>
            </form>
            {submitted && (
              <div className="contact-success">
                Thank you! Your message has been sent.
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
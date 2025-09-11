import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <section className="contact" id="contact">
      <h2>Contact Us</h2>
      <p className="sub-text">
        Have questions or feedback? We'd love to hear from you!
      </p>

      <div className="contact-container">
        {/* Contact Form */}
        <form className="contact-form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" rows="5" required></textarea>
          <button type="submit">Send Message</button>
        </form>

        {/* Contact Info */}
        <div className="contact-info">
          <h3>Visit Us</h3>
          <p>☕ CoffeeHub, Main Street, Pune</p>
          <p>📞 +91 98765 43210</p>
          <p>📧 contact@coffeehub.com</p>

          {/* Correct Google Maps Embed */}
          <iframe
            title="map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3748.9799974617576!2d73.76449560000002!3d20.0093542!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bddeb405689fd65%3A0x32db9a3e1095f3d6!2sNexonica%20Systems%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1757572240327!5m2!1sen!2sin"
            width="100%"
            height="200"
            style={{ border: 0, borderRadius: "15px", marginTop: "15px" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
}

export default Contact;

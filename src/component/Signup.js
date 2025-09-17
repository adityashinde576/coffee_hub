import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Signup.css";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // ✅ LocalStorage मध्ये save
    localStorage.setItem("userEmail", email);
    localStorage.setItem("userPassword", password);

    alert("Signup Successful ✅ Please login now.");
    navigate("/login");
  };

  return (
    <div className="signup-container">
      <div className="signup-box">
        <h2 className="signup-title">Signup</h2>
        <form onSubmit={handleSubmit} className="signup-form">
          <input
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="signup-input"
          />
          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="signup-input"
          />
          <button type="submit" className="signup-btn">Signup</button>
        </form>
        <p className="login-text">
          Already have an account? <a href="/login">Login</a>
        </p>
      </div>
    </div>
  );
}

export default Signup;

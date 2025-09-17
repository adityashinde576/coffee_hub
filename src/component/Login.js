import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";  // CSS import

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // ✅ LocalStorage मधले data घेणे
    const storedEmail = localStorage.getItem("userEmail");
    const storedPassword = localStorage.getItem("userPassword");

    if (email === storedEmail && password === storedPassword) {
      alert("Login Successful ✅");
      navigate("/home");
    } else {
      alert("Invalid credentials ❌");
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2 className="login-title">Login</h2>
        <form onSubmit={handleSubmit} className="login-form">
          <input
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="login-input"
          />
          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="login-input"
          />
          <button type="submit" className="login-btn">Login</button>
        </form>
        <p className="signup-text">
          Don’t have an account? <a href="/signup">Signup</a>
        </p>
      </div>
    </div>
  );
}

export default Login;

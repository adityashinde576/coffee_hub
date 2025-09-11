import React from "react";
import "./Auth.css";

function Login() {
  return (
    <div className="auth-container">
      <form className="auth-form">
        <h2>Login</h2>
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Password" required />
        <button type="submit" className="auth-btn">Login</button>
        <p className="auth-text">
          Don’t have an account? <a href="/signup">Sign Up</a>
        </p>
      </form>
    </div>
  );
}

export default Login;

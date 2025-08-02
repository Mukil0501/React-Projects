import React, { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email && password) {
      localStorage.setItem("loggedInUser", email);
      alert("Login successful! Redirecting to Task Board...");
      window.location.href = "https://task-board-management.netlify.app"; // replace with deployed URL if hosted
    } else {
      alert("Please enter valid email and password.");
    }
  };

  return (
    <section className="login-box" id="login">
      <h2>🔐 Login</h2>
  
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email address (any dummy email)"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password (any dummy password)"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Access TaskBoard</button>
      </form>
    </section>
  );
}

export default Login;

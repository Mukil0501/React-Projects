import React from "react";

function Header() {
  return (
    <header>
      <div className="logo">📋 TaskBoard</div>
      <nav>
        <a href="#about">📘 About</a>
        <a href="#features">⚙️ Features</a>
        <a href="#login">🔐 Login</a>
        <a href="#extras">🌟 Extras</a>
        <a href="#contact">📞 Contact</a>
      </nav>
    </header>
  );
}

export default Header;

import React from "react";

function Main() {
  return (
    <section className="main">
      <h1>🚀 Organize Your Work Seamlessly</h1>
      <p>
        TaskBoard helps you stay on top of your work with a clean UI and solid
        features built for real-life productivity.
      </p>
      <button onClick={() => document.getElementById("login").scrollIntoView()}>Get Started</button>
    </section>
  );
}

export default Main;

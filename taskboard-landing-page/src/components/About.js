import React from "react";

function About() {
  return (
    <section className="section" id="about">
      <h2>👋 About TaskBoard</h2>
      <div className="about">
        <div className="about-box">
          <img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt="mission" />
          <h3>Our Mission</h3>
          <p>To help individuals and teams stay organized and focused in their daily work.</p>
        </div>
        <div className="about-box">
        <img src="https://cdn-icons-png.flaticon.com/512/2922/2922510.png" alt="vision" />


          <h3>Vision</h3>
          <p>Building simple tools that bring clarity and confidence to your workflow.</p>
        </div>
      </div>
    </section>
  );
}

export default About;
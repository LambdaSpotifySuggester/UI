import React from "react";

function Footer() {
  return (
    <div className="footer">
      <div className="logo">
      <i class="fas fa-headphones-alt"></i>
        <span className="logo-text">Isolation Recommendtions</span>
      </div>
      <div className="footer-nav">
        <nav className="footer-links">
          <a>About Us</a>
          <a>Contact</a>
          <a>Mobile App</a>
          <a>Web Player</a>
        </nav>
        <div className="social">
          <i class="fab fa-instagram"></i>
          <i class="fab fa-facebook-square"></i>
          <i class="fab fa-twitter-square"></i>
        </div>
      </div>
    </div>
  );
}

export default Footer;

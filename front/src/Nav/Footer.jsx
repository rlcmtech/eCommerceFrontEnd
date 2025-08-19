import React from 'react';
import '../Styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} Magel’s Polvoron. All rights reserved.</p>
      <div className="footer-links">
        <a href="#about">About</a>
        <a href="#products">Products</a>
        <a href="#contact">Contact</a>
      </div>
    </footer>
  );
};

export default Footer;

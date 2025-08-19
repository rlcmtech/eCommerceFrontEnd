import React from 'react';
import '../Styles/Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Sweet Moments, One Polvoron at a Time</h1>
        <p>
          Handcrafted in our humble kitchen, our polvoron is made with love, 
          care, and the perfect blend of flavors to bring you joy in every bite.
        </p>
        <div className="hero-buttons">
          <a href="#products" className="btn primary">Shop Now</a>
          <a href="#about" className="btn secondary">Learn More</a>
        </div>
      </div>

      <div className="hero-image">
        <img src="/images/polvoron-hero.png" alt="Delicious polvoron" />
      </div>
    </section>
  );
};

export default Hero;

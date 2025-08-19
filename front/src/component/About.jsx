import React from 'react';
import '../Styles/About.css';

const About = () => {
  return (
    <div className="about-container">
     

      <ul className="polvoron-list">
        <li>
          <h3>Classic Polvoron</h3>
          <div className="image-placeholder">Image here</div>
          <p>A timeless treat with a crumbly, melt-in-your-mouth texture.</p>
        </li>
        <li>
          <h3>Cookies & Cream Polvoron</h3>
          <div className="image-placeholder">Image here</div>
          <p>Sweet, creamy, and studded with cookie bits for a twist on tradition.</p>
        </li>
        <li>
          <h3>Coffee Polvoron</h3>
          <div className="image-placeholder">Image here</div>
          <p>A bold, aromatic flavor for coffee lovers in every bite.</p>
        </li>
      </ul>


       <section className="about-story">
        <p>
          It started when my wife brought some pasalubong from work — Polvoron.
          I noticed that it was unique; aside from classic, it had cookies and cream as a variant.
          It was tasty and delicious. I asked my wife where she bought it, but she said it was
          just given by their boss.
        </p>
        <p>
          At that moment, I’d been thinking of a small business I could start in our humble kitchen.
          I researched how to make Polvoron and thought this was something I could enjoy and manage.
          After producing early batches, I received helpful feedback on taste, texture, size, price,
          and packaging.
        </p>
        <p>
          On my sixth batch attempt, customers began to compliment the Polvorons.
          I kept that recipe to cater to their preferences — I want them to enjoy it!
        </p>
      </section>

      <div className="order-section">
        <p>Order now!</p>
      
      </div>
    </div>
  );
};

export default About;

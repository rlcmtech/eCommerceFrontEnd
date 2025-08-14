import '../Styles/Header.css';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">🍬 Magel’s</div>

      <nav className="nav">
        <ul className="nav-ul">
          <li><a href="#home">Home intro</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#products">Products</a></li>
        </ul>

        <ul className="nav-ul auth">
          <li><a href="#signup">Sign Up</a></li>
          <li><a href="#login">Log in</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

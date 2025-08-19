// Header.jsx
import '../Styles/Header.css';
import { NavLink } from 'react-router-dom';

const Header = ({ user, onLogout }) => {
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
          {!user && (
            <>
              <li><NavLink to="/login">Log in</NavLink></li>
              <li><NavLink to="/login#signup">Sign Up</NavLink></li>
            </>
          )}
          {user && (
            <>
              <li>Hello, {user.name}</li>
              <li>
                <button onClick={onLogout} className="logout-btn">
                  Log out
                </button>
              </li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;

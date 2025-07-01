import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <div>
      This is header
      <ul>
        <li><a href="#home">Home intro</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#products">Products</a></li>
      </ul>

      <ul>
        <li><a href="#signup">Sign Up</a></li>
        <li><a href="#login">Log in</a></li>
      </ul>
    </div>
  );
};

export default Header;

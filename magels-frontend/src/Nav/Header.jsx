import '../Styles/Header.scss';
import { NavLink } from 'react-router-dom';





const Header = () => {
  return (
    <div>
      This is header
      <ul className='nav-ul'>
        <li><a href="#home">Home intro</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#products">Products</a></li>
      </ul>

      <ul className='nav-ul'>
        <li><a href="#signup">Sign Up</a></li>
        <li><a href="#login">Log in</a></li>
      </ul>
    </div>
  );
};

export default Header;

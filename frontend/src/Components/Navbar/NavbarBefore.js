import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import menu from '../../images/menu.png';
import Brand from '../../images/logo.png';
import './navbar.css';

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo" style={{ display: 'flex', alignItems: 'center' }}>
          <img src={Brand} alt="Brand Logo" style={{ width: '50px', height: '50px' }} />
          <h2>Sammani Book Store</h2>
        </div>
        <div className="menu-icon" onClick={handleShowNavbar}>
          <img src={menu} alt="Menu Icon" style={{ width: '30px', height: '30px' }} />
        </div>
        <div className={`nav-elements  ${showNavbar && 'active'}`}>
          <ul>
            
            <li>
              <NavLink to="/">DashBoard</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
            <li>
              <NavLink to="/login">Login</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
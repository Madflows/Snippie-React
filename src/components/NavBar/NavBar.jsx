import React from "react";

import Logo from '../../images/Logo.svg';
import Ham from '../../images/HamburgerMenu.svg';
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <img src={Logo} alt="Logo" />
      </div>
      <div className="menu-icon">
        <img src={Ham} alt="Menu icon" /></div>
    </div>
    
  );
};

export default Navbar;

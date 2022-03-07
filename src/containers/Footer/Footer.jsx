import React from "react";

import Logo from "../../images/Logo.svg";
import "./Footer.css";

const Footer = () => {
  return(
    <div className="footer">
      <div className="logo">
        <img src={Logo} alt="Logo" />
      </div>
      <div className="link--section">
        <a href="#">Terms and Conditions</a>
        <a href="#">Privacy Policy</a>
      </div>
    </div>
  );
};

export default Footer;

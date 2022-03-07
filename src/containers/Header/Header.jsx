import React from "react";

import { NavBar } from "../../components";
import CodeShot from "../../images/SnippetImage.png";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <NavBar />

      <div className="text--section">
        <h1 className="hero-text">Gorgeous Code Snippets</h1>
        <p className="sub-text">
          With Snipper, create fully customizable code snippets in a matter of
          seconds right from your browser
        </p>
        <a href="#" className="btn cta-btn">Get Started <span>- It's Free</span></a>
        <p className="btn subtitle">No credit card required</p>
      </div>

      <div className="image--section">
          <img className="snip-shot" src={CodeShot} alt="Snippet" />
    </div>
    </div>
  );
};

export default Header;

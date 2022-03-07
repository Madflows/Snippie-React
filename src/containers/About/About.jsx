import React from "react";

import CustomSnip from "../../images/CustomizableImage.png";
import "./About.css";

const About = () => {
    return(
        <div className="about">
            <div className="image--section">
                <img src={CustomSnip} alt="Customizable Snippet" />
            </div>
            <div className="text--section">
                <h1 className="about-title">
                    A fully customizable code snippet editor!
                </h1>
                <p className="about-subtitle">
                    Fully customize the color scheme of your code snippet, or use
                    your own premade color schemes. Export your code snippet in JPG,
                    PDF, PNG, or any of the other 10+ common extensions.
                </p>
                <a href="#" className="btn ab-btn cta-btn">Get Started <span>- it's free</span></a>
            </div>
        </div>
    )
}

export default About;
import { useState } from "react";
import { iconsData } from "./data";
import arrowDown from "./assets/arrow-down-line.png";
import arrowRight from "./assets/arrow-right-line.png";

import React from "react";

function Home() {
  const [isOpen, setIsOpen] = useState(false);

  const arrowToggle = () => {
    setIsOpen(!isOpen);
  };

  const arrowCss = isOpen ? arrowDown : arrowRight;

  const icons = iconsData.map((icon) => (
    // <div></div>
    <button className="icon">
      <div className="icon-name-container">
        <img src={icon.icon} alt="icons" className="icon-img" />
        <span>{icon.name}</span>
      </div>
    </button>
  ));

  return (
    <div className="icon-container">
      <div className="prompt">
        <span>Prompt templates</span>
        <img src={arrowDown} alt="arrow-down" className="arrow-down" />
      </div>
      <div className="icon-top">{icons}</div>
    </div>
  );
}

export default Home;

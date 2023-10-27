import { useState } from "react";
import { iconsData } from "./data";
import arrowLeftLine from "./assets/arrow-left-line.png";
import arrowRightLine from "./assets/arrow-right-line.png";
import arrowRightCircleFill from "./assets/arrow-right-circle-fill.png";

import React from "react";

function Home() {
  const [isOpen, setIsOpen] = useState(arrowLeftLine);

  const arrowToggle = () => {
    setTimeout(() => {
      if (arrowRightLine) setIsOpen(arrowRightLine);
    }, 300);
    setIsOpen(arrowRightCircleFill);
  };

  const icons = iconsData.map((icon) => (
    // <div></div>
    <button className="icon" onClick={arrowToggle}>
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
        <img
          src={isOpen}
          alt="arrow-down"
          className="arrow-down"
          onClick={arrowToggle}
        />
      </div>
      <div className="icon-top">{icons}</div>
    </div>
  );
}

export default Home;

import { useState } from "react";
import { iconsData } from "./data";
import arrowLeftLine from "./assets/arrow-left-line.png";
import arrowRightLine from "./assets/arrow-right-line.png";
import arrowRightCircleFill from "./assets/arrow-right-circle-fill.png";
import arrowLeftCircleFill from "./assets/arrow-left-circle-fill.png";

import React from "react";

function Home() {
  const [arrow, setArrow] = useState(arrowLeftLine);
  const [isOpen, setIsOpen] = useState(false);

  const arrowToggle = () => {
    setArrow(arrowRightCircleFill);
    setTimeout(() => {
      if (arrowLeftLine) setArrow(arrowRightLine);
      if (arrowRightLine) setArrow(arrowRightLine);
    }, 300);
  };

  const openArrow = () => {
    setIsOpen(false);
    if (!isOpen) {
      setArrow(arrowLeftLine);
    }
    if (isOpen) {
      setArrow(arrowRightLine);
    }
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
          src={arrow}
          alt="arrow-down"
          className="arrow-down"
          onClick={openArrow}
        />
      </div>
      <div className="icon-top">{icons}</div>
    </div>
  );
}

export default Home;

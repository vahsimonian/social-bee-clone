import { useState } from "react";
import { iconsData } from "./data";
import arrowLeftLine from "./assets/arrow-left-line.png";
import arrowRightLine from "./assets/arrow-right-line.png";
import arrowRightCircleFill from "./assets/arrow-right-circle-fill.png";
import arrowLeftCircleFill from "./assets/arrow-left-circle-fill.png";
import informationFill from "./assets/information-fill.png";
import heartIcon from "./assets/heart-line.png";
import shuffleIcon from "./assets/shuffle-line.png";

import React from "react";

function Home() {
  const [arrow, setArrow] = useState(arrowRightLine);
  const [isOpen, setIsOpen] = useState(false);

  const arrowToggle = () => {
    setIsOpen(true);
    setArrow(arrowLeftCircleFill);
    setTimeout(() => {
      setArrow(arrowLeftLine);
    }, 300);
  };

  const openArrow = () => {
    setArrow(arrowRightCircleFill);
    setIsOpen(false);
    setTimeout(() => {
      isOpen ? setArrow(arrowLeftLine) : setArrow(arrowRightLine);
    }, 300);
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

  const iconNavbarOpen = !isOpen ? "icon-navbar-none" : "icon-navbar ";

  return (
    <div className="open-navbar">
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
      <div className={iconNavbarOpen}>
        <div className="your-prompts">
          <div className="prompts-span-icon">
            <span>Your prompt</span>
            <img
              src={informationFill}
              alt="info"
              className="info-icon"
              width={22}
            />
          </div>
          <div className="your-prompts-icons">
            <img src={heartIcon} alt="" width={22} />
            <img src={shuffleIcon} alt="" width={22} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;

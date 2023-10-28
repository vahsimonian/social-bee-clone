import { useEffect, useState } from "react";
import { iconsData } from "./data";
import arrowLeftLine from "./assets/arrow-left-line.png";
import arrowRightLine from "./assets/arrow-right-line.png";
import arrowRightCircleFill from "./assets/arrow-right-circle-fill.png";
import arrowLeftCircleFill from "./assets/arrow-left-circle-fill.png";

import React from "react";

function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const [clickCount, setClickCount] = useState(0);

  const handleClick = () => {
    setTimeout(() => {
      if (arrowRightLine) setIsOpen(arrowRightLine);
    }, 300);
    if (clickCount === 1) console.log("1");
    setClickCount(clickCount + 1);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setClickCount(0);
    }, 1000);
    return () => clearTimeout(timer);
  }, [clickCount]);

  const icons = iconsData.map((icon) => (
    // <div></div>
    <button className="icon" onClick={handleClick}>
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
          src={arrowLeftLine}
          alt="arrow-down"
          className="arrow-down"
          onClick={handleClick}
        />
      </div>
      <div className="icon-top">{icons}</div>
    </div>
  );
}

export default Home;

import { useEffect, useState } from "react";
import { iconsData } from "./data";
import arrowLeftLine from "./assets/arrow-left-line.png";
import arrowRightLine from "./assets/arrow-right-line.png";
import arrowRightCircleFill from "./assets/arrow-right-circle-fill.png";
import arrowLeftCircleFill from "./assets/arrow-left-circle-fill.png";

import React from "react";

function Home() {
  const [arrow, setArrow] = useState(false);
  const [clickCount, setClickCount] = useState(0);

  const handleClick = () => {
    if (clickCount === 1) console.log("1");
    setClickCount(clickCount + 1);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setClickCount(0);
    }, 1000);
    return () => clearTimeout(timer);
  }, [clickCount]);

  const arrowToggle = () => {
    setTimeout(() => {
      if (arrowLeftLine) setArrow(arrowRightLine);
      if (arrowRightLine) setArrow(arrowRightLine);
    }, 300);
    setArrow(arrowRightCircleFill);
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
          src={arrowLeftLine}
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

import { iconsData } from "./data";

import React from "react";

function Home() {
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
        <span className="arrow-right"> > </span>
      </div>
      <div className="icon-top">{icons}</div>
    </div>
  );
}

export default Home;

import { iconsData } from "./data";

import React from "react";

function Home() {
  const icons = iconsData.map((icon) => (
    // <div></div>
    <button className="icon">
      <div className="icon-name-container">
        <img src={icon.icon} alt="icons" />
        <span>{icon.name}</span>
      </div>
    </button>
  ));

  return <div className="icon-container">{icons}</div>;
}

export default Home;

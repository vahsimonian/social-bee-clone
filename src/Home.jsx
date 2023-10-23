import { iconsData } from "./data";

import React from "react";

function Home() {
  const icons = iconsData.map((icon) => (
    <button className="icon">
      <img src={icon.icon} alt="icons" />
    </button>
  ));

  return <div className="icon-container">{icons}</div>;
}

export default Home;

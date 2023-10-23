import { iconsData } from "./data";

import React from "react";

function Home() {
  const icons = iconsData.map((icon) => (
    <button>
      <img src={icon.icon} alt="icons" className="home-icons icons" />
    </button>
  ));

  return <div className="icon-container">{icons}</div>;
}

export default Home;

import { iconsData } from "./data";

import React from "react";

function Home() {
  const icons = iconsData.map((icon) => (
    <img className="home-icon" src={icon.icon} alt="iocns" />
  ));

  return <div>{icons}</div>;
}

export default Home;

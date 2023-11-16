import React from "react";
import chatButton from "../src/assets/chat-3-line.png";

function SearchButton() {
  return (
    <div>
      <button className="search-input">
        <img src={chatButton} alt="" />
      </button>
      {/* <input type="text"  /> */}
    </div>
  );
}

export default SearchButton;

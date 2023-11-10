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
  const [isOpen, setIsOpen] = useState(!false);
  const [volume, setVolume] = useState(50); // Initial volume level (0 to 100)
  const [selectedValue, setSelectedValue] = useState("");
  const [toggleIsTrue, setToggleIsTrue] = useState(false);
  const [sliderValue, setSliderValue] = useState(50); // Initial slider value

  const handleSliderChange = (e) => {
    setSliderValue(e.target.value);
  };

  const toggleButton = () => {
    setToggleIsTrue(!toggleIsTrue);
  };

  // Handler function for the onChange event
  const handleSelectChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const handleChangeVolume = (e) => {
    const newVolume = e.target.value;
    setVolume(newVolume);
    // Update audio element or use Web Audio API to adjust volume
    // For example: audioElement.volume = newVolume / 100
  };

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
        <div className="your-prompts border-container">
          {/* <div></div> */}
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
        <div className="your-prompt-ai-container">
          <input type="text" className="your-prompt-input" />
          <p>Tone of voice</p>
          <div className="your-prompt-ai-button-container">
            <button className="your-prompt-ai-button">Polite</button>
            <button className="your-prompt-ai-button">Witty</button>
            <button className="your-prompt-ai-button">Enthusiastic</button>
            <button className="your-prompt-ai-button">Friendly</button>
            <button className="your-prompt-ai-button">Informational</button>
            <button className="your-prompt-ai-button">Funny</button>
            <select
              className="your-prompt-ai-button"
              value={selectedValue}
              onChange={handleSelectChange}
            >
              <option>More</option>
            </select>
          </div>
          <div className="approx-words-container">
            <span>Approximate words</span>
            <div className="slider-value">
              <div className="approximate-words">{sliderValue}</div>
            </div>
            {/* <input
              type="number"
              className="approximate-words"
              value={sliderValue}
            /> */}
          </div>
          {/* <input
            type="range"
            min="0"
            max="100"
            value={volume}
            onChange={handleChangeVolume}
            className="range"
          /> */}
          <div className="volume-slider-container">
            <input
              type="range"
              min="0"
              max="100"
              value={sliderValue}
              onChange={handleSliderChange}
              className="slider"
            />
            {/* <div className="slider-value">{sliderValue}</div> */}
          </div>
        </div>
        <div className="generate-hashtags">
          Generate hashtags
          <div className="toggle-btn-bg">
            <button
              className={`dark-mode-toggle ${toggleIsTrue ? "dark" : ""}`}
              onClick={toggleButton}
            ></button>
          </div>
        </div>
        <div className="generate-hashtags">
          Inlcude Emoji
          <div className="toggle-btn-bg">
            <button
              className={`dark-mode-toggle ${toggleIsTrue ? "dark" : ""}`}
              onClick={toggleButton}
            ></button>
          </div>
        </div>
        <div className="posts-generate-container">
          <span>Posts to generate</span>
          <input type="number" className="posts-generate" />
        </div>
        <button className="generate-btn">Generate</button>
      </div>
      <div className={iconNavbarOpen}>
        <div className="your-prompts border-container">
          {/* <div></div> */}
          <div className="prompts-span-icon">
            <span className="get-started">Get started</span>
          </div>
        </div>
        <div>
          <ul>
            <li>
              <p>
                Pick a prompt from the left-hand side "Prompt templates"
                panel,use the shuffle button to get a random prompt, or write
                one form scratch
              </p>
            </li>
            <li>
              <p>
                Write or edit your prompt with what want the AI to generate and
                hit the Generate Button.
              </p>
            </li>
            <li>
              <p>
                Select the results you like and hit the Share on social button.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Home;

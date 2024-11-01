import React, { useState } from "react";
import SpotTheDifference from './main.js'; // Import the game component
import './SpotTheDifference.css'; // Import the CSS file
import DoorWall from './door_wall.js'; // Import the door_wall component
import './door_wall.css';
import PosterWall from "./poster_wall.js";
import './poster_wall.js';
import Wall1 from "./wall1.js";
import './wall1.js';
import Wall2 from "./wall2.js";
import './wall2.js';

function Walls() {

  const screens = [<DoorWall />, <PosterWall />, <Wall1 />, <Wall2 />];

  const [currentScreenIndex, setCurrentScreenIndex] = useState(0);

  const handleLeftClick = () => {
    setCurrentScreenIndex((prevIndex) =>
      prevIndex === 0 ? screens.length - 1 : prevIndex - 1
    );
  };

  const handleRightClick = () => {
    setCurrentScreenIndex((prevIndex) =>
      prevIndex === screens.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="App">
      <button className="side-button left-button" onClick={handleLeftClick}>
        &lt;
      </button>
      <div className="content">
        {screens[currentScreenIndex]}
      </div>
      <button className="side-button right-button" onClick={handleRightClick}>
        &gt;
      </button>
      {/* <SpotTheDifference /> */}
    </div>
  );
}


export default Walls;

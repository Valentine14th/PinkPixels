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
import StartScreen from "./start_screen.js";
import './start_screen.js';
import DifferenceButtons from "./DifferenceButtons.js";
import './App.css'

function App() {
  const [content, setContent] = useState("This is the initial content");
  const [isStartScreen, setIsStartScreen] = useState(true);
  const [currentScreenIndex, setCurrentScreenIndex] = useState(0);
  const [win, setWin] = useState({
    game_newspaper: false,
    game_youtube: false,
    game_insta: false,
    game_picture: false,
  });

  const screens = [
    <DoorWall win={win} />,
    <PosterWall win={win} />,  // Pass `win` as a prop here
    <Wall1 />,
    <Wall2 />
  ];

  const handleStart = () => {
    setIsStartScreen(false);
  };

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

  // Function to go back to the Start Screen
  const handleReturnToStart = () => {
    setIsStartScreen(true);
    setCurrentScreenIndex(0); // Reset to the first screen if needed
  };

  return (
    <div className="App">
      {isStartScreen ? (
        <StartScreen onStart={handleStart} />
      ) : (
        <>
          <button className="side-button left-button" onClick={handleLeftClick}>
            &lt;
          </button>

          <div className="content">
            {screens[currentScreenIndex]}
          </div>

          <button className="side-button right-button" onClick={handleRightClick}>
            &gt;
          </button>

          {/* Button to return to the Start Screen */}
          <button className="return-to-start" onClick={handleReturnToStart} >
            Start Over
          </button>
        </>
      )}
    </div>
  );
}

export default App;


import React, { useState, useEffect } from 'react';

// Define pairs of button IDs representing differences
const differences = [
  { id: "difference1", buttons: ["button1", "button1-diff"] },
  { id: "difference2", buttons: ["button2", "button2-diff"] },
  // Add more pairs as needed
];

const SpotTheDifferenceButton = ({ id, label, onSpotDifference }) => {
  return (
    <button
      onClick={() => onSpotDifference(id)}
      className="spot-difference-button"
    >
      {label}
    </button>
  );
};

const DifferenceButtons = ({ id, setWin }) => {
  const [spottedDifferences, setSpottedDifferences] = useState({});

  const handleSpotDifference = (differenceId) => {
    // Only update if the difference has not been spotted yet
    if (!spottedDifferences[differenceId]) {
      setSpottedDifferences((prevSpotted) => ({
        ...prevSpotted,
        [differenceId]: true,
      }));
    }
  };

  useEffect(() => {
    // Check if all differences have been spotted
    if (Object.keys(spottedDifferences).length === differences.length) {
      setWin((prevIsWin) => ({
        ...prevIsWin,
        [id]: true,
      }));
    }
  }, [spottedDifferences, id, setWin]);

  return (
    <div className="spot-the-difference-game">
      {differences.map((difference) =>
        difference.buttons.map((buttonId) => (
          <SpotTheDifferenceButton
            key={buttonId}
            id={buttonId}
            label={buttonId}
            onSpotDifference={() => handleSpotDifference(difference.id)}
          />
        ))
      )}
    </div>
  );
};

export default DifferenceButtons;

import React, { useState, useEffect } from 'react';
import './SpotTheDifference.css';

// Define pairs of button IDs representing differences
const differences = [
  { id: "difference1", buttons: ["diff1-1", "diff1-2"] },
  { id: "difference2", buttons: ["diff2-1", "diff2-2"] },
  { id: "difference3", buttons: ["diff3-1", "diff3-2"] },
  { id: "difference4", buttons: ["diff4-1", "diff4-2"] },
];

const SpotTheDifferenceButton = ({ id, label, onSpotDifference, spottedDifferences, difference, allFound, explanation}) => {
  return (
    allFound ? 
    (<p> {explanation} </p>)
    :
    (
      <button
        style={{ borderColor: spottedDifferences[difference.id] ? "red" : "transparent" }}
        onClick={() => onSpotDifference(id)}
        className="circle-button"
      >
        {label}
      </button>
    ) 
  );
};


const DifferenceButtons = ({ id, setWin, numberOfDiffs, explanations}) => {
  const [spottedDifferences, setSpottedDifferences] = useState({});
  const [allFound, setAllFound] = useState(false);

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
    if (Object.keys(spottedDifferences).length === numberOfDiffs) {
      setWin((prevIsWin) => ({
        ...prevIsWin,
        [id]: true,
      }));
      setAllFound(true);
    }
  }, [spottedDifferences, id, setWin, numberOfDiffs]);

  return (
    <div className="spot-the-difference-game">
      {differences.slice(0, numberOfDiffs).map((difference) =>
        difference.buttons.map((buttonId) => (
          <SpotTheDifferenceButton
            key={buttonId}
            id={buttonId}
            label={buttonId}
            className={`${id}-${buttonId}`}
            onSpotDifference={() => handleSpotDifference(difference.id)}
            spottedDifferences={spottedDifferences}
            difference={difference}
            allFound={allFound}
            explanation={explanations[difference.id]}
          />
        ))
      )}
    </div>
  );
};

export default DifferenceButtons;

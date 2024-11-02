import React, { useState, useEffect } from 'react';
import './SpotTheDifference.css';

// Define pairs of button IDs representing differences
const differences = [
  { id: "difference1", buttons: ["diff1-1", "diff1-2"] },
  { id: "difference2", buttons: ["diff2-1", "diff2-2"] },
  { id: "difference3", buttons: ["diff3-1", "diff3-2"] },
  { id: "difference4", buttons: ["diff4-1", "diff4-2"] },
  { id: "difference5", buttons: ["diff5-1", "diff5-2"] },
];

const SpotTheDifferenceButton = ({ buttonId, label, onSpotDifference, spottedDifferences, difference, finished, explanation, gameId, correct}) => {
  return (
    finished ? (
      (buttonId.slice(-1) == "1") ? <p>{explanation}</p> : null
    )
    :
    (
      <button
        style={{ borderColor: spottedDifferences[difference.id] ? "red" : "transparent" }}
        onClick={() => onSpotDifference(buttonId)}
        // className="circle-button"
        className={`circle-button ${gameId}-${buttonId}`}
    >
        {/* {label} */}
      </button>
    ) 
  );
};


const DifferenceButtons = ({ id, setWin, numberOfDiffs, explanations, correctPicture}) => {
  const [spottedDifferences, setSpottedDifferences] = useState({});
  const [allFound, setAllFound] = useState(false);
  const [correct, setCorrect] = useState(false);
  const [finish, setFinish] = useState(false);

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
    <>
    {finish && (correct ? (<p> Congrats, you are right! </p>) : (<p>No, look closer!</p>))}
    <div className="spot-the-difference-game">
      {differences.slice(0, numberOfDiffs).map((difference) =>
        difference.buttons.map((buttonId) => (
          <SpotTheDifferenceButton
            key={buttonId}
            buttonId={buttonId}
            label={buttonId}
            gameId={id}
            // className={`${id}-${buttonId}`}
            onSpotDifference={() => handleSpotDifference(difference.id)}
            spottedDifferences={spottedDifferences}
            difference={difference}
            finished={finish}
            explanation={explanations[difference.id]}
            correct={correct}
          />
        ))
      )}
    </div>
   {(allFound && !finish) && (<div className="question-options">
    <p> You found all differences! Which side to you think is a real news? </p>
    <button onClick={() => {
      if (correctPicture === "left"){
        setCorrect(true);
      }
      setFinish(true);
    }}>
      Left Picture
    </button>
    <button onClick={() => {
      if (correctPicture === "right"){
        setCorrect(true);
      }
      setFinish(true);
    }}>
      Right Picture
    </button>
    </div>)
    }
  </>
  );
};

export default DifferenceButtons;

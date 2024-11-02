import React, { useState } from 'react';
import './leave.css';

function Leave({win, setIsEnd}) {

  const [showMom, setShowMom] = useState(false);

  const handleLeave = (win) => {
    console.log(win.game1);
    if(Object.values(win).every((value) => value === true)){
      setIsEnd(true);
    }
    else{
      setShowMom(true); // Show the "not completed" message
      setTimeout(() => {
        setShowMom(false); // Hide the message after 3 seconds
      }, 3000);
    }
  };

  return (
    <div>
      <button
      onClick={() => handleLeave(win)}
      className="leave-button"
    >
      Leave
    </button>
    {showMom && (
        <p>Finish your homework!</p>
      )}
      {!showMom && <p>Click the button to leave</p>}
    </div>
  );
}

export default Leave;
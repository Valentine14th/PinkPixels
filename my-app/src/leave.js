import React, { useState } from 'react';
import './leave.css';


function Leave({ win, setIsEnd, isEnd }) {
  const [showMom, setShowMom] = useState(false);

  const handleLeave = () => {
    console.log(win.game1);
    if (Object.values(win).every((value) => value === true)) {
      setIsEnd(true);
    } else {
      setShowMom(true); // Show the "not completed" message
      setTimeout(() => {
        setShowMom(false); // Hide the message after 6 seconds
      }, 6000);
    }
  };

  return (
    <div >
      <button
        onClick={handleLeave}
        className="leave-button"
        style={{
          height: '410px', // Set a fixed height to increase vertical size
          width: '20px', // Optionally set a specific width as well
          fontSize: '2em',
          background: 'transparent',
          border: 'none',
          cursor: 'pointer',
          color: 'white',
          position: 'relative',
          outline: 'none',
          marginTop: '70px',
          marginLeft :'80px'
        }}
      >
           
      </button>

      {showMom && (
        <div className="centered-container" style={{ marginTop: '20px' }}>
          <p>"Hast du dein Poster fertig?" rufen deine Eltern. Leider nicht, also zurück an die Arbeit!
          </p>
        </div>
      )}
      {isEnd && (
        <div className="centered-container" style={{ marginTop: '20px' }}>
        <p>Yay! Du hast dein Poster fertig gemacht! Endlich lassen dich deine Eltern aus dem Zimmer, damit du deine Freunde treffen kannst.</p>
      </div>
      )}
    </div>
  );
}

export default Leave;


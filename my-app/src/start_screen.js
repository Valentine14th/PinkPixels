import React from "react";
import './start_screen.css';

function StartScreen({ onStart }) {
  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <div className="doorwall-background">
      <div className="doorwall-content">
      <div className="centered-container">
      <h1>Welcome to the App!</h1>
      <p>Hallo!
Gerade haben deine Freunde geschrieben, dass sie sich gerne treffen wollen. Allerdings zwingt dich deinen Eltern zuerst noch dein Poster für deinen Vortrag fertig zu machen!
Recherchiere mit den verschiedenen Geräten um mehr über Schildkröten zu erfahren!</p>
      <button onClick={onStart} style={{ padding: "10px 20px", fontSize: "1em" }}>
        Start
      </button>
      </div>
    </div>
    </div>
    </div>
  );
}

export default StartScreen;
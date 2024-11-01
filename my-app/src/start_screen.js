import React from "react";

function StartScreen({ onStart }) {
  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h1>Welcome to the App!</h1>
      <p>Click the button below to get started.</p>
      <button onClick={onStart} style={{ padding: "10px 20px", fontSize: "1em" }}>
        Start
      </button>
    </div>
  );
}

export default StartScreen;
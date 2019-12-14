import ReactDOM from "react-dom";
import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";

const CardFlip = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };
  return (
    <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
      <div
        style={{
          backgroundColor: "green",
          height: 100,
          color: "#fff",
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        How do you define the meaning of success?
        <button onClick={handleClick}>Click to flip</button>
      </div>

      <div
        style={{
          backgroundColor: "red",
          height: 100,
          color: "#fff",
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        Create video tutorials on YouTube
        <button onClick={handleClick}>Click to flip</button>
      </div>
    </ReactCardFlip>
  );
};

ReactDOM.render(<CardFlip />, document.querySelector("#root"));

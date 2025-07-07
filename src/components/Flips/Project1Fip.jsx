"use client";

import { useState } from "react";
import "./App.css";

const Project1Flip = () => {
  // Consts for front and back content

  const cardFront = "Project 1 Front";
  const cardBack = "Project 1 Back";

  // Handles flipping the card
  const [isFlipped, setFlipped] = useState(false);
  const handleFlip = () => {
    setFlipped(!isFlipped);
  };

  return (
    <div className="App">
      <div className="container">
        <div className={`flip-card ${isFlipped ? "flipped" : ""}`}>
          <div className="flip-card-inner">
            <div className="flip-card-front" onMouseEnter={handleFlip}>
              <div className="card-content">{cardFront}</div>
            </div>
            <div className="flip-card-back" onMouseLeave={handleFlip}>
              <div className="card-content">{cardBack}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project1Flip;

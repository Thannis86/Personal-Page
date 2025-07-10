"use client";

import { useState } from "react";
import "./Projects.css";
import { Box, Card, Text, Separator } from "@radix-ui/themes";
import Projects from "./Projects.json";
import Image from "next/image";

const ProjectCards = () => {
  const [flippedCards, setFlippedCards] = useState({});

  const handleFlip = (index, flipState) => {
    setFlippedCards((prev) => ({
      ...prev,
      [index]: flipState,
    }));
  };

  return (
    <div id="projects-cards-div">
      {Projects.map((stuff, index) => (
        <div className="projects-container" key={index}>
          <div className={`card ${flippedCards[index] ? "flipped" : ""}`}>
            <div className="card-inner">
              <div
                className="card-front"
                onMouseOver={() => handleFlip(index, true)}
                onClick={() => handleFlip(index, true)}
              >
                <Image
                  className="card-front-image"
                  src={stuff.image}
                  alt={stuff.alt}
                  width={64}
                  height={64}
                />
                <div className="card-front-content">
                  <div className="card-seperator">
                    <Separator size="4" className="card-sub-separator" />
                  </div>
                  <Text className="card-front-text">{stuff.name}</Text>
                </div>
              </div>
              <div
                className="card-back"
                onMouseOut={() => handleFlip(index, false)}
                onClick={() => handleFlip(index, false)}
              >
                <div className="card-back-content">
                  <Text className="card-back-text">Project 1 Back</Text>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectCards;

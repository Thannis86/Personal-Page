"use client";

import { useState } from "react";
import "./Projects.css";
import { Box, Card, Text } from "@radix-ui/themes";
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
            <Box className="card-inner">
              <Card
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
                <div className="card-front-content">{stuff.name}</div>
              </Card>
              <Card
                className="card-back"
                onMouseOut={() => handleFlip(index, false)}
                onClick={() => handleFlip(index, false)}
              >
                <div className="card-back-content">
                  <Text className="card-back-text">Project 1 Back</Text>
                </div>
              </Card>
            </Box>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectCards;

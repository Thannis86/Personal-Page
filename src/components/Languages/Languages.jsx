"use client";

import "./Languages.css";

import { Card, Heading, Separator } from "@radix-ui/themes";
import Image from "next/image";

import { motion } from "framer-motion";
import { useState } from "react";

import LanguageJSON from "./Languages.json";

export default function LanguageCards() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [hoveredIndex2, setHoveredIndex2] = useState(null);

  return (
    <div id="lang-cards-div">
      {LanguageJSON.map((languages, index) => {
        const isHovered = hoveredIndex === index;

        return (
          <div className="lang-cards-container" key={index}>
            <motion.div
              className="lang-cards-grow"
              layout
              onClick={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
              transition={{
                layout: {
                  duration: 0.4,
                  type: "spring",
                  stiffness: 120,
                  damping: 15,
                },
              }}
            >
              <Card
                className={`lang-cards ${isHovered ? "expanded" : "compact"}`}
              >
                <motion.div
                  layout
                  animate={{ scale: isHovered ? 1.2 : 1 }}
                  transition={{
                    visualDuration: 0.5,
                    bounce: 1,
                    type: "spring",
                    stiffness: 120,
                    damping: 15,
                  }}
                  style={{ width: "100%" }}
                >
                  <Image
                    className="lang-cards-logo"
                    src={languages.image}
                    alt={languages.alt}
                    width={64}
                    height={64}
                  />
                </motion.div>
                {isHovered && (
                  <>
                    <Separator my=".5" size="4" className="lang-cards-sep" />
                    <Heading className="lang-cards-text">
                      {languages.name}
                    </Heading>
                  </>
                )}
              </Card>
            </motion.div>
          </div>
        );
      })}
    </div>
  );
}

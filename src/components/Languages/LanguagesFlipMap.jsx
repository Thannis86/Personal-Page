"use client";

import "./Languages.css";

import { Card, Heading, Separator } from "@radix-ui/themes";
import Image from "next/image";

import { motion } from "framer-motion";
import { useState } from "react";

import LanguageJSON from "./Languages.json";

export default function LanguagesFlipMap() {
  const [hoveredIndex, setHoveredIndex] = useState(null); // ✅ fixed here

  return (
    <div className="Over" id="CodesMainCards">
      {LanguageJSON.map((languages, index) => {
        const isHovered = hoveredIndex === index;

        return (
          <div className="container" key={index}>
            <motion.div
              className="grow-card"
              layout
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
              transition={{
                layout: {
                  duration: 0.4,
                  type: "spring",
                  stiffness: 100,
                  damping: 20,
                },
              }}
            >
              <Card
                className={`CodesCard ${isHovered ? "expanded" : "compact"}`}
              >
                <motion.div
                  layout
                  animate={{ scale: isHovered ? 1.2 : 1 }}
                  transition={{ type: "spring", stiffness: 120, damping: 15 }}
                  style={{ width: "100%" }}
                >
                  <Image
                    className="CodeLogo"
                    src={languages.image}
                    alt={languages.alt}
                    width={64}
                    height={64}
                  />
                </motion.div>
                {isHovered && (
                  <>
                    <Separator my=".5" size="4" className="CodeSep" />
                    <Heading className="CodeText">{languages.name}</Heading>
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

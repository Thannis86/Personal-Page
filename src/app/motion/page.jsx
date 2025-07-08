"use client";

import "./Languages.css";

import { Card, Heading, Separator } from "@radix-ui/themes";
import Image from "next/image";
import JavascriptLogo from "@/resources/Logos/javascript.svg";

import { motion } from "framer-motion";
import { useState } from "react";

export default function LanguagesFlip() {
  const [hovered, setHovered] = useState(false);

  return (
    <div className="Over">
      <div className="container">
        <motion.div
          className="grow-card"
          layout
          onHoverStart={() => setHovered(true)}
          onHoverEnd={() => setHovered(false)}
          transition={{ layout: { duration: 0.4, type: "spring" } }}
        >
          <Card className={`CodesCard ${hovered ? "expanded" : "compact"}`}>
            <Image
              className="CodeLogo"
              src={JavascriptLogo}
              alt="Javascript Language Logo"
            />
            {hovered && (
              <>
                <Separator my=".5" size="4" className="CodeSep" />
                <Heading className="CodeText">Javascript</Heading>
              </>
            )}
          </Card>
        </motion.div>
      </div>
    </div>
  );
}

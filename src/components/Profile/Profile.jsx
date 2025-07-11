"use client";

import "./Profile.css";

import { Card, Heading, Separator, Text } from "@radix-ui/themes";

import { motion } from "framer-motion";
import { useState } from "react";

import me from "./sheep.png";
import Image from "next/image";

export default function Profile() {
  const [movedLeft, setMovedLeft] = useState(false);

  return (
    <div id="profile-sub-div">
      <motion.div
        id="profile-motion-div"
        layout
        onClick={() => setMovedLeft(!movedLeft)}
        initial={{ x: 0 }}
        animate={{ x: movedLeft ? -800 : 0 }}
        transition={{ duration: 1, ease: "easeInOut" }}
      >
        <motion.div>
          <Image
            id="profile-image"
            src={me}
            alt="Image of Cameron"
            width={512}
            height={512}
          ></Image>
          <Text>Click The Sheep</Text>
        </motion.div>
        {movedLeft && (
          <motion.div
            id="profile-info"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, ease: "easeInOut", delay: 1 }}
          >
            <div>
              <Heading>Person</Heading>
              <Text>Full Stack Developer</Text>
              <div></div>
              <Text>or so he claims...</Text>
            </div>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
}

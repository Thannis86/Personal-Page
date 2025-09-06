"use client";

import "./Profile.css";

import { Card, Heading, Separator, Text } from "@radix-ui/themes";

import { motion } from "framer-motion";
import { useState } from "react";

import me from "./me.png";
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
        animate={{ x: movedLeft ? -800 : 0, y: movedLeft ? 20 : 0 }}
        transition={{ duration: 1, ease: "easeInOut" }}
      >
        <motion.div id="profile-image-div">
          <div id="profile-empty-div-1">
            <div id="profile-empty-div-2">
              <Image
                id="profile-image"
                src={me}
                alt="Image of Cameron"
                width={512}
                height={512}
              ></Image>
            </div>
          </div>
          <motion.div
            id="profile-image-text"
            initial={{ opacity: 1 }}
            animate={{ opacity: movedLeft ? 0 : 1 }}
            transition={{ duration: 1, ease: "easeInOut" }}
          >
            <Heading>Cameron Burchnall</Heading>
          </motion.div>
        </motion.div>
        <motion.div
          id="profile-info"
          initial={{ opacity: 0 }}
          animate={{ opacity: movedLeft ? 1 : 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          <div>
            <Heading>Cameron Burchnall</Heading>
            <Text>Full Stack Developer</Text>
            <div></div>
            <Text>or so he claims...</Text>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}

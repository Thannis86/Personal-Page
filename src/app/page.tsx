// import Hill1 from "@/resources/Hill1.svg";
// import Image from "next/image";

import "./main.css";

import Grid2 from "@/components/Grid Bits/grid2";

import { Heading, Text } from "@radix-ui/themes";

export default function homePage() {
  return (
    <div id="MainDiv">
      <p>Words</p>
      <div id="HeadText">
        <Heading id="MainHead">I&apos;m Cameron</Heading>
        <Text>Wannabe Fullstack Developer</Text>
      </div>
      <Grid2 />
      {/* <div id="hill1div">
        <Image src={Hill1} alt="Hill at front of page" id="hill1"></Image>
        <Hill1 />
      </div>
      <div id="hill2"></div> */}
    </div>
  );
}

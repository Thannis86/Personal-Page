import "./main.css";

// import Langauges from "@/components/Languages/Languages";

import LanguagesFlipMap from "@/components/Languages/LanguagesFlipMap";

import Project1Flip from "@/components/Flips/Project1Fip";

// import Grid2 from "@/components/Grid Bits/grid2";

export default function homePage() {
  return (
    <div id="MainDiv">
      {/* <Langauges /> */}
      {/* <LanguagesFlip /> */}
      <Project1Flip />
      <LanguagesFlipMap />
    </div>
  );
}

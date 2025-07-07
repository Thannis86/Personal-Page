import "./main.css";

import Langauges from "@/components/Languages/Languages";

import Project1Flip from "@/components/Flips/Project1Fip";

// import Grid2 from "@/components/Grid Bits/grid2";

export default function homePage() {
  return (
    <div id="MainDiv">
      <Langauges />
      <Project1Flip />
    </div>
  );
}

import "./main.css";

import LanguageCards from "@/components/Languages/Languages";
import ProjectCards from "@/components/Projects/Projects";
import { Text } from "@radix-ui/themes";

// import Grid2 from "@/components/Grid Bits/grid2";

export default function homePage() {
  return (
    <div id="MainDiv">
      <div id="profile-div">
        <Text>Test</Text>
      </div>
      <div id="about-me-div"></div>
      <div id="projects-div">
        <ProjectCards />
      </div>
      <div id="languages-div">
        <LanguageCards />
      </div>
      <div id="get-in-touch-div"></div>
    </div>
  );
}

import "./main.css";

import LanguageCards from "@/components/Languages/Languages";
import ProjectCards from "@/components/Projects/Projects";
import Profile from "@/components/Profile/Profile";

export default function homePage() {
  return (
    <div id="MainDiv">
      <div id="profile-div">
        <Profile />
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

import CeoMessage from "@/components/templates/Sections/ceoMessage";
import AboutSplash from "@/components/templates/Sections/aboutSplash";
import { team } from "../data";

function About({}) {
  const teamlist = team.staff;
  return (
    <>
      <AboutSplash teamlist={teamlist} />
    </>
  );
}

export default About;

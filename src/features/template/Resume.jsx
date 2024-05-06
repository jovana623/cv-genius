import "../../styles/components/Resume.scss";
import ContactInformations from "../contact/ContactInformations";
import ExperienceInformations from "../experence/ExperienceInformations";
import LanguageInformations from "../languages/LanguageInformations";
import ObjectiveInformations from "../objective/ObjectiveInformations";
import SkillsInformations from "../skills/SkillsInformations";
import ResumeHeader from "../contact/Profile";
import EducationInformations from "../education/EducationInformations";
import { useSelector } from "react-redux";

function Resume() {
  const { lineHeight, fontSize, fontFamily } = useSelector(
    (state) => state.font
  );
  console.log(fontFamily);
  return (
    <div className="resume" id="resume">
      <div>
        <ResumeHeader />
      </div>
      <div
        className="resume__main-info"
        style={{
          lineHeight: lineHeight,
          fontSize: fontSize + "px",
          fontFamily: fontFamily,
        }}
      >
        <div className="resume__side--left">
          <ContactInformations />
          <SkillsInformations />
          <LanguageInformations />
        </div>
        <div className="resume__side--right">
          <ObjectiveInformations />
          <ExperienceInformations />
          <EducationInformations />
        </div>
      </div>
    </div>
  );
}

export default Resume;
